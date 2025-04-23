export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
}

export interface ProjectsData {
  projects: Project[];
}
