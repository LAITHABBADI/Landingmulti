"use client"

import { MotionDiv } from "@/lib/motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    image: "https://i.pravatar.cc/150?img=1",
    content: "Their team delivered our enterprise software solution ahead of schedule. The quality of code and attention to detail was exceptional. We've seen a 40% improvement in operational efficiency.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "CEO at DataFlow",
    image: "https://i.pravatar.cc/150?img=2",
    content: "The AI solution they developed has transformed our data analytics capabilities. Their expertise in machine learning and commitment to our success was impressive.",
    rating: 5
  },
  {
    name: "Emily Thompson",
    role: "Product Director at InnovateTech",
    image: "https://i.pravatar.cc/150?img=3",
    content: "Working with their team on our mobile app was a game-changer. They brought innovative ideas and delivered a product that our users love. Downloads increased by 200%.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/30">
      <div className="container px-4 mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we&apos;ve helped companies transform their businesses through innovative software solutions.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <MotionDiv
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-sm border"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-muted-foreground">
                &quot;{testimonial.content}&quot;
              </blockquote>
            </MotionDiv>
          ))}
        </div>

        {/* Client Metrics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: "500+", label: "Projects Delivered" },
            { metric: "98%", label: "Client Satisfaction" },
            { metric: "50+", label: "Enterprise Clients" },
            { metric: "15+", label: "Years Experience" },
          ].map((item, index) => (
            <MotionDiv
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {item.metric}
              </div>
              <div className="text-muted-foreground">
                {item.label}
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  )
} 