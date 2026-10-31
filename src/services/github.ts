import type { Project } from "../types";

const repositoriesUrl =
  "https://api.github.com/users/psc3245/repos?type=owner&sort=updated&per_page=100";

interface GitHubRepository {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  pushed_at: string;
  archived: boolean;
  fork: boolean;
  stargazers_count: number;
}

function isGitHubRepository(value: unknown): value is GitHubRepository {
  if (typeof value !== "object" || value === null) return false;

  const repository = value as Record<string, unknown>;
  return (
    typeof repository.name === "string" &&
    typeof repository.html_url === "string" &&
    (typeof repository.description === "string" ||
      repository.description === null) &&
    (typeof repository.language === "string" || repository.language === null) &&
    typeof repository.pushed_at === "string" &&
    !Number.isNaN(Date.parse(repository.pushed_at)) &&
    typeof repository.archived === "boolean" &&
    typeof repository.fork === "boolean" &&
    typeof repository.stargazers_count === "number"
  );
}

export async function fetchGitHubRepositories(
  signal?: AbortSignal,
): Promise<GitHubRepository[]> {
  const response = await fetch(repositoriesUrl, {
    headers: { Accept: "application/vnd.github+json" },
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `GitHub returned ${response.status} ${response.statusText || "error"}.`,
    );
  }

  const payload: unknown = await response.json();
  if (!Array.isArray(payload) || !payload.every(isGitHubRepository)) {
    throw new Error("GitHub returned repository data in an unexpected format.");
  }

  return payload.filter((repository) => !repository.fork && !repository.archived);
}

function repositoryName(githubLink: string): string | undefined {
  if (!githubLink) return undefined;

  const segments = new URL(githubLink).pathname.split("/").filter(Boolean);
  return segments.length === 2 ? segments[1].toLowerCase() : undefined;
}

export function addGitHubActivity(
  projects: Project[],
  repositories: GitHubRepository[],
): Project[] {
  const repositoriesByName = new Map(
    repositories.map((repository) => [repository.name.toLowerCase(), repository]),
  );

  return projects.map((project) => {
    const name = repositoryName(project.github_link);
    const repository = name ? repositoriesByName.get(name) : undefined;

    if (!repository) return project;

    const technologies = repository.language &&
      !project.technologies.some(
        (technology) =>
          technology.toLowerCase() === repository.language?.toLowerCase(),
      )
      ? [...project.technologies, repository.language]
      : project.technologies;

    return {
      ...project,
      technologies,
      last_pushed_at: repository.pushed_at,
      stargazers_count: repository.stargazers_count,
    };
  });
}
