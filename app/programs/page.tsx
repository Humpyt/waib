import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Fish,
  Heart,
  TrendingUp,
  Users,
  Truck,
  Building,
  Wrench,
  GraduationCap,
  Target,
  Clock,
  CheckCircle,
  DollarSign,
  Zap,
  Sparkles,
  ArrowRight,
  BarChart3,
  Lightbulb,
  Star,
  Award,
  Globe,
  Calendar,
  MapPin,
  BookOpen,
  Briefcase,
  Settings,
  Play,
} from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import GlassCard from "@/components/glass-card"
import FloatingElements from "@/components/floating-elements"

export default function ProgramsPage() {
  const currentPrograms = [
    {
      title: "Cage Fish Farming",
      description:
        "Comprehensive training and support for women in sustainable cage fish farming techniques on Lake Victoria",
      icon: Fish,
      color: "blue",
      details: [
        "Training in cage construction and maintenance",
        "Fish feeding and health management",
        "Water quality monitoring",
        "Harvest and post-harvest handling",
        "Record keeping and business management",
      ],
      beneficiaries: "1,400+ women",
      duration: "Ongoing since 2019",
      impact: "394.44 tons of fish produced",
      stats: { completion: 95, satisfaction: 98 },
    },
    {
      title: "Day Care Services",
      description: "Providing safe childcare services for working mothers participating in aquaculture activities",
      icon: Heart,
      color: "green",
      details: [
        "Safe and nurturing environment for children",
        "Qualified childcare providers",
        "Educational activities and play",
        "Nutritious meals and snacks",
        "Health monitoring and basic care",
      ],
      beneficiaries: "500+ children",
      duration: "Daily operations",
      impact: "Enables mothers to focus on work",
      stats: { completion: 100, satisfaction: 96 },
    },
    {
      title: "Value Chain Capacity Building",
      description: "Comprehensive training along the fish value chain from production to marketing",
      icon: TrendingUp,
      color: "teal",
      details: [
        "Production techniques and best practices",
        "Processing and value addition",
        "Quality control and food safety",
        "Marketing and sales strategies",
        "Financial literacy and business skills",
      ],
      beneficiaries: "1,400+ women",
      duration: "Continuous training",
      impact: "Enhanced skills across value chain",
      stats: { completion: 88, satisfaction: 94 },
    },
  ]

  const futurePrograms = [
    {
      title: "Land-based Recirculating Aquaculture System (RAS)",
      description: "Advanced aquaculture system to overcome natural water mixing challenges in Lake Victoria",
      priority: "High",
      timeline: "2024-2025",
      investment: "Seeking funding",
      icon: Zap,
      color: "blue",
      benefits: [
        "Year-round fish production",
        "Better water quality control",
        "Higher production efficiency",
        "Reduced environmental risks",
      ],
    },
    {
      title: "Fish Processing Plant",
      description: "Value addition facility to process fish into various products for local and export markets",
      priority: "High",
      timeline: "2025-2026",
      investment: "Partnership needed",
      icon: Building,
      color: "green",
      benefits: ["Higher profit margins", "Extended shelf life", "Market diversification", "Job creation"],
    },
    {
      title: "Innovation Hub",
      description: "Technology center for aquaculture research and digital solutions",
      priority: "Medium",
      timeline: "2025-2027",
      investment: "Seeking support",
      icon: Lightbulb,
      color: "purple",
      benefits: [
        "Research and development",
        "Digital monitoring systems",
        "Innovation incubation",
        "Knowledge sharing platform",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <FloatingElements />
      <Navbar />

      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/02/Image_fx (3).jpg"
            alt="WAIB Programs Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-blue-800/90 to-green-800/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Floating Program Stats */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold">3</div>
            <div className="text-sm opacity-80">Active Programs</div>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold">95%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
        </div>
        <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold">500+</div>
            <div className="text-sm opacity-80">Children Cared</div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto text-white">
            <ScrollReveal>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-8 py-4 text-lg font-semibold mb-8 rounded-full">
                🎯 Our Programs
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-6xl lg:text-9xl font-serif font-bold mb-8 leading-tight">
                Empowering Through
                <span className="block bg-gradient-to-r from-teal-300 via-blue-300 to-green-300 bg-clip-text text-transparent">
                  Comprehensive Programs
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-2xl text-teal-100 leading-relaxed max-w-4xl mx-auto mb-12">
                Discover our comprehensive suite of programs designed to empower women through sustainable aquaculture, skills development, and community support services.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl"
                >
                  <BarChart3 className="mr-3 h-6 w-6" />
                  Explore Programs
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-xl"
                >
                  <Sparkles className="mr-3 h-6 w-6" />
                  Future Initiatives
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-blue-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Image
                  src="/images/02/Image_fx (2).jpg"
                  alt="WAIB Programs Overview"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 z-20">
                  <GlassCard className="p-6 text-center">
                    <div className="text-3xl font-bold text-teal-600">3</div>
                    <div className="text-sm text-gray-600">Core Programs</div>
                  </GlassCard>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 border-0 px-4 py-2 mb-6">
                    🎓 Program Excellence
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Comprehensive Programs
                    <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      Driving Transformation
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Our integrated approach combines aquaculture training, childcare services, and value chain development to create holistic empowerment for women in Bugiri District.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                    <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
                    <div className="text-sm text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                    <div className="text-4xl font-bold text-blue-600 mb-2">1,400+</div>
                    <div className="text-sm text-gray-600">Participants</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                    <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
                    <div className="text-sm text-gray-600">Years Running</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Enhanced Program Tabs */}
          <Tabs defaultValue="current" className="w-full">
            <div className="flex justify-center mb-20">
              <TabsList className="grid w-full max-w-2xl grid-cols-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-3 shadow-xl">
                <TabsTrigger
                  value="current"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-teal-600 data-[state=active]:text-white py-4 px-6 text-lg font-semibold transition-all duration-300"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Current Programs
                </TabsTrigger>
                <TabsTrigger
                  value="future"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-blue-600 data-[state=active]:text-white py-4 px-6 text-lg font-semibold transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Future Initiatives
                </TabsTrigger>
                <TabsTrigger
                  value="support"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-green-600 data-[state=active]:text-white py-4 px-6 text-lg font-semibold transition-all duration-300"
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Support Services
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Current Programs - Enhanced Layout */}
            <TabsContent value="current" className="space-y-20">
              <ScrollReveal>
                <div className="text-center mb-20">
                  <Badge className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                    📚 Active Programs
                  </Badge>
                  <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                    Transformative Programs
                    <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Creating Lasting Change
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Our comprehensive suite of programs addresses every aspect of women's empowerment through aquaculture.
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-20">
                {currentPrograms.map((program, index) => (
                  <ScrollReveal key={index} delay={index * 200}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]" />
                      <div className="relative p-12">
                        {/* Program Header */}
                        <div className="flex items-center space-x-8 mb-12">
                          <div
                            className={`w-32 h-32 bg-gradient-to-br from-${program.color}-100 to-${program.color}-200 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}
                          >
                            <program.icon className={`h-16 w-16 text-${program.color}-600`} />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">{program.title}</h3>
                            <p className="text-xl text-gray-600 leading-relaxed">{program.description}</p>
                          </div>
                          <div className="text-right">
                            <div className={`text-5xl font-bold text-${program.color}-600 mb-2`}>
                              {program.stats.satisfaction}%
                            </div>
                            <div className="text-gray-600 font-medium">Satisfaction</div>
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-12">
                          {/* Program Components */}
                          <div className="lg:col-span-2 space-y-8">
                            <div>
                              <h4 className="text-2xl font-serif font-semibold text-gray-900 mb-6 flex items-center">
                                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                                Program Components
                              </h4>
                              <div className="grid md:grid-cols-2 gap-4">
                                {program.details.map((detail, idx) => (
                                  <div key={idx} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                                    <div className={`w-3 h-3 bg-${program.color}-500 rounded-full mt-2 flex-shrink-0`} />
                                    <span className="text-gray-700 font-medium">{detail}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Program Image */}
                            <div className="relative group">
                              <Image
                                src={`/images/02/${index === 0 ? 'Image_fx (5).jpg' : index === 1 ? 'Image_fx (17).jpg' : 'image (3).png'}`}
                                alt={program.title}
                                width={600}
                                height={400}
                                className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                              <div className="absolute bottom-4 left-4 text-white">
                                <div className="text-2xl font-bold">{program.title}</div>
                                <div className="text-sm opacity-80">In Action</div>
                              </div>
                            </div>
                          </div>

                          {/* Program Stats & Info */}
                          <div className="space-y-8">
                            <div className="grid grid-cols-1 gap-6">
                              <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300" />
                                <div className="relative p-6 text-center">
                                  <div className={`text-4xl font-bold text-${program.color}-600 mb-2`}>
                                    {program.stats.completion}%
                                  </div>
                                  <div className="text-gray-600 font-medium">Completion Rate</div>
                                  <div className={`w-full bg-gray-200 rounded-full h-2 mt-3`}>
                                    <div
                                      className={`h-2 bg-gradient-to-r from-${program.color}-400 to-${program.color}-500 rounded-full transition-all duration-1000`}
                                      style={{ width: `${program.stats.completion}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-6">
                              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-2xl">
                                <Users className="h-8 w-8 text-blue-600" />
                                <div>
                                  <p className="font-bold text-gray-900 text-lg">Beneficiaries</p>
                                  <p className="text-blue-600 font-semibold">{program.beneficiaries}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-2xl">
                                <Clock className="h-8 w-8 text-green-600" />
                                <div>
                                  <p className="font-bold text-gray-900 text-lg">Duration</p>
                                  <p className="text-green-600 font-semibold">{program.duration}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4 p-4 bg-teal-50 rounded-2xl">
                                <Target className="h-8 w-8 text-teal-600" />
                                <div>
                                  <p className="font-bold text-gray-900 text-lg">Key Impact</p>
                                  <p className="text-teal-600 font-semibold">{program.impact}</p>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <Button
                                className={`w-full bg-gradient-to-r from-${program.color}-600 to-${program.color}-700 hover:from-${program.color}-700 hover:to-${program.color}-800 text-white rounded-2xl py-4 group text-lg font-semibold`}
                              >
                                <Play className="mr-2 h-5 w-5" />
                                Learn More
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                              </Button>
                              <Button
                                variant="outline"
                                className={`w-full border-${program.color}-600 text-${program.color}-600 hover:bg-${program.color}-50 rounded-2xl py-4 text-lg font-semibold`}
                              >
                                <Heart className="mr-2 h-5 w-5" />
                                Support This Program
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {/* Future Programs - Enhanced Vision Layout */}
            <TabsContent value="future" className="space-y-20">
              <ScrollReveal>
                <div className="text-center mb-20">
                  <Badge className="bg-gradient-to-r from-green-100 to-purple-100 text-green-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                    🚀 Future Initiatives
                  </Badge>
                  <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                    Innovative Programs
                    <span className="block bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
                      Shaping Tomorrow
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Our vision for the future includes cutting-edge technology and expanded facilities to serve even more women.
                  </p>
                </div>
              </ScrollReveal>

              {/* Featured Future Program */}
              <ScrollReveal delay={200}>
                <div className="relative group mb-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl p-12 group-hover:scale-105 transition-transform duration-500 border border-blue-200">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-lg">
                            <Zap className="h-12 w-12 text-blue-600" />
                          </div>
                          <div>
                            <Badge className="bg-red-100 text-red-800 mb-2">High Priority</Badge>
                            <h3 className="text-3xl font-serif font-bold text-gray-900">Land-based RAS System</h3>
                          </div>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                          Advanced recirculating aquaculture system to overcome natural water mixing challenges and enable year-round production.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-blue-100 rounded-2xl">
                            <div className="text-2xl font-bold text-blue-600">2024-25</div>
                            <div className="text-sm text-gray-600">Timeline</div>
                          </div>
                          <div className="text-center p-4 bg-purple-100 rounded-2xl">
                            <div className="text-2xl font-bold text-purple-600">High</div>
                            <div className="text-sm text-gray-600">Impact</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src="/images/02/Image_fx (3).jpg"
                          alt="Future RAS System"
                          width={500}
                          height={400}
                          className="rounded-2xl shadow-xl"
                        />
                        <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg">
                          <Zap className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Other Future Programs */}
              <div className="grid lg:grid-cols-2 gap-8">
                {futurePrograms.slice(1).map((program, index) => (
                  <ScrollReveal key={index} delay={index * 200} direction="up">
                    <div className="relative group h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                      <div className="relative p-8 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                          <div
                            className={`w-20 h-20 bg-gradient-to-br from-${program.color}-100 to-${program.color}-200 rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                          >
                            <program.icon className={`h-10 w-10 text-${program.color}-600`} />
                          </div>
                          <Badge
                            className={`${program.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}
                          >
                            {program.priority} Priority
                          </Badge>
                        </div>

                        <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">{program.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-lg">{program.description}</p>

                        <div className="space-y-4 mb-6">
                          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                            <Calendar className="h-6 w-6 text-blue-600" />
                            <div>
                              <p className="font-bold text-gray-900">Timeline</p>
                              <p className="text-gray-600">{program.timeline}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                            <DollarSign className="h-6 w-6 text-green-600" />
                            <div>
                              <p className="font-bold text-gray-900">Investment Status</p>
                              <p className="text-gray-600">{program.investment}</p>
                            </div>
                          </div>
                        </div>

                        <div className="mb-8">
                          <h4 className="font-serif font-bold text-gray-900 mb-4 text-lg">Expected Benefits:</h4>
                          <div className="space-y-3">
                            {program.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl">
                                <Star className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <Button
                            className={`w-full bg-gradient-to-r from-${program.color}-600 to-${program.color}-700 hover:from-${program.color}-700 hover:to-${program.color}-800 text-white rounded-2xl py-4 group text-lg font-semibold`}
                          >
                            <Sparkles className="mr-2 h-5 w-5 group-hover:animate-spin" />
                            Express Interest
                          </Button>
                          <Button
                            variant="outline"
                            className={`w-full border-${program.color}-600 text-${program.color}-600 hover:bg-${program.color}-50 rounded-2xl py-4 text-lg font-semibold`}
                          >
                            <Briefcase className="mr-2 h-5 w-5" />
                            Partnership Opportunity
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {/* Support Services - Enhanced Infrastructure Showcase */}
            <TabsContent value="support" className="space-y-20">
              <ScrollReveal>
                <div className="text-center mb-20">
                  <Badge className="bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                    🏗️ Support Infrastructure
                  </Badge>
                  <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                    Essential Services That
                    <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                      Enable Success
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Our comprehensive support infrastructure ensures that every participant has access to the tools, facilities, and services needed for success.
                  </p>
                </div>
              </ScrollReveal>

              {/* Infrastructure Overview */}
              <ScrollReveal delay={200}>
                <div className="relative group mb-20">
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-blue-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl shadow-2xl p-12 group-hover:scale-105 transition-transform duration-500 border border-teal-200">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-lg">
                            <Building className="h-12 w-12 text-teal-600" />
                          </div>
                          <div>
                            <Badge className="bg-teal-100 text-teal-800 mb-2">Infrastructure Hub</Badge>
                            <h3 className="text-3xl font-serif font-bold text-gray-900">Wakawaka Landing Site</h3>
                          </div>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6">
                          Our state-of-the-art facility at Wakawaka Landing Site provides comprehensive support services that enable women to focus on their aquaculture activities.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-teal-100 rounded-2xl">
                            <div className="text-2xl font-bold text-teal-600">24/7</div>
                            <div className="text-sm text-gray-600">Operations</div>
                          </div>
                          <div className="text-center p-4 bg-blue-100 rounded-2xl">
                            <div className="text-2xl font-bold text-blue-600">500+</div>
                            <div className="text-sm text-gray-600">Daily Users</div>
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <Image
                          src="/images/02/Image_fx (5).jpg"
                          alt="WAIB Infrastructure"
                          width={500}
                          height={400}
                          className="rounded-2xl shadow-xl"
                        />
                        <div className="absolute -top-4 -right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg">
                          <Building className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Support Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Truck,
                    title: "Refrigerated Transport",
                    description: "State-of-the-art refrigerated truck maintaining fish quality during transport to markets",
                    status: "Active",
                    color: "blue",
                    capacity: "5 tons daily",
                    image: "/images/02/Image_fx (17).jpg"
                  },
                  {
                    icon: Building,
                    title: "Accommodation Facilities",
                    description: "Comfortable housing for women traveling from distant areas to participate in programs",
                    status: "Active",
                    color: "green",
                    capacity: "50 women",
                    image: "/images/02/Image_fx (2).jpg"
                  },
                  {
                    icon: Wrench,
                    title: "Equipment & Tools",
                    description: "Complete provision of necessary tools and equipment for all fish farming operations",
                    status: "Active",
                    color: "teal",
                    capacity: "100% equipped",
                    image: "/images/02/Image_fx (3).jpg"
                  },
                  {
                    icon: GraduationCap,
                    title: "Training Facilities",
                    description: "Modern dedicated spaces for conducting comprehensive training sessions and workshops",
                    status: "Active",
                    color: "purple",
                    capacity: "200 trainees",
                    image: "/images/02/image (3).png"
                  },
                ].map((service, index) => (
                  <ScrollReveal key={index} delay={index * 150} direction="up">
                    <div className="relative group h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                      <div className="relative p-8 h-full flex flex-col">
                        <div className={`w-20 h-20 bg-gradient-to-br from-${service.color}-100 to-${service.color}-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                          <service.icon className={`h-10 w-10 text-${service.color}-600`} />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-center">{service.description}</p>

                        <div className="space-y-4">
                          <div className="text-center p-3 bg-gray-50 rounded-xl">
                            <div className={`text-2xl font-bold text-${service.color}-600`}>{service.capacity}</div>
                            <div className="text-sm text-gray-600">Capacity</div>
                          </div>
                          <Badge className={`w-full justify-center py-2 bg-green-100 text-green-800`}>{service.status}</Badge>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Program Impact Showcase */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                📈 Program Success Stories
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Real Results from
                <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Real Programs
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                program: "Cage Fish Farming",
                participant: "Mary Nakato",
                story: "Through the cage fish farming program, I've increased my monthly income from UGX 50,000 to UGX 200,000. I can now afford to send all my children to school.",
                image: "/images/02/Image_fx (5).jpg",
                impact: "300% income increase",
                duration: "18 months",
                color: "blue"
              },
              {
                program: "Value Chain Training",
                participant: "Grace Namukose",
                story: "The value chain training helped me start my own fish processing business. I now employ 5 other women and supply to 3 local markets.",
                image: "/images/02/Image_fx (17).jpg",
                impact: "5 jobs created",
                duration: "12 months",
                color: "green"
              },
            ].map((story, index) => (
              <ScrollReveal key={index} delay={index * 300} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8">
                    <div className="relative mb-6">
                      <Image
                        src={story.image}
                        alt={story.participant}
                        width={500}
                        height={300}
                        className="rounded-2xl shadow-lg w-full"
                      />
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                        <div className="text-lg font-bold text-gray-900">{story.participant}</div>
                        <div className={`text-${story.color}-600 font-medium`}>{story.program}</div>
                      </div>
                    </div>
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      "{story.story}"
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div className={`inline-flex items-center px-4 py-2 bg-${story.color}-50 rounded-full text-${story.color}-700 font-semibold`}>
                        <TrendingUp className="h-4 w-4 mr-2" />
                        {story.impact}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="h-4 w-4 mr-2" />
                        {story.duration}
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
            src="/images/02/image (3).png"
            alt="Support Our Programs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/95 via-blue-800/90 to-green-800/95" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-blue-400/20 rounded-full blur-xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white max-w-6xl mx-auto">
              <h2 className="text-7xl font-serif font-bold mb-8">
                Invest in
                <span className="block bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Transformative Programs
                </span>
              </h2>
              <p className="text-2xl mb-16 leading-relaxed opacity-90">
                Help us expand our programs and reach more women. Your support can make a lasting difference in communities across Uganda and create sustainable change for generations.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Heart, title: "Fund", description: "Support a specific program", action: "Choose Program" },
                  { icon: Users, title: "Partner", description: "Collaborate on initiatives", action: "Explore Partnership" },
                  { icon: Globe, title: "Sponsor", description: "Sponsor future programs", action: "Become Sponsor" },
                ].map((action, index) => (
                  <div key={index} className="group">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <action.icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
                    <p className="text-teal-100 mb-4">{action.description}</p>
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                    >
                      {action.action}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-gray-100 px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group text-xl"
                >
                  <Heart className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Fund a Program
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-xl"
                >
                  <Users className="mr-3 h-6 w-6" />
                  Become a Partner
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
