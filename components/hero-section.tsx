"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Eye, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-400/10 to-blue-400/20 dark:from-purple-600/30 dark:via-pink-600/20 dark:to-blue-600/30" />
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/10 via-transparent to-violet-400/10 dark:from-cyan-600/20 dark:to-violet-600/20" />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary to-pink-500 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6"
          >
            <Sparkles className="mx-auto h-12 w-12 text-primary mb-4 animate-pulse" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 font-sans"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text block mb-2 p-5">
              Aspiring Machine Learning Engineer
            </span>
            <span className="text-foreground/90">& Full Stack Developer</span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-sans font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Exploring intelligent systems and building practical web applications with modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="glass-button glow-effect group font-medium px-8 py-3"
              >
                <Eye className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-button group font-medium px-8 py-3"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 2.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="cursor-pointer group"
              onClick={scrollToProjects}
            >
              <div className="glass-card rounded-full p-3 inline-block group-hover:glow-effect transition-all duration-300">
                <ArrowDown className="h-6 w-6 text-primary group-hover:text-pink-500 transition-colors" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
