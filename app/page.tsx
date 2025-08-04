import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Fish, Users, Award, TrendingUp, Heart, Globe, Waves, Target, Star, ArrowUp, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import HeroSlider from "@/components/hero-slider"
import AnimatedCounter from "@/components/animated-counter"
import ScrollReveal from "@/components/scroll-reveal"
import GlassCard from "@/components/glass-card"
import FloatingElements from "@/components/floating-elements"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <FloatingElements />
      <Navbar />

      {/* Hero Slider */}
      <HeroSlider />

      {/* Impact Statistics - Enhanced Design */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-0 px-6 py-3 text-sm font-semibold mb-8">
                Our Impact in Numbers
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                Transforming Lives Through
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Sustainable Aquaculture
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every number tells a story of transformation, empowerment, and sustainable development
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Fish,
                value: 394.44,
                suffix: " Tons",
                label: "Fish Produced",
                color: "blue",
                delay: 0,
                description: "Sustainable fish production",
                trend: "+15%",
                period: "this year",
              },
              {
                icon: Users,
                value: 1400,
                suffix: "+",
                label: "Women Empowered",
                color: "green",
                delay: 200,
                description: "Lives transformed",
                trend: "+200",
                period: "new beneficiaries",
              },
              {
                icon: Award,
                value: 1000,
                suffix: "",
                label: "Women Received Dividends",
                color: "teal",
                delay: 400,
                description: "Economic empowerment",
                trend: "100%",
                period: "success rate",
              },
              {
                icon: TrendingUp,
                value: 100,
                prefix: "UGX ",
                suffix: "K",
                label: "Average Dividend",
                color: "purple",
                delay: 600,
                description: "Financial independence",
                trend: "+25%",
                period: "increase",
              },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={stat.delay} direction="up">
                <div className="relative group perspective-1000">
                  {/* Card container with 3D effect */}
                  <div className="relative bg-white rounded-2xl shadow-lg transition-all duration-500 transform group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:rotate-y-5">
                    {/* Glowing background effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Animated border gradient */}
                    <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-transparent via-gray-200 to-transparent opacity-50 group-hover:opacity-100 group-hover:animate-gradient-rotate" />

                    <div className="relative p-6">
                      {/* Header with icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-[1px] overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                          <div className={`w-full h-full rounded-2xl bg-white flex items-center justify-center relative z-10`}>
                            <stat.icon className={`h-10 w-10 text-${stat.color}-500 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`} />
                          </div>
                          {/* Animated background gradient */}
                          <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-gradient-move`} />
                        </div>
                        
                        {/* Trend indicator with enhanced styling */}
                        <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-${stat.color}-50 group-hover:bg-${stat.color}-100 transition-colors duration-300`}>
                          <ArrowUp className={`h-3.5 w-3.5 text-${stat.color}-500`} />
                          <span className={`text-sm font-semibold text-${stat.color}-700`}>{stat.trend}</span>
                        </div>
                      </div>

                      {/* Main counter with enhanced typography */}
                      <div className="mb-4">
                        <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-500 bg-clip-text text-transparent tracking-tight group-hover:scale-105 transform transition-transform duration-500`}>
                          <AnimatedCounter end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mt-2 leading-tight">{stat.label}</h3>
                      </div>

                      {/* Description with improved layout */}
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                        <div className="flex items-center gap-2">
                          <div className={`h-1.5 flex-grow rounded-full bg-gray-100 overflow-hidden`}>
                            <div
                              className={`h-full bg-gradient-to-r from-${stat.color}-500 to-${stat.color}-400 transform origin-left scale-x-0 animate-grow-width`}
                              style={{ animationDelay: `${stat.delay}ms` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500 font-medium">{stat.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-${stat.color}-400 to-${stat.color}-600 blur-xl -z-10`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Additional stats row */}
          <ScrollReveal delay={800}>
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {[
                { label: "Years of Impact", value: "5+", color: "indigo" },
                { label: "Communities Reached", value: "15+", color: "pink" },
                { label: "Success Rate", value: "95%", color: "emerald" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 relative overflow-hidden">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/SliderImages/Image_fx (3).jpg"
            alt="Women in Aquaculture Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-green-900/70 to-teal-900/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Image
                  src="/images/02/Image_fx (3).jpg"
                  alt="Women in Aquaculture"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 z-20">
                  <GlassCard className="p-6 text-center bg-white/20 backdrop-blur-sm border-white/30">
                    <div className="text-2xl font-bold text-white">5+</div>
                    <div className="text-sm text-gray-200">Years Impact</div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
              <div>
                <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-0 px-4 py-2 mb-6">
                  Our Mission
                </Badge>
                <h2 className="text-responsive-2xl font-serif font-bold text-white mb-6 leading-tight">
                  Empowering Women Through
                  <span className="text-white block">Sustainable Aquaculture</span>
                </h2>
                <p className="text-lg text-gray-200 leading-relaxed mb-8">
                  To increase women economic empowerment through cage fish farming and create market linkages through
                  increased partnerships, transforming poor rural women from vulnerability to economic empowerment.
                </p>
              </div>

                <div className="grid sm:grid-cols-2 gap-6">
                <GlassCard className="p-6 group bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white mb-2">Our Goal</h4>
                      <p className="text-gray-200 text-sm">
                        Women have income security, decent work and economic autonomy by 2025
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-6 group bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Waves className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-white mb-2">Our Vision</h4>
                      <p className="text-gray-200 text-sm">
                        Center of excellence for women's aquaculture empowerment by 2030
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

                <Link href="/about">
                  <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group mt-8" asChild>
                    <span className="flex items-center">
                      Learn More About Us
                      <Target className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Programs & Initiatives */}
      <section className="py-32 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
        </div>

        {/* Floating fish patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 transform -rotate-12 opacity-10">
            <Fish className="w-24 h-24 text-blue-500 animate-float" />
          </div>
          <div className="absolute top-40 right-20 transform rotate-45 opacity-10">
            <Fish className="w-16 h-16 text-green-500 animate-float animation-delay-1000" />
          </div>
          <div className="absolute bottom-20 left-1/4 transform -rotate-90 opacity-10">
            <Fish className="w-20 h-20 text-teal-500 animate-float animation-delay-2000" />
          </div>
        </div>

        {/* Water wave effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-blue-500/20 to-transparent animate-wave" />
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-green-500/20 to-transparent animate-wave animation-delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                Our Programs & Initiatives
              </Badge>
              <h2 className="text-responsive-2xl font-serif font-bold text-gray-900 mb-6">
                Comprehensive Support for
                <span className="text-gradient block">Women in Aquaculture</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From training to market access, we provide end-to-end support for sustainable livelihoods
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Fish,
                title: "Cage Fish Farming",
                description:
                  "Training and supporting women in sustainable cage fish farming techniques on Lake Victoria, providing them with the skills and resources needed for success.",
                color: "blue",
                delay: 0,
              },
              {
                icon: Heart,
                title: "Day Care Services",
                description:
                  "Providing childcare services for working mothers, ensuring children are safe and cared for while women participate in aquaculture activities.",
                color: "green",
                delay: 200,
              },
              {
                icon: TrendingUp,
                title: "Value Chain Capacity Building",
                description:
                  "Comprehensive training along the fish value chain, from production to marketing, ensuring women have skills across all aspects of the business.",
                color: "teal",
                delay: 400,
              },
            ].map((program, index) => (
              <ScrollReveal key={index} delay={program.delay} direction="up">
                <GlassCard className="p-8 group h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${program.color}-100 to-${program.color}-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <program.icon className={`h-10 w-10 text-${program.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <Link href="/programs">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-gray-200 hover:bg-white/50 hover:border-gray-300 group-hover:scale-105 transition-all duration-300"
                      asChild
                    >
                      <span>Learn More</span>
                    </Button>
                  </Link>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Achievements */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-blue-50/50" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                Recognition & Achievements
              </Badge>
              <h2 className="text-responsive-2xl font-serif font-bold text-gray-900 mb-6">
                Celebrating Our
                <span className="text-gradient block">Milestones & Partnerships</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Recognition from government, international partners, and the community we serve
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Presidential Recognition",
                description:
                  "Received a medal from H.E. Yoweri Museveni for championing Women Economic Empowerment during International Women's Day 2024",
                color: "yellow",
                delay: 0,
              },
              {
                icon: Globe,
                title: "UN Women Partnership",
                description:
                  "Ongoing collaboration with UN Women Uganda, including visits from country representatives and program officers",
                color: "blue",
                delay: 200,
              },
              {
                icon: Star,
                title: "G77/NAM Expo",
                description:
                  "Exhibited at the G77/NAM Side event at Serena Hotel Kigo in 2024, showcasing our impact on women's empowerment",
                color: "green",
                delay: 400,
              },
            ].map((achievement, index) => (
              <ScrollReveal key={index} delay={achievement.delay} direction="up">
                <GlassCard className="p-8 text-center group h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br from-${achievement.color}-100 to-${achievement.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:animate-glow transition-all duration-300`}
                  >
                    <achievement.icon className={`h-10 w-10 text-${achievement.color}-600`} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-4">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white">
              <h2 className="text-responsive-2xl font-serif font-bold mb-6">Join Us in Transforming Lives</h2>
              <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90">
                Partner with WAIB to empower more women through sustainable aquaculture. Together, we can create lasting
                change and build stronger communities.
              </p>

            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
