import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transform hover:scale-105",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        modern: "border-0 px-6 py-2 text-sm font-semibold",
        "modern-blue": "bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-0 px-6 py-2 text-sm font-semibold",
        "modern-green": "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-0 px-6 py-2 text-sm font-semibold",
        "modern-purple": "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0 px-6 py-2 text-sm font-semibold",
        "modern-yellow": "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-0 px-6 py-2 text-sm font-semibold",
        "modern-teal": "bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 border-0 px-6 py-2 text-sm font-semibold",
        "hero": "bg-white/20 backdrop-blur-sm text-white border-white/30 px-8 py-4 text-lg font-semibold rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
