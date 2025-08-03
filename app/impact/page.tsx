import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Award,
  Users,
  TrendingUp,
  Heart,
  Fish,
  DollarSign,
  Home,
  Briefcase,
  Star,
  Globe,
  Target,
  CheckCircle,
  Sparkles,
  ArrowUp,
  BarChart3,
  ArrowRight,
  Calendar,
  MapPin,
  Zap,
  Eye,
  Building,
  Handshake,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import GlassCard from "@/components/glass-card"
import AnimatedCounter from "@/components/animated-counter"
import FloatingElements from "@/components/floating-elements"

export default function ImpactPage() {
  const impactStats = [
    {
      icon: Fish,
      value: 394.44,
      unit: "Tons",
      label: "Fish Produced",
      color: "blue",
      description: "Sustainable fish production",
    },
    { icon: Users, value: 1400, unit: "+", label: "Women Targeted", color: "green", description: "Lives transformed" },
    {
      icon: DollarSign,
      value: 1000,
      unit: "",
      label: "Women Paid Dividends",
      color: "teal",
      description: "Economic empowerment",
    },
    {
      icon: TrendingUp,
      value: 100,
      unit: "K",
      label: "Average Dividend (UGX)",
      color: "purple",
      description: "Financial independence",
    },
  ]

  const transformationAreas = [
    {
      title: "Economic Empowerment",
      description: "Women started small businesses and gained financial independence",
      progress: 85,
      icon: TrendingUp,
      color: "blue",
      impact: "1,200+ women now have independent income sources",
    },
    {
      title: "Poverty Alleviation",
      description: "Women now offer paid labor and contribute to household income",
      progress: 78,
      icon: DollarSign,
      color: "green",
      impact: "Average household income increased by 60%",
    },
    {
      title: "Food & Nutrition Security",
      description: "Increased agricultural productivity and enhanced nutrition in households",
      progress: 92,
      icon: Home,
      color: "teal",
      impact: "95% of families report improved nutrition",
    },
    {
      title: "Gender Relations",
      description: "Improved gender relations and reduced domestic violence",
      progress: 70,
      icon: Heart,
      color: "purple",
      impact: "40% reduction in reported domestic violence cases",
    },
    {
      title: "Cultural Transformation",
      description: "Women now work on the lake - a significant cultural shift",
      progress: 88,
      icon: Users,
      color: "orange",
      impact: "Cultural barriers broken in 15+ communities",
    },
    {
      title: "Skills Development",
      description: "Women gained skills along the entire fish value chain",
      progress: 95,
      icon: Target,
      color: "pink",
      impact: "100% of participants gained new technical skills",
    },
  ]

  const achievements = [
    {
      title: "Presidential Recognition",
      description:
        "Received a medal from H.E. Yoweri Museveni for championing Women Economic Empowerment during International Women's Day National celebrations 2024",
      icon: Award,
      color: "yellow",
      year: "2024",
      category: "National Recognition",
    },
    {
      title: "UN Women Partnership",
      description:
        "Ongoing collaboration with UN Women Uganda, including visits from country representatives and program officers for monitoring and support",
      icon: Globe,
      color: "blue",
      year: "2019-Present",
      category: "International Partnership",
    },
    {
      title: "G77/NAM Expo Participation",
      description:
        "Exhibited at the G77/NAM Side event at Serena Hotel Kigo in 2024, showcasing our impact on women's empowerment",
      icon: Star,
      color: "green",
      year: "2024",
      category: "International Expo",
    },
    {
      title: "Government Partnerships",
      description:
        "Strong partnerships with government ministries including visits from the Commissioner for Fisheries and Minister of State for Fisheries",
      icon: Briefcase,
      color: "teal",
      year: "2019-Present",
      category: "Government Relations",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <FloatingElements />
      <Navbar />

      {/* Hero Section - Compact */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/02/Image_fx (17).jpg"
            alt="WAIB Impact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-teal-800/90 to-blue-800/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <ScrollReveal>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium mb-4 rounded-full">
                🌟 Transformative Impact
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
                Changing Lives,
                <span className="block bg-gradient-to-r from-green-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Building Futures
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-green-100 leading-relaxed max-w-2xl mx-auto">
                Discover the profound and lasting change WAIB is creating across Bugiri District through sustainable aquaculture and women's empowerment.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Impact Overview with Visual Story */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-teal-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Image
                  src="/images/02/Image_fx (2).jpg"
                  alt="WAIB Impact Story"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 z-20">
                  <GlassCard className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600">5+</div>
                    <div className="text-sm text-gray-600">Years Impact</div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 border-0 px-4 py-2 mb-6">
                    📈 Our Impact Story
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Transforming Lives
                    <span className="block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      One Woman at a Time
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Since 2019, WAIB has created ripple effects of positive change that extend far beyond aquaculture, touching every aspect of community life in Bugiri District.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                    <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                    <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Communities</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Enhanced Impact Statistics */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                📊 Impact by the Numbers
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Measurable Results That
                <span className="block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Speak Volumes
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Every number tells a story of transformation, empowerment, and sustainable change.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 text-center h-full flex flex-col">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <stat.icon className={`h-12 w-12 text-${stat.color}-600`} />
                    </div>
                    <div className={`text-5xl font-bold text-${stat.color}-600 mb-3`}>
                      <AnimatedCounter end={stat.value} suffix={stat.unit} />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3">{stat.label}</h3>
                    <p className="text-gray-600 flex-grow">{stat.description}</p>
                    <div className="mt-6">
                      <div className={`inline-flex items-center px-4 py-2 bg-${stat.color}-50 rounded-full text-${stat.color}-700 font-semibold text-sm`}>
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Growing Impact
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Areas - Enhanced Visual Layout */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-teal-800 to-green-800" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-6 py-3 text-base font-semibold mb-6 rounded-full">
                🎯 Areas of Transformation
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-white mb-6">
                Six Pillars of
                <span className="block bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                  Sustainable Change
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Our comprehensive approach addresses multiple dimensions of community development and women's empowerment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationAreas.map((area, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 group-hover:bg-white/20 transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-br from-${area.color}-100 to-${area.color}-200 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}
                      >
                        <area.icon className={`h-10 w-10 text-${area.color}-600`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif font-bold text-white mb-2">{area.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-green-300">{area.progress}%</span>
                          <div className="flex-1 bg-white/20 rounded-full h-3">
                            <div
                              className={`h-3 bg-gradient-to-r from-${area.color}-400 to-${area.color}-500 rounded-full transition-all duration-1000`}
                              style={{ width: `${area.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-blue-100 mb-6 leading-relaxed flex-grow">{area.description}</p>
                    <div className={`p-4 bg-${area.color}-500/20 backdrop-blur-sm rounded-2xl border border-${area.color}-400/30`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <Star className={`h-5 w-5 text-${area.color}-300`} />
                        <span className="text-white font-semibold">Key Impact</span>
                      </div>
                      <p className={`text-${area.color}-100 font-medium`}>{area.impact}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition & Achievements - Enhanced Timeline */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/50 to-orange-50/50" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                🏆 Recognition & Achievements
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Global Recognition for
                <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Local Impact
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our work has gained recognition from international organizations, government bodies, and development partners.
              </p>
            </div>
          </ScrollReveal>

          {/* Featured Achievement */}
          <ScrollReveal delay={200}>
            <div className="relative group mb-20">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl p-12 group-hover:scale-105 transition-transform duration-500 border border-yellow-200">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl flex items-center justify-center shadow-lg">
                        <Award className="h-12 w-12 text-yellow-600" />
                      </div>
                      <div>
                        <Badge className="bg-yellow-100 text-yellow-800 mb-2">Presidential Recognition</Badge>
                        <h3 className="text-3xl font-serif font-bold text-gray-900">Medal of Honor 2024</h3>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      Received a medal from H.E. Yoweri Museveni for championing Women Economic Empowerment during International Women's Day National celebrations 2024.
                    </p>
                  </div>
                  <div className="relative">
                    <Image
                      src="/images/02/Image_fx (3).jpg"
                      alt="Presidential Recognition"
                      width={500}
                      height={400}
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -top-4 -right-4 bg-yellow-500 text-white p-3 rounded-full shadow-lg">
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Achievements Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.slice(1).map((achievement, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="up">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 h-full flex flex-col">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-${achievement.color}-100 to-${achievement.color}-200 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    >
                      <achievement.icon className={`h-10 w-10 text-${achievement.color}-600`} />
                    </div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Badge className={`bg-${achievement.color}-100 text-${achievement.color}-800`}>
                        {achievement.category}
                      </Badge>
                      <span className="text-sm text-gray-500 font-medium">{achievement.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">{achievement.description}</p>
                    <div className="mt-6">
                      <div className={`inline-flex items-center px-4 py-2 bg-${achievement.color}-50 rounded-full text-${achievement.color}-700 font-semibold text-sm`}>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Ongoing Partnership
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision & Goals */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-green-50/50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Image
                  src="/images/02/image (3).png"
                  alt="Future Vision"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 z-20">
                  <GlassCard className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600">2030</div>
                    <div className="text-sm text-gray-600">Vision Year</div>
                  </GlassCard>
                </div>
                <div className="absolute -top-8 -left-8 z-20">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 rounded-2xl shadow-lg">
                    <Eye className="h-8 w-8" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-green-100 to-teal-100 text-green-800 border-0 px-4 py-2 mb-6">
                    🚀 Looking Ahead
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Scaling Impact for
                    <span className="block bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                      Greater Transformation
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Our vision extends far beyond current achievements. By 2025, we aim to ensure women have income security and economic autonomy. By 2030, WAIB will be a recognized center of excellence.
                  </p>
                </div>

                {/* Enhanced Goals with Visual Progress */}
                <div className="space-y-8">
                  {[
                    {
                      text: "Expand to accommodate 2,000 women by 2025",
                      progress: 60,
                      icon: Users,
                      color: "blue",
                      target: "2025"
                    },
                    {
                      text: "Establish land-based recirculating aquaculture system",
                      progress: 30,
                      icon: Building,
                      color: "green",
                      target: "2026"
                    },
                    {
                      text: "Build fish processing plant and ice plant facilities",
                      progress: 25,
                      icon: Zap,
                      color: "teal",
                      target: "2027"
                    },
                    {
                      text: "Create regional and international market access",
                      progress: 45,
                      icon: Globe,
                      color: "purple",
                      target: "2028"
                    },
                  ].map((goal, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                      <div className="relative p-6 flex items-start space-x-4">
                        <div className={`w-14 h-14 bg-gradient-to-br from-${goal.color}-100 to-${goal.color}-200 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <goal.icon className={`h-7 w-7 text-${goal.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{goal.text}</h4>
                            <Badge className={`bg-${goal.color}-100 text-${goal.color}-800`}>{goal.target}</Badge>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex-1 bg-gray-200 rounded-full h-3">
                              <div
                                className={`h-3 bg-gradient-to-r from-${goal.color}-400 to-${goal.color}-500 rounded-full transition-all duration-1000`}
                                style={{ width: `${goal.progress}%` }}
                              />
                            </div>
                            <span className={`text-lg font-bold text-${goal.color}-600`}>{goal.progress}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
                    <Target className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Join Our Vision
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
                    View Timeline
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                💬 Community Voices
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Stories of
                <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Transformation
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Hear directly from the women whose lives have been transformed through WAIB's programs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                quote: "WAIB has given me the confidence and skills to provide for my family. I now earn UGX 150,000 monthly from fish farming.",
                name: "Sarah Namukose",
                role: "Fish Farmer & Group Leader",
                location: "Wakawaka Landing Site",
                image: "/images/02/Image_fx (5).jpg",
                impact: "Monthly income increased by 400%"
              },
              {
                quote: "Through WAIB, I've learned business skills and now run my own fish processing business. My children are in school because of this opportunity.",
                name: "Grace Nabirye",
                role: "Fish Processor & Entrepreneur",
                location: "Bugiri District",
                image: "/images/02/Image_fx (3).jpg",
                impact: "Started 2 successful businesses"
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 300} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8">
                    <div className="flex items-start space-x-6 mb-6">
                      <div className="relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-2xl shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-green-600 font-medium">{testimonial.role}</p>
                        <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
                          <MapPin className="h-4 w-4" />
                          <span>{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-700 font-semibold text-sm">
                      <Star className="h-4 w-4 mr-2" />
                      {testimonial.impact}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Impact */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-blue-50/50" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                🤝 Partnership Impact
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Collaborative Success
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Through Strategic Alliances
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "UN Women Partnership",
                description: "Ongoing collaboration with UN Women Uganda for program monitoring and technical support",
                icon: Globe,
                color: "blue",
                impact: "International expertise & funding",
                duration: "2019 - Present"
              },
              {
                title: "Government Collaboration",
                description: "Strong partnerships with Ministry of Fisheries and local government authorities",
                icon: Building,
                color: "green",
                impact: "Policy support & infrastructure",
                duration: "2019 - Present"
              },
              {
                title: "Community Partnerships",
                description: "Deep collaboration with local communities and traditional leadership structures",
                icon: Handshake,
                color: "purple",
                impact: "Cultural acceptance & sustainability",
                duration: "Ongoing"
              },
            ].map((partnership, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="up">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 h-full flex flex-col">
                    <div className={`w-20 h-20 bg-gradient-to-br from-${partnership.color}-100 to-${partnership.color}-200 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <partnership.icon className={`h-10 w-10 text-${partnership.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">{partnership.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{partnership.description}</p>
                    <div className="space-y-3">
                      <div className={`inline-flex items-center px-4 py-2 bg-${partnership.color}-50 rounded-full text-${partnership.color}-700 font-semibold text-sm`}>
                        <Star className="h-4 w-4 mr-2" />
                        {partnership.impact}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {partnership.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/02/Image_fx (5).jpg"
            alt="Join Our Impact"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-teal-800/90 to-blue-800/95" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-400/20 rounded-full blur-xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white max-w-6xl mx-auto">
              <h2 className="text-7xl font-serif font-bold mb-8">
                Amplify Our
                <span className="block bg-gradient-to-r from-green-300 to-teal-300 bg-clip-text text-transparent">
                  Collective Impact
                </span>
              </h2>
              <p className="text-2xl mb-16 leading-relaxed opacity-90">
                Join us in creating even greater impact. Your support can help us reach more women, transform more communities, and build a sustainable future through aquaculture.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Heart, title: "Support", description: "Fund our programs", action: "Donate Now" },
                  { icon: Handshake, title: "Partner", description: "Collaborate with us", action: "Partner Up" },
                  { icon: Users, title: "Volunteer", description: "Join our mission", action: "Get Involved" },
                ].map((action, index) => (
                  <div key={index} className="group">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <action.icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
                    <p className="text-green-100 mb-4">{action.description}</p>
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      {action.action}
                    </Button>
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
