import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import {
  Handshake,
  Building,
  Globe,
  Target,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function PartnerPage() {
  const partnershipTypes = [
    {
      title: "Strategic Partnership",
      description: "Long-term collaboration for sustainable impact",
      icon: Target,
      color: "blue",
      commitment: "3-5 years",
      investment: "$100K - $1M+",
      benefits: [
        "Co-branded programs and initiatives",
        "Board representation opportunities",
        "Exclusive partnership recognition",
        "Joint research and development",
        "Priority access to new programs",
      ],
    },
    {
      title: "Program Partnership",
      description: "Support specific programs and initiatives",
      icon: Users,
      color: "green",
      commitment: "1-3 years",
      investment: "$25K - $500K",
      benefits: [
        "Program naming opportunities",
        "Direct beneficiary engagement",
        "Regular impact reporting",
        "Site visits and monitoring",
        "Community recognition",
      ],
    },
    {
      title: "Corporate Partnership",
      description: "CSR and employee engagement opportunities",
      icon: Building,
      color: "teal",
      commitment: "1-2 years",
      investment: "$10K - $100K",
      benefits: [
        "Employee volunteer programs",
        "CSR report content",
        "Team building opportunities",
        "Skills-based volunteering",
        "Corporate recognition",
      ],
    },
    {
      title: "Technical Partnership",
      description: "Provide expertise and knowledge transfer",
      icon: TrendingUp,
      color: "purple",
      commitment: "6 months - 2 years",
      investment: "In-kind services",
      benefits: [
        "Knowledge sharing platforms",
        "Research collaboration",
        "Innovation opportunities",
        "Capacity building programs",
        "Technical advisory roles",
      ],
    },
  ]

  const partnershipAreas = [
    {
      area: "Infrastructure Development",
      description: "Support facility construction and equipment",
      needs: ["RAS System", "Processing Plant", "Ice Plant", "Hatchery"],
      impact: "Direct production capacity increase",
    },
    {
      area: "Capacity Building",
      description: "Training and skills development programs",
      needs: ["Technical Training", "Business Skills", "Leadership Development", "Digital Literacy"],
      impact: "Enhanced women's capabilities",
    },
    {
      area: "Market Development",
      description: "Market access and value chain support",
      needs: ["Market Linkages", "Quality Standards", "Branding", "Distribution Networks"],
      impact: "Increased income and sustainability",
    },
    {
      area: "Technology Innovation",
      description: "Modern aquaculture technologies",
      needs: ["Digital Monitoring", "Quality Control", "Data Management", "Mobile Solutions"],
      impact: "Improved efficiency and outcomes",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 mb-6">Partner with Us</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Lives Through
              <span className="text-blue-600 block">Strategic Partnership</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join WAIB in creating lasting change for women in Uganda. Our partnerships drive sustainable aquaculture
              development, economic empowerment, and community transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
            <p className="text-xl text-gray-600">Choose the partnership model that aligns with your goals</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-${type.color}-100 rounded-full flex items-center justify-center`}>
                      <type.icon className={`h-8 w-8 text-${type.color}-600`} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{type.title}</CardTitle>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Commitment</h4>
                      <p className="text-gray-600 text-sm">{type.commitment}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Investment</h4>
                      <p className="text-gray-600 text-sm">{type.investment}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Partnership Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Collaboration</h2>
            <p className="text-xl text-gray-600">Key areas where your partnership can make a difference</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipAreas.map((area, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900">{area.area}</h3>
                  <p className="text-gray-600">{area.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Current Needs:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.needs.map((need, idx) => (
                        <Badge key={idx} className="bg-blue-100 text-blue-800">
                          {need}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-green-600">
                    <Target className="h-5 w-5" />
                    <span className="font-medium">{area.impact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-900">Partnership Inquiry</CardTitle>
                  <p className="text-gray-600">
                    Tell us about your organization and partnership interests. We'll get back to you within 48 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@organization.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Name *</label>
                    <Input placeholder="Your organization name" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Organization Type *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select organization type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate/Private Sector</SelectItem>
                        <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                        <SelectItem value="government">Government Agency</SelectItem>
                        <SelectItem value="international">International Organization</SelectItem>
                        <SelectItem value="foundation">Foundation</SelectItem>
                        <SelectItem value="academic">Academic Institution</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Interest *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="strategic">Strategic Partnership</SelectItem>
                        <SelectItem value="program">Program Partnership</SelectItem>
                        <SelectItem value="corporate">Corporate Partnership</SelectItem>
                        <SelectItem value="technical">Technical Partnership</SelectItem>
                        <SelectItem value="funding">Funding Partnership</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                    <div className="space-y-3">
                      {[
                        "Infrastructure Development",
                        "Capacity Building",
                        "Market Development",
                        "Technology Innovation",
                        "Research & Development",
                        "Community Engagement",
                      ].map((area) => (
                        <div key={area} className="flex items-center space-x-2">
                          <Checkbox id={area} />
                          <label htmlFor={area} className="text-sm text-gray-700">
                            {area}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your partnership goals *
                    </label>
                    <Textarea
                      placeholder="Describe your organization's goals, what you hope to achieve through partnership, and any specific areas of interest..."
                      rows={6}
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Handshake className="mr-2 h-4 w-4" />
                    Submit Partnership Inquiry
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    We'll review your inquiry and schedule a call to discuss partnership opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Partnership Team</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our dedicated partnership team is ready to work with you to design a collaboration that creates
                  meaningful impact for women in Uganda.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-blue-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:partnerships@waib.org" className="hover:text-blue-600 transition-colors">
                          partnerships@waib.org
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">For partnership inquiries and collaboration</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-green-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600">+256 XXX XXX XXX</p>
                      <p className="text-sm text-gray-500 mt-1">Monday - Friday, 8:00 AM - 5:00 PM EAT</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-teal-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                      <p className="text-gray-600">
                        Wakawaka Landing Site
                        <br />
                        Bulidha Sub County
                        <br />
                        Bugiri District, Uganda
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Partnership Process */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <span className="text-gray-700">Submit your partnership inquiry</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <span className="text-gray-700">Initial consultation call within 48 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <span className="text-gray-700">Partnership proposal and agreement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <span className="text-gray-700">Launch partnership and begin impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your partnership can transform the lives of thousands of women in Uganda. Let's work together to create
            sustainable change through aquaculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <ArrowRight className="mr-2 h-5 w-5" />
              Start Partnership Discussion
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Globe className="mr-2 h-5 w-5" />
              View Current Partners
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
