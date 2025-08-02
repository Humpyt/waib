"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Clock, Send, Users, Heart, Globe, Phone, MessageCircle, Zap, Building, Calendar } from "lucide-react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import FloatingElements from "@/components/floating-elements"
import Link from "next/link"

function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We will get back to you within 24 hours.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-bold text-gray-900 mb-3 text-lg">First Name *</label>
          <Input
            required
            placeholder="Your first name"
            className="rounded-2xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 py-4 text-lg"
          />
        </div>
        <div>
          <label className="block font-bold text-gray-900 mb-3 text-lg">Last Name *</label>
          <Input
            required
            placeholder="Your last name"
            className="rounded-2xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 py-4 text-lg"
          />
        </div>
      </div>

      <div>
        <label className="block font-bold text-gray-900 mb-3 text-lg">Email Address *</label>
        <Input
          type="email"
          required
          placeholder="your.email@example.com"
          className="rounded-2xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 py-4 text-lg"
        />
      </div>

      <div>
        <label className="block font-bold text-gray-900 mb-3 text-lg">Organization (Optional)</label>
        <Input
          placeholder="Your organization name"
          className="rounded-2xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 py-4 text-lg"
        />
      </div>

      <div>
        <label className="block font-bold text-gray-900 mb-3 text-lg">Subject *</label>
        <Input
          required
          placeholder="What is this regarding?"
          className="rounded-2xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 py-4 text-lg"
        />
      </div>

      <div>
        <label className="block font-bold text-gray-900 mb-3 text-lg">Message *</label>
        <Textarea
          required
          placeholder="Tell us more about your inquiry or how you'd like to get involved..."
          rows={6}
          className="rounded-2xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 text-lg"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-6 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
      >
        <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
        Send Message
      </Button>

      <div className="text-center p-6 bg-emerald-50 rounded-2xl">
        <p className="text-emerald-700 font-semibold">
          ⚡ Quick Response Guarantee: We respond within 24 hours!
        </p>
      </div>
    </form>
  )
}

export default function ContactPage() {
  const handleContactAction = (actionType: string) => {
    switch (actionType) {
      case "Get Directions":
        window.open("https://maps.google.com/?q=Wakawaka+Landing+Site+Bugiri+Uganda", "_blank")
        break
      case "Send Email":
        window.location.href = "mailto:weebultd@gmail.com"
        break
      case "Schedule Call":
        alert("Please call us during business hours or send us an email to schedule a call.")
        break
      case "Call Now":
        window.location.href = "tel:+256XXXXXXXXX"
        break
      default:
        break
    }
  }

  const contactMethods = [
    {
      icon: MapPin,
      title: "Visit Our Location",
      description: "Come see our work in action",
      details: ["Wakawaka Landing Site", "Bulidha Sub County", "Bugiri District, Uganda"],
      color: "blue",
      action: "Get Directions",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a detailed message",
      details: ["weebultd@gmail.com", "Response within 24-48 hours", "Available Monday-Friday"],
      color: "green",
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Operating Hours",
      description: "When you can reach us",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM", "Sunday: Closed"],
      color: "purple",
      action: "Schedule Call",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      details: ["+256 XXX XXX XXX", "Available during business hours", "Emergency contact available"],
      color: "orange",
      action: "Call Now",
    },
  ]

  const quickActions = [
    {
      icon: Users,
      title: "Partnership Inquiries",
      description: "Explore collaboration opportunities",
      color: "blue",
      href: "/partnerships",
    },
    {
      icon: Heart,
      title: "Support Our Work",
      description: "Make a donation or sponsor a program",
      color: "red",
      href: "/support",
    },
    {
      icon: Zap,
      title: "Volunteer With Us",
      description: "Join our mission as a volunteer",
      color: "green",
      href: "/volunteer",
    },
    {
      icon: Globe,
      title: "Media & Press",
      description: "Press inquiries and media resources",
      color: "purple",
      href: "/media",
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
            src="/images/02/Image_fx (2).jpg"
            alt="WAIB Contact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-teal-900/90 to-blue-900/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Floating Contact Stats */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold">24h</div>
            <div className="text-sm opacity-80">Response Time</div>
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold">4</div>
            <div className="text-sm opacity-80">Contact Methods</div>
          </div>
        </div>
        <div className="absolute bottom-40 left-32 animate-float" style={{ animationDelay: "2s" }}>
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 text-white text-center">
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-sm opacity-80">Available</div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto text-white">
            <ScrollReveal>
              <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-8 py-4 text-lg font-semibold mb-8 rounded-full">
                💬 Get in Touch
              </Badge>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-6xl lg:text-9xl font-serif font-bold mb-8 leading-tight">
                Let's Connect &
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
                  Create Change
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-2xl text-emerald-100 leading-relaxed max-w-4xl mx-auto mb-12">
                Ready to partner with us, support our mission, or learn more about our transformative programs? We'd love to hear from you and explore how we can work together.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Send Message
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleContactAction("Call Now")}
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-xl"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call Us
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

      {/* Contact Overview */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-20">
              <Badge className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 border-0 px-6 py-2 text-sm font-semibold mb-6">
                📞 Contact Methods
              </Badge>
              <h2 className="text-6xl font-serif font-bold text-gray-900 mb-6">
                Multiple Ways to
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Connect With Us
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Choose the most convenient way to get in touch with our team and start your journey with WAIB.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={index} delay={index * 150} direction="up">
                <div className="relative group h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105" />
                  <div className="relative p-8 text-center h-full flex flex-col">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-${method.color}-100 to-${method.color}-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                    >
                      <method.icon className={`h-10 w-10 text-${method.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">{method.title}</h3>
                    <p className="text-gray-600 mb-6">{method.description}</p>
                    <div className="space-y-3 mb-8 flex-grow">
                      {method.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <div className={`w-2 h-2 bg-${method.color}-500 rounded-full`} />
                          <span className="text-gray-600 text-sm font-medium">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => handleContactAction(method.action)}
                      className={`w-full bg-gradient-to-r from-${method.color}-600 to-${method.color}-700 hover:from-${method.color}-700 hover:to-${method.color}-800 text-white rounded-2xl py-4 font-semibold text-lg group transition-all duration-300 hover:scale-105`}
                    >
                      {method.action}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Enhanced Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form - Enhanced */}
            <ScrollReveal direction="left">
              <div id="contact-form" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-emerald-50 rounded-3xl shadow-2xl group-hover:shadow-2xl transition-all duration-500" />
                <div className="relative p-12">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="h-10 w-10 text-emerald-600" />
                    </div>
                    <h3 className="text-4xl font-serif font-bold text-gray-900 mb-4">Send Us a Message</h3>
                    <p className="text-xl text-gray-600 leading-relaxed">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </ScrollReveal>

            {/* Quick Actions */}
            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-4 py-2 font-medium mb-6">
                    Quick Actions
                  </Badge>
                  <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">Other Ways to Get Involved</h3>
                  <p className="text-gray-600 mb-8">
                    Explore different ways to support our mission and connect with our community
                  </p>
                </div>

                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50/50 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300" />
                      <div className="relative p-6 flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br from-${action.color}-100 to-${action.color}-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <action.icon className={`h-6 w-6 text-${action.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-serif font-semibold text-gray-900 mb-1">{action.title}</h4>
                          <p className="text-gray-600 text-sm">{action.description}</p>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className={`border-${action.color}-200 text-${action.color}-600 hover:bg-${action.color}-50 rounded-full font-medium`}
                          asChild
                        >
                          <Link href={action.href}>Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Enhanced Partnership & Support Links */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 to-blue-50/80" />
        <div className="container mx-auto px-4 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-6 py-2 font-medium mb-6">
                Get Involved
              </Badge>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-gray-900 mb-4">More Ways to Support Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore different ways to support our mission and make a lasting impact
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={200} direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-blue-100/50" />
                <div className="relative p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Building className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">Partner with Us</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Explore strategic partnerships, corporate collaborations, and long-term alliances that create
                    sustainable impact for women in aquaculture.
                  </p>
                  <div className="space-y-2 mb-8">
                    {["Strategic partnerships", "Corporate sponsorships", "Technical collaborations"].map(
                      (item, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full py-3 font-semibold group transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/partnerships">
                      <Globe className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      Explore Partnerships
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400} direction="right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-red-50/50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-red-100/50" />
                <div className="relative p-10 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <Heart className="h-10 w-10 text-red-600" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">Support Our Work</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Make a direct impact through donations, sponsorships, and support for specific programs that empower
                    women through aquaculture.
                  </p>
                  <div className="space-y-2 mb-8">
                    {["One-time donations", "Monthly giving programs", "Project sponsorships"].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full py-3 font-semibold group transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link href="/support">
                      <Heart className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                      Make a Donation
                    </Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Location & Visit Information */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-50/50 to-emerald-50/50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-200 to-emerald-200 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <Image
                  src="/images/02/Image_fx (3).jpg"
                  alt="WAIB Location"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -right-8 z-20">
                  <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
                    <div className="text-3xl font-bold text-teal-600">📍</div>
                    <div className="text-sm text-gray-600 font-medium">Visit Us</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-8">
                <div>
                  <Badge className="bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 border-0 px-4 py-2 mb-6">
                    🗺️ Our Location
                  </Badge>
                  <h2 className="text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                    Visit Us at
                    <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                      Wakawaka Landing Site
                    </span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    Come see our transformative work in action at our headquarters on the shores of Lake Victoria in Bugiri District, Uganda.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Address", detail: "Wakawaka Landing Site, Bulidha Sub County, Bugiri District, Uganda" },
                    { icon: Clock, title: "Operating Hours", detail: "Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 8:00 AM - 12:00 PM" },
                    { icon: Phone, title: "Phone", detail: "+256 XXX XXX XXX (Available during business hours)" },
                    { icon: Mail, title: "Email", detail: "weebultd@gmail.com (24-48 hour response time)" },
                  ].map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="h-7 w-7 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={() => handleContactAction("Get Directions")}
                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                  >
                    <MapPin className="mr-2 h-5 w-5 group-hover:bounce" />
                    Get Directions
                  </Button>
                  <Button
                    onClick={() => handleContactAction("Schedule Call")}
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Visit
                  </Button>
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
            alt="Contact WAIB"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-teal-800/90 to-blue-800/95" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-teal-400/20 rounded-full blur-xl animate-pulse" />

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white max-w-6xl mx-auto">
              <h2 className="text-7xl font-serif font-bold mb-8">
                Ready to Make
                <span className="block bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                  a Difference?
                </span>
              </h2>
              <p className="text-2xl mb-16 leading-relaxed opacity-90">
                Whether you're interested in partnerships, support opportunities, or simply want to learn more about our work, we're here to help you get involved in transforming lives.
              </p>

              <div className="grid md:grid-cols-4 gap-8 mb-16">
                {[
                  { icon: Users, title: "Partner", description: "Strategic collaboration" },
                  { icon: Heart, title: "Support", description: "Fund our programs" },
                  { icon: Zap, title: "Volunteer", description: "Join our mission" },
                  { icon: Globe, title: "Visit", description: "See our work" },
                ].map((action, index) => (
                  <div key={index} className="group">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <action.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-emerald-100 text-sm">{action.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-12 py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group text-xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12" />
                  Start Conversation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleContactAction("Call Now")}
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 bg-transparent text-xl"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call Us Now
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
