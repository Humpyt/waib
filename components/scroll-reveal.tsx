"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export default function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    const base = "transition-all duration-700 ease-out"
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${base} opacity-0 translate-y-8`
        case "down":
          return `${base} opacity-0 -translate-y-8`
        case "left":
          return `${base} opacity-0 translate-x-8`
        case "right":
          return `${base} opacity-0 -translate-x-8`
        case "fade":
          return `${base} opacity-0`
        default:
          return `${base} opacity-0 translate-y-8`
      }
    }
    return `${base} opacity-100 translate-x-0 translate-y-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
