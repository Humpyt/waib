import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Heart, Users, Award, TrendingUp, ArrowRight, Sparkles, Zap, Globe, Fish, Star, CheckCircle, Calendar, MapPin, Phone, Mail } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import GlassCard from "@/components/glass-card"
import FloatingElements from "@/components/floating-elements"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <FloatingElements />
      <Navbar />

      {/* Hero Section - Compact */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/02/Image_fx (5).jpg"
            alt="WAIB About Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/85 to-green-800/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <ScrollReveal>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium mb-4 rounded-full">
                🌊 About WAIB
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
                Empowering Women,
                <span className="block bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                  Transforming Lives
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Discover the inspiring story behind WAIB's mission to empower women through sustainable aquaculture practices in Uganda's Bugiri District.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Image
                  src="/images/02/Image_fx (2).jpg"
                  alt="WAIB Story"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 z-20">
                  <GlassCard className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600">2019</div>
                    <div className="text-sm text-gray-600">Founded</div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-0 px-4 py-2 mb-6">
                    Our Story
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    From Vision to
                    <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      Transformation
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    WAIB began in 2019 with an ambitious vision: to transform the lives of 1,400 women in Bugiri District through sustainable cage fish farming. What started as a bold initiative has become a beacon of hope and empowerment.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">UGX 2.8B</div>
                    <div className="text-sm text-gray-600">Initial Investment</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                    <div className="text-4xl font-bold text-green-600 mb-2">1,400+</div>
                    <div className="text-sm text-gray-600">Women Empowered</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-blue-50/50" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                Our Journey
              </Badge>
              <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6">
                Milestones That
                <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Define Our Progress
                </span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Enhanced Timeline */}
          <div className="relative max-w-6xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-green-500 to-teal-500 rounded-full" />

            {[
              {
                year: "2019",
                title: "The Beginning",
                description: "WAIB launched with UGX 2.8 Billion funding to empower 1,400 women through cage fish farming.",
                icon: Sparkles,
                color: "blue",
                side: "left",
                image: "/images/02/Image_fx (17).jpg",
                stats: { value: "UGX 2.8B", label: "Initial Funding" }
              },
              {
                year: "2020",
                title: "Infrastructure Development",
                description: "Established operations at Wakawaka Landing Site with modern facilities and training centers.",
                icon: Target,
                color: "green",
                side: "right",
                image: "/images/02/Image_fx (2).jpg",
                stats: { value: "100%", label: "Infrastructure Complete" }
              },
              {
                year: "2021",
                title: "First Harvest Success",
                description: "Achieved 394.44 tons of fish production and began dividend payments to beneficiaries.",
                icon: Fish,
                color: "teal",
                side: "left",
                image: "/images/02/Image_fx (3).jpg",
                stats: { value: "394.44", label: "Tons Produced" }
              },
              {
                year: "2024",
                title: "Recognition & Growth",
                description: "Received presidential recognition and expanded partnerships with international organizations.",
                icon: Award,
                color: "purple",
                side: "right",
                image: "/images/02/image (3).png",
                stats: { value: "10+", label: "Global Partners" }
              },
            ].map((milestone, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className={`flex items-center mb-20 ${milestone.side === "right" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-5/12 ${milestone.side === "right" ? "pl-16" : "pr-16"}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105" />
                      <div className="relative p-8">
                        <div className="flex items-center space-x-4 mb-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br from-${milestone.color}-100 to-${milestone.color}-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <milestone.icon className={`h-8 w-8 text-${milestone.color}-600`} />
                          </div>
                          <div>
                            <div className={`text-4xl font-bold text-${milestone.color}-600`}>{milestone.year}</div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg mb-6">{milestone.description}</p>
                        <div className={`inline-flex items-center px-4 py-2 bg-${milestone.color}-50 rounded-full`}>
                          <span className={`text-2xl font-bold text-${milestone.color}-600 mr-2`}>{milestone.stats.value}</span>
                          <span className="text-gray-600">{milestone.stats.label}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center">
                    <div className={`w-8 h-8 bg-${milestone.color}-500 rounded-full border-4 border-white shadow-lg relative`}>
                      <div className={`absolute inset-0 bg-${milestone.color}-400 rounded-full animate-ping opacity-75`}></div>
                    </div>
                  </div>

                  <div className={`w-5/12 ${milestone.side === "left" ? "pl-16" : "pr-16"}`}>
                    <div className="relative group">
                      <Image
                        src={milestone.image}
                        alt={milestone.title}
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Goal - Enhanced Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-green-800" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-400/10 rounded-full blur-xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-6 py-3 text-base font-semibold mb-6 rounded-full">
                🎯 Our Foundation
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-white mb-6">
                The Principles That
                <span className="block bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                  Drive Our Impact
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Our mission, vision, and goals form the cornerstone of everything we do at WAIB.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To increase women economic empowerment through cage fish farming and create market linkages through increased partnerships.",
                color: "blue",
                delay: 0,
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100"
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "Transformed poor rural women from vulnerability to an economic empowerment space, turning WAIB into a center of excellence by 2030.",
                color: "green",
                delay: 200,
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100"
              },
              {
                icon: Heart,
                title: "Our Goal",
                description: "Women have income security, decent work and economic autonomy by 2025.",
                color: "teal",
                delay: 400,
                gradient: "from-teal-500 to-teal-600",
                bgGradient: "from-teal-50 to-teal-100"
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={item.delay} direction="up">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 group-hover:bg-white/20 transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-10 text-center h-full flex flex-col">
                    <div className={`w-24 h-24 bg-gradient-to-br ${item.bgGradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-xl`}>
                      <item.icon className={`h-12 w-12 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-6">{item.title}</h3>
                    <p className="text-blue-100 leading-relaxed text-lg flex-grow">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                🏆 Key Achievements
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Transformative Impact
                <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Across Communities
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our work has created ripple effects that extend far beyond aquaculture, touching every aspect of community life.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Impact Stats */}
          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {[
                { value: "1,400+", label: "Women Empowered", icon: Users, color: "blue" },
                { value: "394.44", label: "Tons Fish Produced", icon: Fish, color: "green" },
                { value: "UGX 100K", label: "Average Dividend", icon: TrendingUp, color: "teal" },
                { value: "100%", label: "Success Rate", icon: Star, color: "purple" },
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`h-8 w-8 text-${stat.color}-600`} />
                    </div>
                    <div className={`text-3xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Impact Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Economic Transformation",
                description: "Women started small businesses and gained financial independence through aquaculture training and support.",
                color: "blue",
                highlight: "1,000+ women now earning regular income"
              },
              {
                icon: Users,
                title: "Poverty Alleviation",
                description: "Families moved from subsistence living to sustainable livelihoods with regular dividend payments.",
                color: "green",
                highlight: "Average household income increased by 300%"
              },
              {
                icon: Award,
                title: "Food Security",
                description: "Enhanced nutrition security through increased fish production and agricultural productivity.",
                color: "teal",
                highlight: "394.44 tons of fish produced annually"
              },
              {
                icon: Heart,
                title: "Social Change",
                description: "Improved gender relations and reduced domestic violence through women's economic empowerment.",
                color: "purple",
                highlight: "85% reduction in domestic disputes"
              },
              {
                icon: Globe,
                title: "Cultural Transformation",
                description: "Breaking traditional barriers - women now work on Lake Victoria, a significant cultural shift.",
                color: "orange",
                highlight: "First women-led aquaculture cooperative"
              },
              {
                icon: Zap,
                title: "Scalable Innovation",
                description: "Developed a replicable model for women's empowerment that can be scaled across East Africa.",
                color: "pink",
                highlight: "Model adopted by 3 neighboring districts"
              },
            ].map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 h-full flex flex-col">
                    <div className={`w-20 h-20 bg-gradient-to-br from-${achievement.color}-100 to-${achievement.color}-200 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <achievement.icon className={`h-10 w-10 text-${achievement.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{achievement.description}</p>
                    <div className={`inline-flex items-center px-4 py-2 bg-${achievement.color}-50 rounded-full text-${achievement.color}-700 font-semibold text-sm`}>
                      <Star className="h-4 w-4 mr-2" />
                      {achievement.highlight}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Leadership Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                👥 Our Leadership
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                The People Behind
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  The Transformation
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet the dedicated team and community leaders who make WAIB's mission possible.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Image
                  src="/images/02/Image_fx (17).jpg"
                  alt="WAIB Leadership"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                    Community-Driven Leadership
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Our success is built on the foundation of strong community leadership and the unwavering commitment of local women who have become champions of change.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "Local Women Leaders", value: "50+", description: "Trained community champions" },
                    { title: "Management Team", value: "15", description: "Dedicated professionals" },
                    { title: "Advisory Board", value: "8", description: "Industry experts" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3">
                          <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                          <span className="text-3xl font-bold text-purple-600">{item.value}</span>
                        </div>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>



      {/* Enhanced Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/02/image (3).png"
            alt="Join WAIB"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-green-800/95" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-400/20 rounded-full blur-xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white max-w-5xl mx-auto">
              <h2 className="text-7xl font-serif font-bold mb-8">
                Be Part of Our
                <span className="block bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                  Transformation Story
                </span>
              </h2>
              <p className="text-2xl mb-16 leading-relaxed opacity-90">
                Join us in creating lasting change and empowering more women through sustainable aquaculture. Together, we can build a brighter future for communities across Uganda and beyond.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Heart, title: "Partner", description: "Collaborate with us" },
                  { icon: Globe, title: "Support", description: "Fund our mission" },
                  { icon: Users, title: "Volunteer", description: "Join our team" },
                ].map((action, index) => (
                  <div key={index} className="group">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <action.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{action.title}</h3>
                    <p className="text-blue-100">{action.description}</p>
                  </div>
                ))}
              </div>


            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
