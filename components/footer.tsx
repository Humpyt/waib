import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Fish, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Users, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/waib logo2.png"
                alt="WAIB Logo"
                width={60}
                height={45}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering women through sustainable aquaculture in Bugiri District, Uganda. Transforming lives and
              communities through cage fish farming.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-300 hover:text-white transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-gray-300 hover:text-white transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-1" />
                <span className="text-gray-300">
                  Wakawaka Landing Site, Bulidha Sub County, Bugiri District, Uganda
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <a href="mailto:weebultd@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  weebultd@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+2560772609297" className="text-gray-300 hover:text-white transition-colors">
                  +256(0)772-609-297
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Fish className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">waibug.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Impact Stats */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Impact at a Glance</h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Women Empowered</p>
                    <p className="text-2xl font-bold text-green-400">1,400+</p>
                  </div>
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Fish Production</p>
                    <p className="text-2xl font-bold text-blue-400">394.44 Tons</p>
                  </div>
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Fish className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">Years of Impact</p>
                    <p className="text-2xl font-bold text-purple-400">5+</p>
                  </div>
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <Award className="h-5 w-5 text-purple-400" />
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 mt-2">
                View Full Impact Report
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} WAIB - Women Aquaculture Initiative Bugiri. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">
                Developed by{" "}
                <Link
                  href="https://cavemotions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  Cave Motions
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
