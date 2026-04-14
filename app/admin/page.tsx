"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  FileText,
  Mail,
  Settings,
  Users,
  BarChart3,
  Menu,
  X,
  Bell,
  Search,
  ChevronRight,
  TrendingUp,
  Eye,
  MessageSquare,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Projects", icon: FileText, active: false },
  { name: "Messages", icon: Mail, active: false, badge: 3 },
  { name: "Analytics", icon: BarChart3, active: false },
  { name: "Users", icon: Users, active: false },
  { name: "Settings", icon: Settings, active: false },
]

const stats = [
  {
    title: "Total Views",
    value: "12,543",
    change: "+12.5%",
    icon: Eye,
    trend: "up",
  },
  {
    title: "Projects",
    value: "24",
    change: "+3",
    icon: FileText,
    trend: "up",
  },
  {
    title: "Messages",
    value: "156",
    change: "+18.2%",
    icon: MessageSquare,
    trend: "up",
  },
  {
    title: "Visitors",
    value: "3,240",
    change: "+8.1%",
    icon: Users,
    trend: "up",
  },
]

const recentMessages = [
  {
    name: "John Doe",
    email: "john@example.com",
    message: "Interested in hiring you for a project...",
    time: "2 hours ago",
  },
  {
    name: "Sarah Smith",
    email: "sarah@example.com",
    message: "Love your portfolio! Would you be available...",
    time: "5 hours ago",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    message: "Quick question about your services...",
    time: "1 day ago",
  },
]

const recentProjects = [
  { name: "Portfolio Website", status: "Completed", date: "Mar 15, 2024" },
  { name: "E-commerce Landing", status: "In Progress", date: "Mar 12, 2024" },
  { name: "Python Automation", status: "Completed", date: "Mar 10, 2024" },
]

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-card border-r border-border transform transition-transform duration-300 lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-border">
          <span className="text-xl font-bold">
            <span className="text-primary">Ayush</span>
            <span className="text-foreground">.dev</span>
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                item.active
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
              {item.badge && (
                <span className="ml-auto px-2 py-0.5 text-xs bg-primary text-primary-foreground rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Link href="/">
            <Button variant="outline" className="w-full gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </Button>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-xl border-b border-border">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="w-64 pl-10 bg-secondary/50 border-0"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </Button>
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">AT</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Welcome back, Ayush! Here&apos;s what&apos;s happening.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="flex items-center gap-1 text-sm text-green-500">
                    <TrendingUp className="w-3 h-3" />
                    {stat.change}
                  </span>
                </div>
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Recent Messages */}
            <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="text-lg font-semibold text-foreground">
                  Recent Messages
                </h2>
                <Button variant="ghost" size="sm" className="gap-1 text-primary">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="divide-y divide-border/50">
                {recentMessages.map((msg, index) => (
                  <div key={index} className="p-4 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">
                          {msg.name.charAt(0)}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className="font-medium text-foreground truncate">
                            {msg.name}
                          </p>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {msg.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {msg.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Projects */}
            <div className="rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <h2 className="text-lg font-semibold text-foreground">
                  Recent Projects
                </h2>
                <Button variant="ghost" size="sm" className="gap-1 text-primary">
                  View All
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              <div className="divide-y divide-border/50">
                {recentProjects.map((project, index) => (
                  <div key={index} className="p-4 hover:bg-secondary/30 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">
                          {project.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {project.date}
                        </p>
                      </div>
                      <span
                        className={cn(
                          "px-3 py-1 text-xs font-medium rounded-full",
                          project.status === "Completed"
                            ? "bg-green-500/10 text-green-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        )}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
