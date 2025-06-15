"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (theme === "dark" || (!theme && systemTheme)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
        className="w-10 h-10 rounded-full hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 180 : 0,
            scale: isDark ? 0.8 : 1,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isDark ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-blue-600" />}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isDark ? "0 0 20px rgba(234, 179, 8, 0.3)" : "0 0 20px rgba(37, 99, 235, 0.3)",
          }}
          transition={{ duration: 0.3 }}
        />
      </Button>
    </motion.div>
  )
}
