import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Globe, Users, Target, Award, CheckCircle, Mail, Building } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import FloatingElements from "@/components/floating-elements"
import Link from "next/link"

export default function PartnershipsPage() {
  const currentPartners = [
    {
      name: "UN Women Uganda",
      type: "International Development",
      description:
        "Strategic partnership for women's economic empowerment programs, providing technical support and monitoring.",
      logo: "/images/Partner Logos/UN Women.jpg",
      partnership_since: "2019",
      contribution: "Technical Support & Funding",
      impact: "Program oversight and capacity building",
      status: "Active",
      color: "blue",
    },
    {
      name: "Ministry of Agriculture, Animal Industry and Fisheries",
      type: "Government Partner",
      description:
        "Government partnership providing policy support, technical guidance, and regulatory framework for aquaculture development.",
      logo: "/images/Partner Logos/Ministry of Agriculture, Animal Industry and Fisheries.webp",
      partnership_since: "2019",
      contribution: "Policy Support & Technical Guidance",
      impact: "Regulatory compliance and sector development",
      status: "Active",
      color: "green",
    },
    {
      name: "Swedish Embassy Uganda",
      type: "Diplomatic Partner",
      description:
        "Diplomatic support and advocacy for women's empowerment initiatives in Uganda's aquaculture sector.",
      logo: "/images/Partner Logos/Swedish Embassy Uganda.avif",
      partnership_since: "2022",
      contribution: "Diplomatic Support & Advocacy",
      impact: "International visibility and networking",
      status: "Active",
      color: "yellow",
    },
    {
      name: "Bugiri District Local Government",
      type: "Local Government",
      description:
        "Local government partnership providing land access, community mobilization, and local administrative support.",
      logo: "/images/Partner Logos/images (2).png",
      partnership_since: "2019",
      contribution: "Land Access & Community Support",
      impact: "Local integration and community acceptance",
      status: "Active",
      color: "teal",
    },
  ]



  const partnershipBenefits = [
    {
      icon: Target,
      title: "Measurable Impact",
      description:
        "Track your contribution's direct impact on women's lives and community development with detailed analytics",
      color: "blue",
      features: [
        "Real-time impact tracking",
        "Quarterly progress reports",
        "Success story documentation",
        "ROI measurement tools",
      ],
    },
    {
      icon: Globe,
      title: "Sustainability Focus",
      description:
        "Align with UN SDGs and contribute to sustainable aquaculture practices that benefit the environment",
      color: "green",
      features: [
        "SDG alignment certification",
        "Environmental impact reports",
        "Carbon footprint reduction",
        "Sustainable practices",
      ],
    },
    {
      icon: Award,
      title: "Recognition & Visibility",
      description: "Gain recognition for your commitment to women's empowerment and corporate social responsibility",
      color: "purple",
      features: [
        "Brand visibility campaigns",
        "CSR recognition awards",
        "Media coverage opportunities",
        "Speaking engagements",
      ],
    },
    {
      icon: Building,
      title: "Long-term Partnership",
      description:
        "Build lasting relationships with communities and see sustained impact over time through collaborative efforts",
      color: "teal",
      features: [
        "Community relationships",
        "Sustained impact metrics",
        "Long-term collaboration",
        "Legacy building programs",
      ],
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
            src="/images/02/Image_fx (5).jpg"
            alt="WAIB Partnerships Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-green-900/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <ScrollReveal>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium mb-4 rounded-full">
                🤝 Strategic Partnerships
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
                Building Bridges,
                <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 bg-clip-text text-transparent">
                  Creating Impact
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Discover our strategic partnerships and explore collaboration opportunities that create lasting impact for women's empowerment and sustainable development.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Partnership Tabs */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="current" className="w-full">
            <div className="flex justify-center mb-16">
              <TabsList className="grid w-full max-w-xl grid-cols-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-2 shadow-lg">
                <TabsTrigger
                  value="current"
                  className="rounded-xl font-medium data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  Current Partners
                </TabsTrigger>
                <TabsTrigger
                  value="benefits"
                  className="rounded-xl font-medium data-[state=active]:bg-purple-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
                >
                  Benefits
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Current Partners */}
            <TabsContent value="current" className="space-y-12">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <Badge className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-0 px-6 py-2 font-medium mb-6">
                    Our Current Partners
                  </Badge>
                  <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Valued Collaborators</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Meet the organizations making our mission possible through strategic partnerships and shared vision
                  </p>
                </div>
              </ScrollReveal>

              <div className="space-y-8">
                {currentPartners.map((partner, index) => (
                  <ScrollReveal key={index} delay={index * 150}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-[1.01]" />
                      <div className="relative grid lg:grid-cols-4 gap-6 p-8">
                        <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-50/50 to-white/50 rounded-2xl p-6 backdrop-blur-sm">
                          <div className="w-28 h-20 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              width={100}
                              height={60}
                              className="object-contain"
                            />
                          </div>
                          <h3 className="font-serif font-bold text-lg text-gray-900 mb-2 leading-tight">{partner.name}</h3>
                          <Badge className={`bg-${partner.color}-100 text-${partner.color}-800 mb-3 font-medium`}>
                            {partner.type}
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 font-medium">{partner.status}</Badge>
                        </div>

                        <div className="lg:col-span-3 space-y-6">
                          <p className="text-gray-600 leading-relaxed">{partner.description}</p>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                              <h4 className="font-serif font-semibold text-gray-900 mb-1 text-sm">Partnership Since</h4>
                              <p className="text-gray-600 font-mono text-sm">{partner.partnership_since}</p>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                              <h4 className="font-serif font-semibold text-gray-900 mb-1 text-sm">Contribution</h4>
                              <p className="text-gray-600 text-sm">{partner.contribution}</p>
                            </div>
                            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-100">
                              <h4 className="font-serif font-semibold text-gray-900 mb-1 text-sm">Impact</h4>
                              <p className="text-gray-600 text-sm">{partner.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>



            {/* Partnership Benefits */}
            <TabsContent value="benefits" className="space-y-12">
              <ScrollReveal>
                <div className="text-center mb-16">
                  <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0 px-6 py-2 font-medium mb-6">
                    Partnership Benefits
                  </Badge>
                  <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">Why Partner with WAIB?</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover the unique value and benefits of collaborating with our organization
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 gap-8">
                {partnershipBenefits.map((benefit, index) => (
                  <ScrollReveal key={index} delay={index * 200} direction="up">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:scale-105" />
                      <div className="relative p-8">
                        <div
                          className={`w-16 h-16 bg-gradient-to-br from-${benefit.color}-100 to-${benefit.color}-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        >
                          <benefit.icon className={`h-8 w-8 text-${benefit.color}-600`} />
                        </div>
                        <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">{benefit.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                        <div className="space-y-2">
                          {benefit.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}
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

      {/* Creative Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-6">Ready to Partner with Us?</h2>
              <p className="text-lg mb-10 leading-relaxed opacity-90">
                Join our network of partners committed to transforming women's lives through sustainable aquaculture.
                Let's create lasting impact together and build a better future for communities.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
                    asChild
                  >
                    <span className="flex items-center">
                      <Mail className="mr-2 h-5 w-5" />
                      Contact Partnership Team
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
