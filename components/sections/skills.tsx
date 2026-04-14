"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  {
    name: "HTML5",
    level: 90,
    color: "from-orange-500 to-red-500",
    description: "Semantic markup, accessibility, SEO optimization",
  },
  {
    name: "CSS3",
    level: 85,
    color: "from-blue-500 to-cyan-500",
    description: "Flexbox, Grid, animations, responsive design",
  },
  {
    name: "Python",
    level: 75,
    color: "from-yellow-500 to-green-500",
    description: "Automation, scripts, data processing",
  },
  {
    name: "JavaScript",
    level: 70,
    color: "from-yellow-400 to-orange-500",
    description: "DOM manipulation, ES6+, async programming",
  },
  {
    name: "React",
    level: 65,
    color: "from-cyan-400 to-blue-500",
    description: "Components, hooks, state management",
  },
  {
    name: "Git",
    level: 80,
    color: "from-orange-400 to-red-600",
    description: "Version control, branching, collaboration",
  },
]

const tools = [
  "VS Code", "GitHub", "Figma", "Chrome DevTools", 
  "Terminal", "Vercel", "Netlify", "npm"
]

function SkillBar({ skill, inView }: { skill: typeof skills[0]; inView: boolean }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth(skill.level), 100)
      return () => clearTimeout(timer)
    }
  }, [inView, skill.level])

  return (
    <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
        <span className="text-sm font-medium text-primary">{skill.level}%</span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Skills & Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Technologies I work with
          </h2>
          <p className="text-muted-foreground">
            Continuously learning and improving my skills to deliver the best results
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} inView={inView} />
          ))}
        </div>

        {/* Tools Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary/50 text-secondary-foreground text-sm font-medium rounded-full border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
