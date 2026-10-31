import { useEffect, useState } from "react";
import styles from "../Style/Projects.module.css";
import { projects as curatedProjects } from "../data/projects";
import { addGitHubActivity, fetchGitHubRepositories } from "../services/github";
import type { Project } from "../types";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [projects, setProjects] = useState<Project[]>(curatedProjects);
  const [isLoading, setIsLoading] = useState(true);
  const [syncError, setSyncError] = useState<string | null>(null);
  const [lastSyncedAt, setLastSyncedAt] = useState<Date | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetchGitHubRepositories(controller.signal)
      .then((repositories) => {
        if (!controller.signal.aborted) {
          setProjects(addGitHubActivity(curatedProjects, repositories));
          setLastSyncedAt(new Date());
          setSyncError(null);
        }
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) {
          setSyncError(
            error instanceof Error
              ? error.message
              : "An unexpected error occurred while loading GitHub activity.",
          );
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [refreshKey]);

  const refreshProjects = () => {
    setIsLoading(true);
    setSyncError(null);
    setRefreshKey((key) => key + 1);
  };

  return (
    <section className={styles.projectsSection}>
      <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>Projects and Coursework</h1>

        <a
          href="https://github.com/psc3245"
          className={styles.seeMoreButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          More on GitHub
        </a>
      </div>

      <div className={styles.githubSync} aria-live="polite">
        <p>
          {isLoading
            ? "Loading live GitHub activity…"
            : syncError
              ? `GitHub activity could not be refreshed: ${syncError}`
              : lastSyncedAt
                ? `Live GitHub activity · refreshed ${lastSyncedAt.toLocaleTimeString()}`
                : "Showing saved project details."}
        </p>
        <button
          className={styles.refreshButton}
          type="button"
          onClick={refreshProjects}
          disabled={isLoading}
        >
          {isLoading ? "Refreshing…" : "Refresh"}
        </button>
      </div>

      <p className={styles.sourceLink}>
        This site is also a project — check out its{" "}
        <a
          href="https://github.com/psc3245/Portfolio_Website"
          target="_blank"
          rel="noopener noreferrer"
        >
          source code on GitHub
        </a>
        .
      </p>

      <div className={styles.projectsContent}>
        <div className={styles.projectsGrid}>
          {projects.map((p, index) => (
            <div
              key={`${p.name}-${index}`}
              className={styles.projectCardWrapper}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
