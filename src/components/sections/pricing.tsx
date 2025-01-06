"use client"

import { MotionDiv } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const pricingPlans = [
  {
    name: "MVP Package",
    description: "Perfect for startups and proof of concept",
    price: "Starting at $25k",
    duration: "2-3 months",
    features: [
      "Custom Web Application",
      "Essential Features Development",
      "Responsive Design",
      "Basic User Authentication",
      "Core Database Setup",
      "Basic API Integration",
      "2 Rounds of Revisions",
      "3 Months Support & Maintenance",
      "Basic SEO Setup",
      "Performance Optimization"
    ]
  },
  {
    name: "Professional",
    description: "Full-featured solution for growing businesses",
    price: "Starting at $50k",
    duration: "4-6 months",
    featured: true,
    features: [
      "Everything in MVP, plus:",
      "Mobile App (iOS & Android)",
      "Advanced User Management",
      "Payment Gateway Integration",
      "Real-time Features",
      "Advanced Analytics",
      "Custom Admin Dashboard",
      "API Documentation",
      "Cloud Infrastructure Setup",
      "6 Months Support & Maintenance",
      "Advanced Security Features",
      "Performance Monitoring"
    ]
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    price: "Custom Quote",
    duration: "6+ months",
    features: [
      "Everything in Professional, plus:",
      "Microservices Architecture",
      "Custom Enterprise Features",
      "Legacy System Integration",
      "Load Balancing Setup",
      "Database Clustering",
      "24/7 Priority Support",
      "Dedicated Development Team",
      "Custom SLA",
      "DevOps Implementation",
      "Advanced Security Audit",
      "Scalability Planning"
    ]
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transparent Development Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect package for your project. All plans include our core development expertise and quality assurance.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <MotionDiv
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl p-8 border ${
                plan.featured ? 'border-primary shadow-lg' : ''
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                {plan.duration && (
                  <div className="text-sm text-muted-foreground">
                    Estimated Timeline: {plan.duration}
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${!plan.featured ? 'variant-outline' : ''}`}
                variant={plan.featured ? 'default' : 'outline'}
              >
                {plan.price === "Custom Quote" ? "Contact Us" : "Get Started"}
              </Button>

              {/* Additional Info */}
              <p className="text-xs text-muted-foreground mt-4 text-center">
                *Final pricing may vary based on specific requirements
              </p>
            </MotionDiv>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">All Plans Include</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Source Code Ownership",
              "Project Management",
              "Quality Assurance",
              "Technical Documentation",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 p-4 rounded-lg bg-secondary/50">
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 