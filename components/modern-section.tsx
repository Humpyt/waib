import React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import ScrollReveal from '@/components/scroll-reveal'

interface ModernSectionProps {
  children: React.ReactNode
  className?: string
  background?: 'light' | 'dark' | 'gradient' | 'image'
  backgroundImage?: string
  padding?: 'normal' | 'large' | 'small'
}

interface ModernSectionHeaderProps {
  badge?: string
  badgeIcon?: string
  title: string
  subtitle?: string
  description?: string
  titleGradient?: string
  className?: string
}

interface ModernHeroProps {
  backgroundImage: string
  badge: string
  title: string
  subtitle?: string
  description: string
  primaryCta: {
    text: string
    icon?: React.ComponentType<{ className?: string }>
    gradient?: string
  }
  secondaryCta?: {
    text: string
    icon?: React.ComponentType<{ className?: string }>
  }
  floatingStats?: Array<{
    value: string
    label: string
    delay?: string
  }>
  className?: string
}

export function ModernSection({ 
  children, 
  className, 
  background = 'light',
  backgroundImage,
  padding = 'normal'
}: ModernSectionProps) {
  const paddingClass = {
    small: 'py-16',
    normal: 'py-32',
    large: 'py-40'
  }[padding]

  const backgroundClass = {
    light: 'bg-white',
    dark: 'bg-gradient-to-br from-slate-900 via-blue-900 to-green-900',
    gradient: 'bg-gradient-to-r from-gray-50/50 to-blue-50/50',
    image: 'relative overflow-hidden'
  }[background]

  return (
    <section className={cn(paddingClass, backgroundClass, className)}>
      {background === 'image' && backgroundImage && (
        <>
          <div className="absolute inset-0">
            <img 
              src={backgroundImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-green-900/95" />
          </div>
          <div className="relative z-10">
            {children}
          </div>
        </>
      )}
      {background !== 'image' && (
        <div className="container mx-auto px-4 relative">
          {children}
        </div>
      )}
    </section>
  )
}

export function ModernSectionHeader({
  badge,
  badgeIcon,
  title,
  subtitle,
  description,
  titleGradient = "from-blue-600 to-teal-600",
  className
}: ModernSectionHeaderProps) {
  return (
    <ScrollReveal>
      <div className={cn("text-center mb-20", className)}>
        {badge && (
          <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
            {badgeIcon && <span className="mr-2">{badgeIcon}</span>}
            {badge}
          </Badge>
        )}
        <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
          {title}
          {subtitle && (
            <span className={cn("block bg-gradient-to-r bg-clip-text text-transparent", `bg-gradient-to-r ${titleGradient}`)}>
              {subtitle}
            </span>
          )}
        </h2>
        {description && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}

export function ModernHero({
  backgroundImage,
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  floatingStats,
  className
}: ModernHeroProps) {
  const PrimaryCTAIcon = primaryCta.icon
  const SecondaryCTAIcon = secondaryCta?.icon

  return (
    <section className={cn("hero-section", className)}>
      <div className="hero-background">
        <img 
          src={backgroundImage} 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-green-900/95" />
        <div className="hero-overlay" />
      </div>

      {/* Floating Stats */}
      {floatingStats && floatingStats.map((stat, index) => (
        <div 
          key={index}
          className={cn(
            "absolute animate-float floating-stat",
            index === 0 && "top-20 left-20",
            index === 1 && "top-40 right-20",
            index === 2 && "bottom-40 left-32"
          )}
          style={{ animationDelay: stat.delay || `${index}s` }}
        >
          <div className="text-4xl font-bold">{stat.value}</div>
          <div className="text-sm opacity-80">{stat.label}</div>
        </div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto text-white">
          <ScrollReveal>
            <Badge className="section-badge">
              {badge}
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="title-hero-mega mb-8">
              {title}
              {subtitle && (
                <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 bg-clip-text text-transparent">
                  {subtitle}
                </span>
              )}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-12">
              {description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className={cn("cta-button-primary", primaryCta.gradient || "from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700")}>
                {PrimaryCTAIcon && <PrimaryCTAIcon className="mr-3 h-6 w-6" />}
                {primaryCta.text}
              </button>
              {secondaryCta && (
                <button className="cta-button-secondary">
                  {SecondaryCTAIcon && <SecondaryCTAIcon className="mr-3 h-6 w-6" />}
                  {secondaryCta.text}
                </button>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-inner">
          <div className="scroll-indicator-dot"></div>
        </div>
      </div>
    </section>
  )
}

export function ModernCard({ 
  children, 
  className,
  variant = 'default',
  hover = true 
}: { 
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'feature'
  hover?: boolean
}) {
  const variantClass = {
    default: 'enhanced-card',
    dark: 'card-dark',
    feature: 'card-feature'
  }[variant]

  return (
    <div className={cn(variantClass, hover && 'enhanced-card', 'group', className)}>
      {variant === 'default' && <div className="enhanced-card-bg" />}
      <div className="relative p-8 h-full flex flex-col">
        {children}
      </div>
    </div>
  )
}

export function ModernIconContainer({ 
  icon: Icon, 
  color = 'blue',
  size = 'default',
  className 
}: { 
  icon: React.ComponentType<{ className?: string }>
  color?: string
  size?: 'small' | 'default' | 'large'
  className?: string
}) {
  const sizeClass = {
    small: 'w-16 h-16',
    default: 'w-20 h-20',
    large: 'w-24 h-24'
  }[size]

  const iconSizeClass = {
    small: 'h-8 w-8',
    default: 'h-10 w-10',
    large: 'h-12 w-12'
  }[size]

  return (
    <div className={cn(
      sizeClass,
      `bg-gradient-to-br from-${color}-100 to-${color}-200 rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`,
      className
    )}>
      <Icon className={cn(iconSizeClass, `text-${color}-600`)} />
    </div>
  )
}
