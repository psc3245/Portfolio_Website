import type { Project } from "../types";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div>
      <div>
        <p>{project.name}</p>
      </div>
      <div>
        <ul>
          {project.technologies.map((t) => {
            return <li key={t}>{t}</li>;
          })}
        </ul>
      </div>
      <div>
        <p>{project.description}</p>
      </div>
      <div>
        <a href={project.github_link}>See the code here</a>
        <a href={project.deployment_link}>See the project here</a>
      </div>
      <div>
        <p>Started: {" " + project.start_date}</p>
        <p>Completed: {" " + project.finish_date}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
