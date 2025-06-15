"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import CertificatesSection from "@/components/certificates-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Preloader from "@/components/preloader"

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
