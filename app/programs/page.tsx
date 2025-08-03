import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Fish,
  Heart,
  TrendingUp,
  Users,
  Target,
  Clock,
  CheckCircle,
  Globe,
  BookOpen,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <FloatingElements />
      <Navbar />

      {/* Hero Section - Compact */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/02/Image_fx (3).jpg"
            alt="WAIB Programs Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900/95 via-blue-800/90 to-green-800/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <ScrollReveal>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium mb-4 rounded-full">
                🎯 Our Programs
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
                Empowering Through
                <span className="block bg-gradient-to-r from-teal-300 via-blue-300 to-green-300 bg-clip-text text-transparent">
                  Comprehensive Programs
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-teal-100 leading-relaxed max-w-2xl mx-auto">
                Discover our comprehensive suite of programs designed to empower women through sustainable aquaculture, skills development, and community support services.
              </p>
            </ScrollReveal>
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
              <TabsList className="w-full max-w-2xl bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-3 shadow-xl">
                <TabsTrigger
                  value="current"
                  className="w-full rounded-2xl bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-6 text-lg font-semibold transition-all duration-300"
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Current Programs
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
                          </div>
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

      <Footer />
    </div>
  )
}
