"use client"

import { MotionDiv } from "@/lib/motion"
import { 
  Kanban,
  GitBranch,
  Workflow,
  BarChart2,
  Zap,
  Shield
} from "lucide-react"

const features = [
  {
    icon: <Kanban className="h-6 w-6" />,
    title: "Agile Boards",
    description: "Plan, track, and manage agile software development projects with customizable Scrum and Kanban boards."
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "DevOps Integration",
    description: "Connect your development work to your deployment pipelines with built-in CI/CD tools."
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Automation",
    description: "Automate repetitive tasks and processes with powerful no-code automation rules."
  },
  {
    icon: <BarChart2 className="h-6 w-6" />,
    title: "Real-time Reports",
    description: "Get insights into team performance and project progress with customizable dashboards."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "High Performance",
    description: "Built for speed and reliability, handle thousands of issues with ease."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Advanced security features to keep your data safe and compliant."
  }
]

export default function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Everything you need to succeed
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features to help your team move work forward
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-6 rounded-lg bg-background border transition-shadow hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
} 