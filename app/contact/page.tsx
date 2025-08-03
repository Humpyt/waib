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
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">First Name *</label>
          <Input
            required
            placeholder="Your first name"
            className="border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl py-3 px-4 transition-all duration-300 text-sm sm:text-base"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Last Name *</label>
          <Input
            required
            placeholder="Your last name"
            className="border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl py-3 px-4 transition-all duration-300 text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Email Address *</label>
        <Input
          type="email"
          required
          placeholder="your.email@example.com"
          className="border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl py-3 px-4 transition-all duration-300 text-sm sm:text-base"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Organization (Optional)</label>
        <Input
          placeholder="Your organization name"
          className="border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl py-3 px-4 transition-all duration-300 text-sm sm:text-base"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Subject *</label>
        <Input
          required
          placeholder="What is this regarding?"
          className="border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl py-3 px-4 transition-all duration-300 text-sm sm:text-base"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Message *</label>
        <Textarea
          required
          placeholder="Tell us more about your inquiry or how you'd like to get involved..."
          rows={4}
          className="border-0 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 rounded-xl py-3 px-4 transition-all duration-300 resize-none text-sm sm:text-base"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 group text-sm sm:text-base"
      >
        <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
        Send Message
      </Button>

      <div className="text-center p-3 sm:p-4 bg-emerald-50 rounded-xl border border-emerald-100">
        <p className="text-emerald-700 text-xs sm:text-sm font-medium">
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
        window.location.href = "tel:+2560772609297"
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
      details: ["+256(0)772-609-297", "Available during business hours", "Emergency contact available"],
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <FloatingElements />
      <Navbar />

      {/* Hero Section - Elegant */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/02/Image_fx (2).jpg"
            alt="WAIB Contact Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/85 to-blue-900/90" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto text-white">
            <ScrollReveal>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                <div className="w-2 h-2 bg-emerald-300 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-100">Get in Touch</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
                Let's Connect &
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-blue-300 bg-clip-text text-transparent mt-2">
                  Create Change Together
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <p className="text-lg md:text-xl text-emerald-50 leading-relaxed max-w-3xl mx-auto">
                Ready to partner with us, support our mission, or learn more about our transformative programs? We'd love to hear from you and explore how we can work together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-emerald-50 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-emerald-700 font-medium text-sm">Contact Methods</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Get in Touch
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  With Our Team
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the most convenient way to connect with us and start your journey with WAIB.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="up">
                <div className="group relative bg-white rounded-2xl border border-gray-100 p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 h-full">
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-bl-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-md">
                      <method.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 group-hover:rotate-6 transition-transform duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{method.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{method.description}</p>
                    <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                      {method.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-2 group-hover:translate-x-1 transition-transform duration-300">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                          <span className="text-gray-600 text-xs sm:text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      onClick={() => handleContactAction(method.action)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-md hover:scale-[1.02] group-hover:shadow-lg"
                    >
                      {method.action}
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-28 relative bg-gradient-to-br from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-emerald-50 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-emerald-700 font-medium text-sm">Send a Message</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Get in Touch
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  With Our Team
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal direction="up">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group">
                <div className="p-1 bg-gradient-to-r from-emerald-500 to-teal-500 group-hover:shadow-lg transition-all duration-500">
                  <div className="bg-white rounded-xl p-8 md:p-12 group-hover:shadow-inner transition-all duration-500">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Location & Visit Information */}
      <section className="py-20 md:py-28 relative bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-teal-50 px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                <span className="text-teal-700 font-medium text-sm">Visit Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                Our Location
                <span className="block bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
                  Wakawaka Landing Site
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Come see our transformative work in action at our headquarters on the shores of Lake Victoria in Bugiri District, Uganda.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/02/Image_fx (3).jpg"
                    alt="WAIB Location"
                    width={700}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      <span className="text-teal-800 font-medium">Visit Our Location</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: MapPin, title: "Address", detail: "Wakawaka Landing Site, Bulidha Sub County, Bugiri District, Uganda" },
                    { icon: Clock, title: "Operating Hours", detail: "Monday - Friday: 8:00 AM - 5:00 PM, Saturday: 8:00 AM - 12:00 PM" },
                    { icon: Phone, title: "Phone", detail: "+256(0)772-609-297" },
                    { icon: Mail, title: "Email", detail: "weebultd@gmail.com" },
                  ].map((info, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-teal-200 group hover:-translate-y-1">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-200 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-6">
                          <info.icon className="h-5 w-5 text-teal-600 group-hover:animate-pulse" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-700 transition-colors duration-300">{info.title}</h4>
                          <p className="text-sm text-gray-600">{info.detail}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleContactAction("Get Directions")}
                      className="flex-1 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-md"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <Button
                      onClick={() => handleContactAction("Schedule Call")}
                      variant="outline"
                      className="flex-1 border-teal-200 text-teal-700 hover:bg-teal-50 py-3 rounded-xl transition-all duration-300"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Visit
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 relative bg-gradient-to-br from-emerald-600 to-teal-600 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Join Our Mission</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Ready to Make
                <span className="block text-white">a Difference?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-emerald-50 mb-10 max-w-2xl mx-auto">
                Whether you're interested in partnerships, support opportunities, or simply want to learn more about our work, we're here to help you get involved in transforming lives.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {[
                  { icon: Users, title: "Partner", description: "Strategic collaboration" },
                  { icon: Heart, title: "Support", description: "Fund our programs" },
                  { icon: Zap, title: "Volunteer", description: "Join our mission" },
                  { icon: Globe, title: "Visit", description: "See our work" },
                ].map((action, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3">
                      <action.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white mb-1 text-sm sm:text-base">{action.title}</h3>
                    <p className="text-xs text-emerald-100">{action.description}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Start Conversation
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleContactAction("Call Now")}
                  className="border-blue-400 text-blue-400 hover:bg-blue-500/10 backdrop-blur-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
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
