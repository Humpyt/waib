"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Circles */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-float"
        style={{
          top: "10%",
          left: "10%",
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-green-400/15 to-teal-400/15 rounded-full blur-3xl animate-float-delayed"
        style={{
          top: "60%",
          right: "10%",
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
        }}
      />
      <div
        className="absolute w-48 h-48 bg-gradient-to-r from-teal-400/25 to-blue-400/25 rounded-full blur-2xl animate-pulse"
        style={{
          bottom: "20%",
          left: "20%",
          transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
        }}
      />
    </div>
  )
}
