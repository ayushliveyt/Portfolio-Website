"use client"

import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const posts = [
  {
    title: "Getting Started with HTML5: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of HTML5 and start building your first web pages. This comprehensive guide covers semantic elements, forms, and best practices.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "HTML",
    slug: "#",
  },
  {
    title: "CSS Flexbox vs Grid: When to Use Which",
    excerpt:
      "Understanding the differences between Flexbox and Grid layouts, and knowing when to use each one for optimal web design results.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "CSS",
    slug: "#",
  },
  {
    title: "Python Automation: Simplify Your Daily Tasks",
    excerpt:
      "Discover how to use Python to automate repetitive tasks, from file organization to web scraping, and boost your productivity.",
    date: "March 5, 2024",
    readTime: "8 min read",
    category: "Python",
    slug: "#",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Blog
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Latest Insights
          </h2>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and tips from my journey in web development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group flex flex-col rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="p-6 pb-0">
                <span className="inline-flex px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Read More */}
                <a
                  href={post.slug}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group/link"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-border/50 hover:border-primary/50"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  )
}
