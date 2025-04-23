import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container">
      <section className="flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/avatar.jpg" alt="Joe Poptiya" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Hi, I&apos;m Joe Poptiya
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          A passionate developer focused on building beautiful and functional web applications
        </p>
        <div className="flex flex-col gap-4 min-[400px]:flex-row">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Projects
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Frontend Development</h3>
            <p className="text-muted-foreground">
              Building responsive and accessible web applications using modern frameworks
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Backend Development</h3>
            <p className="text-muted-foreground">
              Designing scalable server architectures and RESTful APIs
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="text-muted-foreground">
              Creating intuitive and beautiful user interfaces with attention to detail
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
