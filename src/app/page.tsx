import dynamic from 'next/dynamic'
import Hero from "@/components/sections/hero"
import { OurWork } from "@/components/sections/our-work"

// Dynamically import heavy components
const Services = dynamic(() => import("@/components/sections/services"), {
  loading: () => <div className="h-screen animate-pulse bg-muted" />
})

const Solutions = dynamic(() => import("@/components/sections/solutions"), {
  loading: () => <div className="h-screen animate-pulse bg-muted" />
})

const Process = dynamic(() => import("@/components/sections/process"), {
  loading: () => <div className="h-screen animate-pulse bg-muted" />
})

const Testimonials = dynamic(() => import("@/components/sections/testimonials"), {
  loading: () => <div className="h-screen animate-pulse bg-muted" />
})

const Pricing = dynamic(() => import("@/components/sections/pricing"), {
  loading: () => <div className="h-screen animate-pulse bg-muted" />
})

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Solutions />
      <OurWork />
      <Process />
      <Testimonials />
      <Pricing />
    </main>
  )
}
