"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, X, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const certificates = [
  {
    id: 1,
    title: "TCS Young Professional Certificate",
    issuer: "TCS iON",
    date: "2023",
    image: "certificates/TCS ypc.png",
    credentialUrl: "https://www.tcsion.com/",
  },
  {
    id: 2,
    title: "QubitiX Hackathon 2025",
    issuer: "GL Bajaj Group of Institution Mathura",
    date: "2025",
    image: "certificates/QubitX Hackathon GL Bajaj.jpg",
    credentialUrl: "https://www.glbajajgroup.org/",
  },
  {
    id: 3,
    title: "Git and GitHub",
    issuer: "LetsUpgrade",
    date: "2024",
    image: "certificates/Git and Github Certificate.png",
    credentialUrl: "https://letsupgrade.in/",
  },
  {
    id: 4,
    title: "Prompt Engineering",
    issuer: "LetsUpgrade",
    date: "2024",
    image: "certificates/Prompt Engineering Certificate.png",
    credentialUrl: "https://letsupgrade.in/",
  },
]

const achievements = [
  <>
    <a
      href="https://www.youtube.com/@SourceContent"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 underline"
    >
      'Source Content' Initiative
    </a>{" "}
    – Promoted technical learning culture within your college.
  </>,
  "Secured a Top 25 Finalist position out of 400+ teams in QubitX 2025 – National Hackathon organized by GL Bajaj Group of Institutions, Mathura.",
  "Actively building and maintaining full-stack and AI/ML projects on GitHub, with regular contributions and consistent commit history reflecting my hands-on learning and development journey.",
  "Consistently learning DSA and system design through structured online programs",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function CertificatesSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null)

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Certificates & Achievements
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certificates */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Certificates
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Card
                      className="cursor-pointer bg-background/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <CardContent className="p-4">
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                          className="w-full h-32 object-cover rounded-md mb-3"
                        />
                        <h4 className="font-semibold text-sm mb-1">{cert.title}</h4>
                        <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                        <Badge variant="outline" className="text-xs">
                          {cert.date}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Award className="mr-2 h-6 w-6 text-primary" />
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            className="bg-background rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">{selectedCertificate.title}</h3>
              <Button variant="ghost" size="icon" onClick={() => setSelectedCertificate(null)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <img
              src={selectedCertificate.image || "/placeholder.svg"}
              alt={selectedCertificate.title}
              className="w-full rounded-md mb-4"
            />
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                <p className="text-sm text-muted-foreground">{selectedCertificate.date}</p>
              </div>
              <Button asChild>
                <a href={selectedCertificate.credentialUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Credential
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
