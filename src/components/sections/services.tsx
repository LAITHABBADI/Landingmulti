"use client"

import { MotionDiv } from "@/lib/motion"
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Database, 
  Bot, 
  Shield,
  Layers,
  GitBranch
} from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Custom Software Development",
    description: "Tailored enterprise solutions built with cutting-edge technologies to solve your unique business challenges.",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & DevOps",
    description: "Modern cloud infrastructure and CI/CD pipelines that ensure scalability, security, and rapid deployment.",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Engineering",
    description: "Robust data pipelines and analytics solutions to help you make data-driven decisions.",
    color: "bg-orange-500/10 text-orange-500"
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI & Machine Learning",
    description: "Advanced AI solutions that automate processes and provide intelligent insights for your business.",
    color: "bg-pink-500/10 text-pink-500"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your applications and infrastructure from threats.",
    color: "bg-red-500/10 text-red-500"
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "API Development",
    description: "Scalable and secure APIs that enable seamless integration and extend your platform's capabilities.",
    color: "bg-cyan-500/10 text-cyan-500"
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Legacy Modernization",
    description: "Transform legacy systems into modern, scalable applications using the latest technologies.",
    color: "bg-amber-500/10 text-amber-500"
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Software Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end software development services
            to help your business thrive in the digital age.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all"
            >
              <div className={cn("relative rounded-full w-12 h-12 flex items-center justify-center mb-4", service.color)}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
} 