"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Diabetes Prediction using Logistic Regression",
    description:
      "Predicts diabetes using a logistic regression model trained on the Pima Indians dataset, with preprocessing, scaling, tuning, and Flask deployment.",
    tech: ["Python", "HTML", "CSS", "Flask", "Sklearn"],
    category: "ML",
    github: "https://github.com/kTechKeshav/Diabetes-Prediction-using-Logistic-Regression",
    demo: "https://diabetes-prediction-using-logistic.onrender.com/",
    image: "projects/diabetes.png",
    featured: true,
  },
  {
    id: 2,
    title: "MERN Authentication",
    description: "A MERN stack authentication system with secure user registration, login, and protected routes using JWT.",
    tech: ["React", "Node.js", "Express.js","MongoDB","JWT", "Tailwind", 'Nodemailer'],
    category: "Full Stack",
    github: "https://github.com/kTechKeshav/MERN-Authentication-FSD.git",
    demo: "https://mern-authentication-fsd.vercel.app/",
    image: "projects/mern_auth.png",
    featured: true,
  },
  {
    id: 3,
    title: "Student Performance Indicator",
    description: "A Flask-based ML web app that predicts student performance scores using factors like study hours, sleep, and past results.",
    tech: ["Python", "HTML", "CSS", "Flask", "Sklearn"],
    category: "ML",
    github: "https://github.com/kTechKeshav/Student_Performance_Indicator",
    demo: "https://student-performance-indicator-ea1b.onrender.com/predict",
    image: "projects/performance.png",
    featured: true,
  },
  {
    id: 4,
    title: "Doc Summary Assistant (Using AI)",
    description: "A full-stack AI-powered document summarization app.",
    tech: ["React-Vite", "Node.js","Express","Tailwind CSS","pdfjs-dist","tesseract.js","@google/generative-ai","Vercel", "Render"],
    category: "Full Stack",
    github: "https://github.com/kTechKeshav/Doc-summery-assistant",
    demo: "https://doc-summery-assistant.vercel.app/",
    image: "projects/doc_sum.png",
    featured: true,
  },
  {
    id: 5,
    title: "Medwise - Smart Healthcare Solution",
    description: "Medwise is a hospital management app for efficient patient handling, appointments, and doctor registration with a user-friendly interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "Netlify", "Render"],
    category: "Full Stack",
    github: "https://github.com/kTechKeshav/Medwise-Smart-HealthCare?tab=readme-ov-file",
    demo: "https://medwise-smart-healthcare.netlify.app/",
    image: "projects/medwise.png",
    featured: true,
  },
  {
    id: 6,
    title: "TODO List Web app",
    description: "Welcome to the Todo List App, a clean and functional task manager built with React and integrated with localStorage to help you track your tasks effortlessly.",
    tech: ["React", "Node.js", "HTML","CSS","JavaScript"],
    category: "Full Stack",
    github: "https://github.com/kTechKeshav/Todo-List-Project?tab=readme-ov-file",
    demo: "https://todo-list-proj-react.netlify.app/",
    image: "projects/todo.png",
    featured: false,
  },
  {
    id: 7,
    title: "Tic Tac Toe game using Socket.io (Using AI)",
    description: "A real-time multiplayer Tic Tac Toe game built with Node.js, Express, and Socket.IO. Play with friends online in real-time with room-based matchmaking!",
    tech: ["Express.js", "Node.js", "Socket.io", "HTML","CSS","JavaScript"],
    category: "Full Stack",
    github: "https://github.com/kTechKeshav/Tic-Tac-Toe-Game-using-Socket-IO",
    demo: "https://tic-tac-toe-game-using-socket-io.onrender.com/",
    image: "projects/ttt.png",
    featured: true,
  },
  {
    id: 8,
    title: "Test Forest Fire",
    description: "Forest Fire Area Prediction is a machine learning web application that predicts the area affected by a forest fire based on several environmental and regional parameters.",
    tech: ["Python", "HTML", "CSS", "Flask", "Sklearn"],
    category: "ML",
    github: "https://github.com/kTechKeshav/testforestfires",
    demo: "https://testforestfires-dyi0.onrender.com/predict_data",
    image: "projects/forestfire.png",
    featured: false,
  },
  {
    id: 9,
    title: "Number Guess Game",
    description: "A fun number guessing game (1–50) with real-time feedback, limited attempts, score tracking, and dynamic UI for win/loss status.",
    tech: ["React", "Tailwind CSS", "Recoil"],
    category: "Full Stack",
    github: "https://github.com/kTechKeshav/guess-number-game?tab=readme-ov-file",
    demo: "https://random-number-guessgame.netlify.app/",
    image: "projects/number_guess_game.png",
    featured: false,
  },
  {
    id: 10,
    title: "QR Code Generator",
    description: "This web application is designed to swiftly convert any text or link into a QR code image.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Full Stack",
    github: "https://github.com/kTechKeshav/QR-Code-Generator?tab=readme-ov-file",
    demo: "https://ktechkeshav.github.io/QR-Code-Generator/",
    image: "projects/QR.png",
    featured: false,
  }
]

const categories = ["All", "ML", "Full Stack", "In progress", "Using AI"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
    },
  },
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-purple-400/5 to-pink-400/5 dark:from-cyan-600/10 dark:via-purple-600/10 dark:to-pink-600/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-sans mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              Showcasing my latest work in machine learning and full-stack development
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`glass-button font-medium px-6 py-2 ${selectedCategory === category ? "glow-effect" : ""}`}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="relative"
                >
                  {project.featured && (
                    <motion.div
                      className="absolute -top-2 -right-2 z-10"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <div className="glass-card rounded-full p-2 glow-effect">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      </div>
                    </motion.div>
                  )}

                  <Card className="glass-card h-full glow-effect group overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <motion.img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-t-2xl"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
          

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex gap-2">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button size="sm" className="glass-button" asChild>
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="h-4 w-4" />
                                </a>
                              </Button>
                            </motion.div>
                            {project.demo && (
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <Button size="sm" className="glass-button" asChild>
                                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="h-4 w-4" />
                                  </a>
                                </Button>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="mb-3 text-xl font-sans group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3 font-sans">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="glass-card text-xs font-medium">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 lg:opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" variant="outline" className="glass-button flex-1" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        </motion.div>
                        {project.demo && (
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button size="sm" className="glass-button glow-effect flex-1" asChild>
                              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          </motion.div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
