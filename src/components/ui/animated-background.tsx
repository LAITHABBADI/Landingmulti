"use client"

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const AnimatedBackgroundContent = () => {
  // Your existing animated background component code here
  return (
    <motion.div
      // ... your motion props
    >
      {/* ... your component content */}
    </motion.div>
  )
}

// Create a dynamic component with SSR disabled
const AnimatedBackground = dynamic(() => Promise.resolve(AnimatedBackgroundContent), {
  ssr: false
})

export default AnimatedBackground 