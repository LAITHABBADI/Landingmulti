"use client"

import { MotionDiv } from "@/lib/motion"
import { motion } from "framer-motion"
import { 
  Building2, 
  HeartPulse, 
  ShoppingBag, 
  Truck, 
  Wallet, 
  Building 
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const solutions = [
  {
    icon: <Wallet className="h-6 w-6" />,
    title: "Digital Banking",
    description: "Modern fintech solutions with secure payment processing, digital wallets, and banking automation.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    features: ["Payment Processing", "Digital Wallets", "Banking Automation"]
  },
  {
    icon: <HeartPulse className="h-6 w-6" />,
    title: "Healthcare",
    description: "Innovative healthcare solutions for patient management, telemedicine, and medical records.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    features: ["Patient Management", "Telemedicine", "Medical Records"]
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: "E-commerce",
    description: "Scalable e-commerce platforms with inventory management and payment integration.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    features: ["Inventory Management", "Payment Integration", "Order Processing"]
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: "Real Estate",
    description: "Property management solutions with virtual tours and automated listings.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    features: ["Property Management", "Virtual Tours", "Automated Listings"]
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Logistics",
    description: "Supply chain optimization with real-time tracking and route planning.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    features: ["Route Planning", "Real-time Tracking", "Inventory Control"]
  },
  {
    icon: <Building className="h-6 w-6" />,
    title: "Manufacturing",
    description: "Smart manufacturing solutions with IoT integration and process automation.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    features: ["Process Automation", "IoT Integration", "Quality Control"]
  }
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tailored software solutions for various industries to drive digital transformation and growth
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {solutions.map((solution, index) => (
            <MotionDiv
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 h-full bg-background rounded-xl p-6 border shadow-sm hover:shadow-md transition-all">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={cn(
                    "flex items-center justify-center w-12 h-12 rounded-lg shrink-0",
                    solution.bgColor
                  )}>
                    <motion.div
                      className={solution.color}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {solution.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className={cn("w-1.5 h-1.5 rounded-full", solution.bgColor)} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary/5"
                >
                  Learn More
                </Button>
              </div>
            </MotionDiv>
          ))}
        </div>

        {/* Call to Action */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Don&apos;t see your industry? We create custom solutions for unique business needs.
          </p>
          <Button size="lg" className="px-8">
            Contact Us
          </Button>
        </MotionDiv>
      </div>
    </section>
  )
} 