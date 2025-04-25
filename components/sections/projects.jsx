"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon, GithubIcon } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "SquadBuilder",
    description:
      "Permet de composer une équipe de football en plaçant les joueurs sur le terrain en temps réel. Ajouter, déplacer et remplacer des joueurs. Interface simple et interactive.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML5", "CSS3", "JavaScript", "Git", "Trello"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "Novembre 2024",
  },
  {
    id: 2,
    title: "Youdemy",
    description:
      "Les étudiants peuvent s'inscrire à des cours et les enseignants les gérer facilement. Authentification sécurisée et gestion des rôles. Back-office avec statistiques et suivi des cours.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["HTML", "Tailwind CSS", "PHP", "JavaScript", "Git", "Trello"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "Décembre 2024",
  },
  {
    id: 3,
    title: "HRMS",
    description:
      "Module RH pour gérer employés, départements et hiérarchie avec suivi de carrière, contrats, rôles et permissions.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Laravel", "Spatie", "HTML", "Blade", "Tailwind CSS", "PHP", "JavaScript", "Jira"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    date: "Mars 2025",
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes, démontrant mes compétences en développement web et ma
            capacité à créer des solutions innovantes.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-2">
                  <div className="text-sm font-semibold">{project.date}</div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="mr-2 h-4 w-4" /> Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
