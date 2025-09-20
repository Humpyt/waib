import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  DollarSign,
  Users,
  Fish,
  Building,
  Truck,
  Wrench,
  GraduationCap,
  Target,
  CheckCircle,
  CreditCard,
  Banknote,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function SupportPage() {
  const supportAreas = [
    {
      title: "RAS System Development",
      description: "Land-based Recirculating Aquaculture System for year-round production",
      target: 1000000,
      raised: 150000,
      icon: Fish,
      color: "blue",
      priority: "High",
      impact: "500+ additional women empowered",
      timeline: "18-24 months",
    },
    {
      title: "Fish Processing Plant",
      description: "Value addition facility for processing fish into various products",
      target: 500000,
      raised: 75000,
      icon: Building,
      color: "green",
      priority: "High",
      impact: "3x profit margins, 200+ jobs",
      timeline: "12-18 months",
    },
    {
      title: "Ice Plant Construction",
      description: "On-site ice production to maintain fish quality and reduce losses",
      target: 200000,
      raised: 50000,
      icon: Truck,
      color: "teal",
      priority: "Medium",
      impact: "Reduced post-harvest losses",
      timeline: "6-12 months",
    },
    {
      title: "Hatchery Development",
      description: "Fish breeding facility for quality fingerling production",
      target: 300000,
      raised: 25000,
      icon: Target,
      color: "purple",
      priority: "High",
      impact: "Reliable fingerling supply",
      timeline: "12-18 months",
    },
    {
      title: "Training & Capacity Building",
      description: "Comprehensive training programs for women in aquaculture",
      target: 100000,
      raised: 60000,
      icon: GraduationCap,
      color: "orange",
      priority: "Ongoing",
      impact: "1,000+ women trained annually",
      timeline: "Continuous",
    },
    {
      title: "Equipment & Tools",
      description: "Modern aquaculture equipment and tools for efficient operations",
      target: 150000,
      raised: 80000,
      icon: Wrench,
      color: "indigo",
      priority: "Medium",
      impact: "Improved operational efficiency",
      timeline: "6 months",
    },
  ]

  const donationLevels = [
    {
      amount: 50,
      title: "Supporter",
      description: "Provide training materials for one woman",
      benefits: ["Monthly impact updates", "Digital certificate", "Thank you letter"],
      icon: Heart,
      popular: false,
    },
    {
      amount: 250,
      title: "Advocate",
      description: "Support one woman's complete training program",
      benefits: ["Quarterly impact reports", "Beneficiary story updates", "WAIB merchandise", "Tax receipt"],
      icon: Users,
      popular: true,
    },
    {
      amount: 1000,
      title: "Champion",
      description: "Fund equipment for a small group of women",
      benefits: [
        "Bi-annual site visit invitation",
        "Direct beneficiary communication",
        "Annual impact report",
        "Recognition on website",
      ],
      icon: Target,
      popular: false,
    },
    {
      amount: 5000,
      title: "Transformer",
      description: "Support infrastructure development",
      benefits: [
        "Annual site visit",
        "Meet with beneficiaries",
        "Naming opportunity",
        "Board meeting invitation",
        "Detailed impact dashboard",
      ],
      icon: Building,
      popular: false,
    },
  ]

  const supportMethods = [
    {
      method: "One-time Donation",
      description: "Make a single contribution to support our work",
      icon: DollarSign,
      features: ["Immediate impact", "Tax deductible", "Choose specific program", "Flexible amount"],
    },
    {
      method: "Monthly Giving",
      description: "Provide ongoing support with monthly contributions",
      icon: Heart,
      features: ["Sustained impact", "Automatic payments", "Cancel anytime", "Special recognition"],
    },
    {
      method: "Corporate Sponsorship",
      description: "Partner with us through corporate social responsibility",
      icon: Building,
      features: ["Brand visibility", "Employee engagement", "CSR reporting", "Custom programs"],
    },
    {
      method: "In-Kind Support",
      description: "Donate goods, services, or expertise",
      icon: Wrench,
      features: ["Equipment donation", "Professional services", "Technical expertise", "Training support"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-red-100 text-red-800 mb-6">Support Our Work</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Empower Women,
              <span className="text-red-600 block">Transform Communities</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Your support directly impacts the lives of women in Uganda, creating sustainable livelihoods through
              aquaculture and building stronger communities around Lake Victoria.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">1,400+</div>
              <div className="text-sm text-gray-600">Women Empowered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">394.44</div>
              <div className="text-sm text-gray-600">Tons Fish Produced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">15</div>
              <div className="text-sm text-gray-600">Permanent Jobs Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">500</div>
              <div className="text-sm text-gray-600">Rotational Jobs Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas Needing Support</h2>
            <p className="text-xl text-gray-600">Help us expand our impact and reach more women</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-${area.color}-100 rounded-full flex items-center justify-center`}>
                        <area.icon className={`h-6 w-6 text-${area.color}-600`} />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{area.title}</CardTitle>
                    </div>
                    <Badge
                      className={`${
                        area.priority === "High"
                          ? "bg-red-100 text-red-800"
                          : area.priority === "Ongoing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {area.priority}
                    </Badge>
                  </div>
                  <p className="text-gray-600">{area.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-medium">
                        ${area.raised.toLocaleString()} / ${area.target.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={(area.raised / area.target) * 100} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-900">Impact</p>
                      <p className="text-gray-600">{area.impact}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Timeline</p>
                      <p className="text-gray-600">{area.timeline}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Heart className="mr-2 h-4 w-4" />
                    Support This Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ways to Support</h2>
            <p className="text-xl text-gray-600">Choose a support level that works for you</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationLevels.map((level, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-shadow ${
                  level.popular ? "border-2 border-blue-500 scale-105" : ""
                }`}
              >
                {level.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <level.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">{level.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600">${level.amount}</div>
                  <p className="text-gray-600">{level.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      level.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-600 hover:bg-gray-700 bg-transparent border border-gray-300 text-gray-700 hover:text-white"
                    }`}
                  >
                    <DollarSign className="mr-2 h-4 w-4" />
                    Donate ${level.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Support</h2>
            <p className="text-xl text-gray-600">Multiple ways to make a difference</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {supportMethods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <method.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{method.method}</h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {method.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-gray-900">Make a Donation</CardTitle>
                  <p className="text-gray-600">
                    Your contribution directly supports women's empowerment through aquaculture in Uganda.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount *</label>
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {[50, 100, 250, 500].map((amount) => (
                        <Button
                          key={amount}
                          variant="outline"
                          className="bg-transparent border-gray-300 hover:bg-blue-50 hover:border-blue-500"
                        >
                          ${amount}
                        </Button>
                      ))}
                    </div>
                    <Input placeholder="Enter custom amount" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Donation Type *</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select donation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-time">One-time Donation</SelectItem>
                        <SelectItem value="monthly">Monthly Donation</SelectItem>
                        <SelectItem value="quarterly">Quarterly Donation</SelectItem>
                        <SelectItem value="annual">Annual Donation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Support Area</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose where your donation helps most" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Where needed most</SelectItem>
                        <SelectItem value="ras">RAS System Development</SelectItem>
                        <SelectItem value="processing">Fish Processing Plant</SelectItem>
                        <SelectItem value="ice">Ice Plant Construction</SelectItem>
                        <SelectItem value="hatchery">Hatchery Development</SelectItem>
                        <SelectItem value="training">Training & Capacity Building</SelectItem>
                        <SelectItem value="equipment">Equipment & Tools</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

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
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input placeholder="Your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <Textarea placeholder="Any message or dedication for your donation..." rows={4} />
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="updates" />
                      <label htmlFor="updates" className="text-sm text-gray-700">
                        Send me updates about WAIB's impact and programs
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="anonymous" />
                      <label htmlFor="anonymous" className="text-sm text-gray-700">
                        Make this donation anonymous
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3">
                    <Heart className="mr-2 h-4 w-4" />
                    Complete Donation
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <CreditCard className="h-4 w-4" />
                    <span>Secure payment processing</span>
                    <Banknote className="h-4 w-4" />
                    <span>Tax deductible</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Support Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Impact</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Every donation, no matter the size, creates real change in the lives of women and their families in
                  Uganda. Here's how your support makes a difference:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">$50 Impact</h3>
                    <p className="text-gray-600">
                      Provides training materials and basic equipment for one woman to start her aquaculture journey
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">$250 Impact</h3>
                    <p className="text-gray-600">
                      Funds complete training program for one woman including business skills and ongoing support
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Fish className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">$1,000 Impact</h3>
                    <p className="text-gray-600">
                      Provides cage equipment and fingerlings for a small group of women to start fish farming
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white p-6 rounded-xl border">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Questions About Donating?</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">donations@waib.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">+256 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    <span className="text-gray-700">Wakawaka Landing Site, Bugiri District</span>
                  </div>
                </div>
              </div>

              {/* Tax Information */}
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tax Information</h3>
                <p className="text-gray-600 mb-3">
                  WAIB is a registered organization in Uganda. Donations may be tax deductible depending on your
                  country's tax laws.
                </p>
                <p className="text-sm text-gray-500">
                  Tax receipts will be provided for all donations. Please consult your tax advisor for specific
                  deductibility information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Every Donation Creates Change</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of supporters who believe in empowering women through sustainable aquaculture. Your
            contribution, no matter the size, transforms lives and builds stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Heart className="mr-2 h-5 w-5" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 bg-transparent"
            >
              <Globe className="mr-2 h-5 w-5" />
              Learn More About Impact
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
