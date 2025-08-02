import type React from "react"
interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <div
      className={`
        backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl
        shadow-xl shadow-black/10
        ${hover ? "hover:bg-white/20 hover:shadow-2xl hover:shadow-black/20 hover:scale-105" : ""}
        transition-all duration-300 ease-out
        ${className}
      `}
    >
      {children}
    </div>
  )
}
