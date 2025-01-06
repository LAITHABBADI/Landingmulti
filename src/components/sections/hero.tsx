"use client"

import { MotionDiv, MotionH1, MotionP } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const Hero = () => {
  return (
    <div className="relative min-h-[75vh]">
      {/* Grid Pattern */}
      <div className="absolute inset-0">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-delay" />
      </div>
      
      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Content */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-medium mb-3">
                <CheckCircle2 className="w-4 h-4" />
                Award-winning Development Team
              </div>
            </MotionDiv>
            
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight"
            >
              Build Better Software,
              <br />
              <span className="text-primary">Faster</span>
            </MotionH1>

            <MotionP
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-muted-foreground mb-4 max-w-2xl"
            >
              Expert software development that turns complex challenges into elegant solutions. 
              Let&apos;s build something great together.
            </MotionP>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button size="lg" className="group">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Schedule Consultation
              </Button>
            </MotionDiv>

            {/* Stats */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl w-full"
            >
              {[
                { number: "10+", label: "Years Experience" },
                { number: "200+", label: "Projects Delivered" },
                { number: "50+", label: "Team Members" },
                { number: "99%", label: "Client Satisfaction" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary mb-0.5">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 