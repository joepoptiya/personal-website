import { ProjectCard } from "@/components/project-card"
import projectsData from "@/data/projects.json"
import { type ProjectsData } from "@/types/project"

export default function ProjectsPage() {
  const { projects } = projectsData as ProjectsData

  return (
    <div className="container py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter">Projects</h1>
        <p className="text-lg text-muted-foreground">
          Here are some of the projects I&apos;ve worked on. Each project represents
          different challenges and learning experiences.
        </p>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
