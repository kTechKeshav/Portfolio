"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Brain, Zap } from "lucide-react"

const techStack = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Express", category: "Backend", icon: "🚀" },
  { name: "MongoDB", category: "Database", icon: "🍃" },
  { name: "Python", category: "ML/AI", icon: "🐍" },
  { name: "Flask", category: "Backend", icon: "🌶️" },
  { name: "Scikit-learn", category: "ML/AI", icon: "🧠" },
  // { name: "TensorFlow", category: "ML/AI", icon: "🔥" },
  { name: "SQL", category: "Database", icon: "🗄️" },
  // { name: "Docker", category: "DevOps", icon: "🐳" },
  // { name: "AWS", category: "Cloud", icon: "☁️" },
  { name: "Git", category: "Tools", icon: "📝" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const techVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
    },
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-pink-600/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-sans mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-lg text-muted-foreground font-sans">
              Passionate about creating intelligent solutions that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <Card className="glass-card p-8 glow-effect">
                <CardContent className="p-0">
                  <div className="flex items-center mb-8">
                    <motion.div
                      className="w-28 h-28 bg-gradient-to-br from-primary via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl font-bold text-white mr-6 shadow-2xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img src="profile.jpeg" alt="Profile img" />
                      {/* <Brain className="h-12 w-12" /> */}
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 font-sans">Keshav Awasthi</h3>
                      <p className="text-muted-foreground font-sans">ML Engineer & Full Stack Developer</p>
                      <div className="flex gap-2 mt-3">
                        <Code className="h-5 w-5 text-primary" />
                        <Zap className="h-5 w-5 text-purple-500" />
                        <Brain className="h-5 w-5 text-pink-500" />
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed font-sans text-lg">
                    Passionate about learning and building intelligent systems that solve real-world problems. Currently exploring machine learning and full-stack development to bridge the gap between data insights and practical web applications. Eager to create scalable, impactful solutions as I grow in the tech field.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-semibold mb-8 font-sans">
                <span className="gradient-text">Tech Stack</span>
              </h3>
              <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-4" variants={containerVariants}>
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    variants={techVariants}
                    whileHover={{
                      scale: 1.08,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="glass-card w-full justify-center py-3 px-4 hover:glow-effect transition-all duration-300 cursor-pointer group"
                    >
                      <span className="mr-2 text-lg group-hover:scale-125 transition-transform">{tech.icon}</span>
                      <span className="font-medium">{tech.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
