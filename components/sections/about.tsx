"use client"

import { Code2, Lightbulb, Rocket, Target } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code that follows best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Finding creative solutions to complex development challenges",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Delivering high-quality projects within agreed timelines",
  },
  {
    icon: Target,
    title: "Detail Oriented",
    description: "Paying attention to every pixel and line of code",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                Passionate about creating{" "}
                <span className="text-primary">digital experiences</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hi! I&apos;m Ayush Tiwari, a passionate developer based in India with a love 
                for creating beautiful and functional web experiences. My journey in 
                development started with curiosity and has grown into a genuine passion 
                for building things that make a difference.
              </p>
              <p>
                I specialize in HTML, CSS, and Python, constantly expanding my skills 
                and staying updated with the latest technologies. Whether it&apos;s crafting 
                pixel-perfect landing pages or building automation scripts, I bring 
                dedication and attention to detail to every project.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, and helping fellow developers in 
                the community. I believe in continuous learning and growth.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["HTML5", "CSS3", "Python", "JavaScript", "React", "Git"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-secondary/50 text-secondary-foreground text-sm font-medium rounded-full border border-border/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
