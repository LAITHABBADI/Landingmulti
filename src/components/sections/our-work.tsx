"use client"

import { useState } from "react"
import { MotionDiv } from "@/lib/motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe } from "lucide-react"
import Image from "next/image"

type Project = {
  id: string
  title: string
  description: string
  image: string
  category: "web" | "mobile" | "desktop" | "all"
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  color: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management",
    image: "/our-work/photo-1472851294608-062f824d29cc.png",
    category: "web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    color: "blue"
  },
  {
    id: "2",
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication",
    image: "/our-work/photo-1563013544-824ae1b704d3.png",
    category: "mobile",
    technologies: ["React Native", "Node.js", "MongoDB"],
    color: "green"
  },
  {
    id: "3",
    title: "Desktop Analytics Tool",
    description: "Real-time data analytics and visualization desktop application",
    image: "/our-work/photo-1551288049-bebda4e38f71.png",
    category: "desktop",
    technologies: ["Electron", "React", "D3.js"],
    githubUrl: "https://github.com",
    color: "purple"
  },
  {
    id: "4",
    title: "Healthcare Platform",
    description: "Telemedicine and patient management system",
    image: "/our-work/photo-1576091160550-2173dba999ef.png",
    category: "web",
    technologies: ["React", "Node.js", "PostgreSQL"],
    color: "blue"
  },
  {
    id: "5",
    title: "Delivery App",
    description: "Real-time delivery tracking and management application",
    image: "/our-work/photo-1526628953301-3e589a6a8b74.png",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "Google Maps"],
    color: "green"
  },
  {
    id: "6",
    title: "AI Video Editor",
    description: "Desktop video editing software with AI capabilities",
    image: "/our-work/photo-1536240478700-b869070f9279.png",
    category: "desktop",
    technologies: ["Python", "TensorFlow", "Qt"],
    color: "purple"
  }
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "desktop", label: "Desktop Apps" },
] as const

export function OurWork() {
  const [selectedCategory, setSelectedCategory] = useState<Project["category"]>("all")

  const filteredProjects = projects.filter(
    project => selectedCategory === "all" || project.category === selectedCategory
  )

  return (
    <section id="work" className="py-20">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Featured Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions
          </p>
        </MotionDiv>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="min-w-[120px]"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-background rounded-xl overflow-hidden border">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                    loading={index >= 3 ? "lazy" : undefined}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/our-work/photo-1618005182384-a83a8bd57fbe.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Globe className="w-6 h-6 text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    {project.liveUrl && (
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    )}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={cn(
                          "px-2 py-1 rounded-full text-xs",
                          `bg-${project.color}-500/10 text-${project.color}-500`
                        )}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
} 