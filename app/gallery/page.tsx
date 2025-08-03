import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin, Eye, Download, Share2, Heart, Globe, Camera, Award, Users, Building, GraduationCap, ArrowRight, Star, Play, Zap } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import GlassCard from "@/components/glass-card"
import FloatingElements from "@/components/floating-elements"

export default function GalleryPage() {
  const galleryCategories = [
    {
      id: "dignitary-visits",
      title: "Dignitary Visits",
      description: "High-profile visits from government officials and international partners",
      count: 12,
    },
    {
      id: "community-work",
      title: "Community Engagement",
      description: "Women at work and community activities",
      count: 24,
    },
    {
      id: "facilities",
      title: "Our Facilities",
      description: "Aquaculture facilities, equipment, and infrastructure",
      count: 18,
    },
    {
      id: "achievements",
      title: "Achievements & Awards",
      description: "Recognition ceremonies and milestone celebrations",
      count: 8,
    },
    {
      id: "training",
      title: "Training Sessions",
      description: "Capacity building and skills development programs",
      count: 15,
    },
  ]

  const dignitaryVisits = [
    {
      title: "Commissioner for Fisheries Launch",
      description: "Commissioner for Fisheries officially launches the farm on June 25th, 2019",
      date: "June 25, 2019",
      location: "Wakawaka Landing Site",
      image: "/images/webImages/image (3).png",
      category: "Government Visit",
    },
    {
      title: "Rt. Hon. Rebecca Alitwala Kadaga Visit",
      description: "Right Honorable Rebecca Alitwala Kadaga commissions the land base structure",
      date: "November 21, 2020",
      location: "WAIB Facilities",
      image: "/images/webImages/generation-fe6d168d-1308-4e70-b0f5-71375a56c073.png",
      category: "Government Visit",
    },
    {
      title: "Minister of State for Fisheries Visit",
      description: "Honorable Helen Adoa - Minister of State for Fisheries visits the facility",
      date: "March 29, 2021",
      location: "Wakawaka Landing Site",
      image: "/images/webImages/Q10 - Copy.jpg",
      category: "Government Visit",
    },
    {
      title: "Swedish Ambassador & UN Women Visit",
      description: "Ambassador of Sweden Maria and UN Women Uganda Country Representative visit",
      date: "September 30, 2022",
      location: "Bugiri District",
      image: "/images/webImages/asd.png",
      category: "International Visit",
    },
    {
      title: "UN Women Monitoring Visit",
      description: "UN Women Operations Officer Benson and Program Analyst Patricia monitoring visit",
      date: "2023",
      location: "WAIB Farm",
      image: "/images/webImages/Q8 - Copy.jpg",
      category: "International Visit",
    },
  ]

  const communityWork = [
    {
      title: "Women at Fish Cages",
      description: "Women working at the fish cages on Lake Victoria",
      image: "/images/webImages/Q9.jpg",
      category: "Daily Operations",
    },
    {
      title: "Day Care Services",
      description: "Children being cared for while mothers work",
      image: "/images/webImages/Q10.jpg",
      category: "Support Services",
    },
    {
      title: "Fish Harvesting",
      description: "Community members participating in fish harvesting activities",
      image: "/images/webImages/Image_fx (2).jpg",
      category: "Production",
    },
    {
      title: "Training Session",
      description: "Women participating in value chain training",
      image: "/images/webImages/Image_fx (3).jpg",
      category: "Capacity Building",
    },
    {
      title: "Market Activities",
      description: "Women selling fish at local markets",
      image: "/images/webImages/Image_fx (5).jpg",
      category: "Marketing",
    },
    {
      title: "Community Meeting",
      description: "Community gathering and planning session",
      image: "/images/webImages/Image_fx (9).jpg",
      category: "Community Engagement",
    },
  ]

  const facilities = [
    {
      title: "Fish Cages on Lake Victoria",
      description: "Modern fish cages installed on Lake Victoria for sustainable aquaculture",
      image: "/images/webImages/Image_fx (17).jpg",
      category: "Production Facility",
    },
    {
      title: "Refrigerated Transport Truck",
      description: "Refrigerated truck for maintaining fish quality during transport to markets",
      image: "/images/webImages/Q4 - Copy.jpg",
      category: "Transport",
    },
    {
      title: "Land Base Structure",
      description: "Administrative and processing facilities on land",
      image: "/images/webImages/Q8 - Copy.jpg",
      category: "Infrastructure",
    },
    {
      title: "Training Facilities",
      description: "Dedicated spaces for conducting training and workshops",
      image: "/images/webImages/Q9 - Copy.jpg",
      category: "Education",
    },
    {
      title: "Accommodation Block",
      description: "Housing facilities for women who come to work from distant areas",
      image: "/placeholder.svg?height=300&width=400&text=Accommodation",
      category: "Support Facility",
    },
  ]

  const achievements = [
    {
      title: "Presidential Medal Ceremony",
      description: "Receiving medal from H.E. Yoweri Museveni for championing Women Economic Empowerment",
      date: "International Women's Day 2024",
      image: "/images/webImages/image.png",
      category: "National Recognition",
    },
    {
      title: "G77/NAM Expo Exhibition",
      description: "Exhibiting at the G77/NAM Side event at Serena Hotel Kigo",
      date: "2024",
      image: "/images/webImages/image (1).png",
      category: "International Expo",
    },
    {
      title: "Women's Day National Celebrations",
      description: "Participation in International Women's Day National celebrations",
      date: "March 8, 2024",
      image: "/images/webImages/image (2).png",
      category: "National Event",
    },
    {
      title: "Women in Agribusiness Expo",
      description: "Showcasing women's achievements in agribusiness",
      date: "2024",
      image: "/placeholder.svg?height=300&width=400&text=Agribusiness+Expo",
      category: "Industry Event",
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
            alt="WAIB Gallery Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-purple-800/90 to-green-800/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto text-white">
            <ScrollReveal>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm font-medium mb-4 rounded-full">
                📸 Visual Journey
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight">
                Our Story in
                <span className="block bg-gradient-to-r from-blue-300 via-purple-300 to-green-300 bg-clip-text text-transparent">
                  Pictures
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg text-blue-100 leading-relaxed max-w-2xl mx-auto">
                Explore the visual narrative of WAIB's transformative journey through powerful photographs that capture our milestones, community impact, and the faces behind our success.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery Overview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                📊 Gallery Overview
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Capturing Every
                <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Moment of Impact
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {galleryCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Camera className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">{category.count}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{category.title}</div>
                    <div className="text-sm text-gray-600">{category.description}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Tabs */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="dignitary-visits" className="w-full">
            <div className="flex justify-center mb-20">
              <TabsList className="grid w-full max-w-6xl grid-cols-2 md:grid-cols-5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-3 shadow-xl">
                <TabsTrigger
                  value="dignitary-visits"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white py-4 px-4 text-sm font-semibold transition-all duration-300"
                >
                  <Award className="mr-2 h-4 w-4" />
                  Dignitary Visits
                </TabsTrigger>
                <TabsTrigger
                  value="community-work"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-teal-600 data-[state=active]:text-white py-4 px-4 text-sm font-semibold transition-all duration-300"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Community
                </TabsTrigger>
                <TabsTrigger
                  value="facilities"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-teal-600 data-[state=active]:to-blue-600 data-[state=active]:text-white py-4 px-4 text-sm font-semibold transition-all duration-300"
                >
                  <Building className="mr-2 h-4 w-4" />
                  Facilities
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-600 data-[state=active]:to-orange-600 data-[state=active]:text-white py-4 px-4 text-sm font-semibold transition-all duration-300"
                >
                  <Star className="mr-2 h-4 w-4" />
                  Achievements
                </TabsTrigger>
                <TabsTrigger
                  value="training"
                  className="rounded-2xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white py-4 px-4 text-sm font-semibold transition-all duration-300"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Training
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Dignitary Visits - Enhanced */}
            <TabsContent value="dignitary-visits" className="space-y-20">
              <ScrollReveal>
                <div className="text-center mb-20">
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                    🏛️ Distinguished Visitors
                  </Badge>
                  <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                    High-Profile Recognition
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      & International Support
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    WAIB has welcomed distinguished visitors from government, international organizations, and development partners who recognize our transformative work.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {dignitaryVisits.map((visit, index) => (
                  <ScrollReveal key={index} delay={index * 150} direction="up">
                    <div className="relative group h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                      <div className="relative overflow-hidden rounded-3xl h-full flex flex-col">
                        <div className="relative">
                          <Image
                            src={`/images/02/${index === 0 ? 'Image_fx (2).jpg' : index === 1 ? 'Image_fx (3).jpg' : index === 2 ? 'Image_fx (5).jpg' : index === 3 ? 'Image_fx (17).jpg' : 'image (3).png'}`}
                            alt={visit.title}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-blue-600/90 backdrop-blur-sm text-white border border-white/20 shadow-lg">
                              {visit.category}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex space-x-3">
                              <Button
                                size="sm"
                                className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white shadow-lg"
                              >
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                              >
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="p-8 flex-grow flex flex-col">
                          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{visit.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed flex-grow">{visit.description}</p>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-500">
                              <Calendar className="h-5 w-5 text-blue-600" />
                              <span className="font-medium">{visit.date}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-500">
                              <MapPin className="h-5 w-5 text-green-600" />
                              <span className="font-medium">{visit.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {/* Community Work */}
            <TabsContent value="community-work" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Community Engagement</h2>
                <p className="text-xl text-gray-600">Women at work and community activities</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {communityWork.map((work, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <Image
                        src={work.image || "/placeholder.svg"}
                        alt={work.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-green-600 text-white">{work.category}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white border-white text-gray-900 hover:bg-gray-100"
                          >
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{work.title}</h3>
                      <p className="text-gray-600">{work.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Facilities */}
            <TabsContent value="facilities" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Our Facilities</h2>
                <p className="text-xl text-gray-600">Aquaculture facilities, equipment, and infrastructure</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {facilities.map((facility, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-teal-600 text-white">{facility.category}</Badge>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">{facility.title}</h3>
                      <p className="text-gray-600">{facility.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Achievements */}
            <TabsContent value="achievements" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Achievements & Awards</h2>
                <p className="text-xl text-gray-600">Recognition ceremonies and milestone celebrations</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="grid md:grid-cols-2">
                      <div className="relative">
                        <Image
                          src={achievement.image || "/placeholder.svg"}
                          alt={achievement.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                          <Button
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100"
                          >
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col justify-center">
                        <Badge className="bg-yellow-100 text-yellow-800 w-fit mb-4">{achievement.category}</Badge>
                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">{achievement.title}</h3>
                        <p className="text-gray-600 mb-4">{achievement.description}</p>
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{achievement.date}</span>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Training */}
            <TabsContent value="training" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Training & Capacity Building</h2>
                <p className="text-xl text-gray-600">Skills development and educational programs</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }, (_, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <div className="relative">
                      <Image
                        src={`/placeholder.svg?height=300&width=400&text=Training+${index + 1}`}
                        alt={`Training Session ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-purple-600 text-white">Training</Badge>
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <Button
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 hover:bg-gray-100"
                        >
                          <Eye className="mr-2 h-4 w-4" />
                          View
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                        {
                          [
                            "Fish Farming Techniques",
                            "Value Chain Training",
                            "Business Skills",
                            "Quality Control",
                            "Marketing Strategies",
                            "Financial Literacy",
                          ][index]
                        }
                      </h3>
                      <p className="text-gray-600">
                        {
                          [
                            "Learning modern fish farming techniques",
                            "Understanding the complete value chain",
                            "Developing business management skills",
                            "Ensuring fish quality standards",
                            "Effective marketing and sales",
                            "Managing finances and savings",
                          ][index]
                        }
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Media Kit & Resources */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-blue-50/50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-white rounded-3xl shadow-2xl p-12 group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <Download className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Media Kit</h3>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Download high-resolution images, logos, and our comprehensive company profile for media use.
                    </p>
                    <div className="space-y-4">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        <Download className="mr-2 h-5 w-5" />
                        Download Media Kit
                      </Button>
                      <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-4 rounded-2xl">
                        <Camera className="mr-2 h-5 w-5" />
                        Request Photos
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-4 py-2 mb-6">
                    📁 Resources Available
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Complete Media
                    <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Resource Library
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Access our comprehensive collection of media resources, including high-resolution photographs, company profiles, and promotional materials.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { title: "High-Resolution Photos", count: "77+", description: "Professional quality images" },
                    { title: "Company Profile", count: "1", description: "Comprehensive PDF document" },
                    { title: "Logo Assets", count: "5", description: "Various formats and sizes" },
                    { title: "Fact Sheets", count: "3", description: "Program and impact summaries" },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Download className="h-8 w-8 text-blue-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-3">
                          <h4 className="text-xl font-bold text-gray-900">{resource.title}</h4>
                          <span className="text-2xl font-bold text-blue-600">{resource.count}</span>
                        </div>
                        <p className="text-gray-600">{resource.description}</p>
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
            alt="Share Our Story"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-purple-800/90 to-green-800/95" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400/20 rounded-full blur-xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white max-w-6xl mx-auto">
              <h2 className="text-7xl font-serif font-bold mb-8">
                Share Our
                <span className="block bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Visual Story
                </span>
              </h2>
              <p className="text-2xl mb-16 leading-relaxed opacity-90">
                Help us spread awareness about women's empowerment through aquaculture. Share our gallery and inspire others to support sustainable development across Uganda.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {[
                  { icon: Share2, title: "Share", description: "Spread our story", action: "Share Gallery" },
                  { icon: Download, title: "Download", description: "Get media resources", action: "Download Kit" },
                  { icon: Camera, title: "Document", description: "Capture your visit", action: "Schedule Visit" },
                ].map((action, index) => (
                  <div key={index} className="group">
                    <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <action.icon className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{action.title}</h3>
                    <p className="text-blue-100 mb-4">{action.description}</p>
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
                  className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group text-xl"
                >
                  <Heart className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Support Our Work
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-xl"
                >
                  <Globe className="mr-3 h-6 w-6" />
                  Partner with Us
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
