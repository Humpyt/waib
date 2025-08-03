"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Globe, ArrowRight, Play, Users, Fish, Star, Target, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    headline: "Transforming Lives Through Aquaculture",
    tagline: "Empowering 1,400+ women in Bugiri District with sustainable cage fish farming",
    ctaText: "Support Our Mission",
    ctaIcon: Heart,
    ctaAction: "/support",
    secondaryCtaText: "Learn More",
    secondaryCtaIcon: ArrowRight,
    secondaryCtaAction: "/about",
    backgroundImage: "/images/02/Image_fx%20(17).jpg",
    badge: "Empowering Women",
    stats: [
      { value: "1,400+", label: "Women Empowered" },
      { value: "394.44", label: "Tons Fish Produced" },
    ],
  },
  {
    id: 2,
    headline: "Building Sustainable Communities",
    tagline: "Creating economic opportunities and transforming communities along Lake Victoria",
    ctaText: "Partner with Us",
    ctaIcon: Globe,
    ctaAction: "/partner",
    secondaryCtaText: "View Impact",
    secondaryCtaIcon: Users,
    secondaryCtaAction: "/impact",
    backgroundImage: "/images/02/Image_fx%20(2).jpg",
    badge: "Community Impact",
    stats: [
      { value: "1,000", label: "Women Paid Dividends" },
      { value: "UGX 100K", label: "Average Dividend" },
    ],
  },
  {
    id: 3,
    headline: "Innovation in Aquaculture",
    tagline: "Leading the way with modern techniques and sustainable practices",
    ctaText: "Explore Programs",
    ctaIcon: Fish,
    ctaAction: "/programs",
    secondaryCtaText: "Watch Story",
    secondaryCtaIcon: Play,
    secondaryCtaAction: "/gallery",
    backgroundImage: "/images/02/Image_fx%20(3).jpg",
    badge: "Innovation",
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "100%", label: "Sustainable Practices" },
    ],
  },
  {
    id: 4,
    headline: "Empowering Women Leaders",
    tagline: "Training and supporting women to become leaders in sustainable aquaculture",
    ctaText: "Join Our Program",
    ctaIcon: Users,
    ctaAction: "/programs",
    secondaryCtaText: "Success Stories",
    secondaryCtaIcon: Star,
    secondaryCtaAction: "/impact",
    backgroundImage: "/images/02/Image_fx%20(5).jpg",
    badge: "Leadership",
    stats: [
      { value: "95%", label: "Success Rate" },
      { value: "50+", label: "Community Leaders" },
    ],
  },
  {
    id: 5,
    headline: "Sustainable Future Together",
    tagline: "Building resilient communities through collaborative aquaculture initiatives",
    ctaText: "Get Involved",
    ctaIcon: Globe,
    ctaAction: "/contact",
    secondaryCtaText: "Our Vision",
    secondaryCtaIcon: Target,
    secondaryCtaAction: "/about",
    backgroundImage: "/images/02/image%20(3).png",
    badge: "Sustainability",
    stats: [
      { value: "10+", label: "Partner Organizations" },
      { value: "2030", label: "Vision Year" },
    ],
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative min-h-screen h-screen lg:h-screen overflow-hidden">
      {/* Slides Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
            }`}
          >
            <div className="relative h-full min-h-screen flex items-center justify-center">
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={slide.backgroundImage}
                  alt={`${slide.headline} background`}
                  fill
                  className="object-cover transform scale-110 transition-transform duration-6000 ease-out"
                  style={{
                    transform: currentSlide === index ? "scale(105%)" : "scale(110%)",
                  }}
                  priority={index === 0}
                  sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              {/* WAIB Logo */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/images/waib logo2.png"
                  alt="WAIB Logo"
                  width={400}
                  height={400}
                  className="w-auto h-auto max-h-[60vh] object-contain"
                />
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 text-white">
                    {/* Badge with Animation */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                      <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                        {slide.badge}
                      </Badge>
                    </div>

                    {/* Headline */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                      <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight">
                        {slide.headline.split(" ").map((word, i) => (
                          <span
                            key={i}
                            className="inline-block mr-4 animate-slide-in-left"
                            style={{ animationDelay: `${0.6 + i * 0.1}s` }}
                          >
                            {word}
                          </span>
                        ))}
                      </h1>
                    </div>

                    {/* Tagline */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                      <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">{slide.tagline}</p>
                    </div>

                    {/* Stats */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "1s" }}>
                      <div className="flex space-x-8">
                        {slide.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                            <div className="text-sm text-gray-300">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                          <slide.ctaIcon className="mr-2 h-5 w-5" />
                          {slide.ctaText}
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                        >
                          <slide.secondaryCtaIcon className="mr-2 h-5 w-5" />
                          {slide.secondaryCtaText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
