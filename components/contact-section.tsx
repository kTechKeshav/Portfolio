"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send, MapPin, Phone, Code } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

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

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    
    // Simulate form submission
    try {
      const res = await fetch("https://formspree.io/f/xblyyyjl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      await new Promise((resolve) => setTimeout(resolve, 1000))

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        setFormData({ name: "", email: "", message: "" })
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Please check your connection.",
        variant: "destructive",
      })
    }

    setIsSubmitting(false)

    

    // toast({
    //   title: "Message sent!",
    //   description: "Thank you for your message. I'll get back to you soon.",
    // })

    // setFormData({ name: "", email: "", message: "" })
    // setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Get In Touch
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Let's Connect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                    technology and innovation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <span>keshavawasthi108@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <span>+91 9696888074</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <span>Uttar Pradesh, India</span>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-semibold mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <motion.a
                        href="https://github.com/kTechKeshav"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/keshav-awasthi-b1512b261/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        <Linkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a
                        href="https://codolio.com/profile/Keshav%20Awasthi"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        <Code className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Available for:</strong> Freelance projects, full-time opportunities, and collaboration on
                      exciting ML/AI initiatives.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
