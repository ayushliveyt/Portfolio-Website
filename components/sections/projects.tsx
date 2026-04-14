"use client"

import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A clean, modern portfolio website built from scratch using HTML and CSS. Features responsive design, smooth animations, and optimized performance.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: "/projects/portfolio.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Business Landing Page",
    description:
      "A professional landing page for a local business, featuring a hero section, services grid, testimonials, and contact form with modern styling.",
    tech: ["HTML5", "CSS3", "Flexbox"],
    image: "/projects/landing.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Python Automation Script",
    description:
      "A powerful automation script that helps organize files, automate repetitive tasks, and improve workflow efficiency. Includes error handling and logging.",
    tech: ["Python", "OS Module", "Logging"],
    image: "/projects/automation.jpg",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500"
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Folder className="w-16 h-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 gap-2 text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 gap-2 text-muted-foreground hover:text-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-border/50 hover:border-primary/50"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
