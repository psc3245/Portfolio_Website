export interface Project {
  name: string;
  technologies: string[];
  description: string;
  github_link: string;
  deployment_link: string;
  status: string;
  last_pushed_at?: string;
  stargazers_count?: number;
}