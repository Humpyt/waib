'use client'

import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { motion } from "framer-motion"
import { useState } from "react"

interface GalleryImage {
  src: string
  alt: string
  span?: string
}
import { Badge } from "@/components/ui/badge"
import ScrollReveal from "@/components/scroll-reveal"
import FloatingElements from "@/components/floating-elements"

export default function GalleryPage() {
  const images = [
    // Feature Images (Large Spans)
    { src: "/images/webImages/Image_fx (17).jpg", alt: "WAIB Activities", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/webImages/Image_fx (2).jpg", alt: "WAIB Activities", span: "md:col-span-2" },
    { src: "/images/webImages/Image_fx (3).jpg", alt: "WAIB Event", span: "md:row-span-2" },
    { src: "/images/webImages/Image_fx (5).jpg", alt: "WAIB Activities", span: "md:col-span-2" },
    { src: "/images/webImages/Image_fx (9).jpg", alt: "WAIB Event", span: "md:col-span-2 md:row-span-2" },
    
    // Standard Images
    { src: "/images/webImages/Q1.jpg", alt: "WAIB Activities" },
    { src: "/images/webImages/Q2.jpg", alt: "WAIB Activities" },
    { src: "/images/webImages/Q3.jpg", alt: "WAIB Activities", span: "md:col-span-2" },
    { src: "/images/webImages/Q4.jpg", alt: "WAIB Activities" },
    { src: "/images/webImages/Q5.jpg", alt: "WAIB Activities", span: "md:row-span-2" },
    { src: "/images/webImages/Q6.jpg", alt: "WAIB Activities" },
    { src: "/images/webImages/Q7.jpg", alt: "WAIB Activities", span: "md:col-span-2" },
    { src: "/images/webImages/Q8.jpg", alt: "WAIB Activities" },
    { src: "/images/webImages/Q9.jpg", alt: "WAIB Activities", span: "md:col-span-2" },
    { src: "/images/webImages/Q10.jpg", alt: "WAIB Activities", span: "md:row-span-2" },
    
    // Fish Images
    { src: "/images/webImages/fish02.jpg", alt: "Fish Farming", span: "md:col-span-2" },
    { src: "/images/webImages/fish06.jpg", alt: "Fish Farming", span: "md:col-span-2" },
    
    // Generated and Additional Images
    { src: "/images/webImages/generation-fe6d168d-1308-4e70-b0f5-71375a56c073.png", alt: "WAIB Event", span: "md:col-span-2" },
    { src: "/images/webImages/image (1).png", alt: "WAIB Activities" },
    { src: "/images/webImages/image (2).png", alt: "WAIB Activities", span: "md:col-span-2" },
    { src: "/images/webImages/image (3).png", alt: "WAIB Activities" },
    { src: "/images/webImages/image.png", alt: "WAIB Activities", span: "md:row-span-2" }
  ]

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/85 to-green-800/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <ScrollReveal>
            <Badge className="bg-white/10 text-white border-0 px-6 py-3 text-sm font-semibold mb-6">
              Our Gallery
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
              Capturing Moments of
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Empowerment & Growth
              </span>
            </h1>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Main Gallery */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px] max-w-[1920px] mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${image.span || ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Hover Effect */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                initial={false}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center cursor-pointer backdrop-blur-lg"
          onClick={closeModal}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="relative w-[90vw] h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
            
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              onClick={closeModal}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
