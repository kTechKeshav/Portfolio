"use client"

import { motion } from "framer-motion"
import { Coffee, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center">
            © 2025 Keshav Awasthi. Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            and lots of coffee .<Coffee/>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
