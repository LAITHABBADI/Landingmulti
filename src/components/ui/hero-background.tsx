"use client"

import Image from "next/image"

export const HeroBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/80 to-background z-10" />
      
      {/* Background image */}
      <Image
        src="/hero/photo-1581090700227-1e37b190418e.png"
        alt="Digital background"
        fill
        priority
        className="object-cover object-center brightness-90"
        sizes="100vw"
      />

      {/* Grain effect overlay */}
      <div className="absolute inset-0 bg-black/20 z-[5] mix-blend-multiply" />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 z-[6] opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, 
              var(--primary) 0%, 
              transparent 50%
            )
          `,
          backgroundSize: '100% 100%',
          animation: 'pulse 8s infinite'
        }}
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20 z-[7]"
        style={{
          backgroundImage: `
            linear-gradient(var(--primary) 0.5px, transparent 0.5px),
            linear-gradient(to right, var(--primary) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '32px 32px'
        }}
      />
    </div>
  )
} 