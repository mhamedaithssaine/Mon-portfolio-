"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDownIcon, MailIcon, GithubIcon, LinkedinIcon } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <h2 className="text-blue-500 font-semibold mb-2">Bonjour, je suis</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">M&apos;hamed Ait Hssaine</h1>
            <h3 className="text-2xl md:text-3xl text-muted-foreground">Développeur Full Stack</h3>
          </div>

          <p className="text-lg text-muted-foreground">
            Titulaire d&apos;une licence en mathématiques et informatique, fortement intéressé par les technologies et
            doté de solides compétences techniques. Je suis actuellement en formation en développement informatique et à
            la recherche d&apos;un stage de PFA afin de mettre en pratique mes connaissances.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <MailIcon className="mr-2 h-4 w-4" /> Contactez-moi
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                Voir mes projets <ArrowDownIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex space-x-4 pt-4">
            <a
              href="https://github.com/mhamedsalih"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/m-hamed-ait-hssaine"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500">
            <Image
              src="/placeholder.svg?height=320&width=320"
              alt="M'hamed Ait Hssaine"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
