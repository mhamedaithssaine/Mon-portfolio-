"use client"

import { motion } from "framer-motion"
import { GraduationCapIcon, AwardIcon, CalendarIcon, MapPinIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const educationData = [
  {
    id: 1,
    title: "Formation Développeur Full Stack",
    institution: "YouCode - UMP6, Youssoufia",
    location: "Youssoufia, Maroc",
    period: "Sep 2024 - En cours",
    description:
      "Formation intensive en développement web full stack, couvrant les technologies modernes comme React, Laravel, et les méthodologies agiles.",
    type: "education",
  },
  {
    id: 2,
    title: "Licence Fondamentale en Sciences Mathématiques et Informatique",
    institution: "Faculté Polydisciplinaire de Ouarzazate",
    location: "Ouarzazate, Maroc",
    period: "Jan 2024",
    description:
      "Formation académique combinant les mathématiques avancées et les fondamentaux de l'informatique, incluant l'algorithmique, les structures de données et la programmation.",
    type: "education",
  },
  {
    id: 3,
    title: "Baccalauréat en Sciences Physiques",
    institution: "Lycée Moulay Ismaïne, Kelaat M'gouna",
    location: "Kelaat M'gouna, Maroc",
    period: "Juin 2020",
    description: "Formation scientifique avec spécialisation en physique et mathématiques.",
    type: "education",
  },
  {
    id: 4,
    title: "Certification MySQL",
    institution: "GreatLearning Academy",
    location: "En ligne",
    period: "2023",
    description: "Certification attestant la maîtrise de MySQL pour la gestion de bases de données relationnelles.",
    type: "certification",
  },
]

export default function Education() {
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
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Formation & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mon parcours académique et mes certifications professionnelles qui ont façonné mes compétences et ma vision
            du développement web.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2 z-0"></div>

          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative z-10 mb-12 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12 md:mr-auto md:ml-0"
              } md:w-1/2 w-full`}
            >
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? "md:-left-6 left-0" : "md:-right-6 left-0"
                } w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center z-20`}
              >
                {item.type === "education" ? (
                  <GraduationCapIcon className="text-white" size={20} />
                ) : (
                  <AwardIcon className="text-white" size={20} />
                )}
              </div>

              <Card className={`relative ${index % 2 === 0 ? "md:mr-6" : "md:ml-6"} ml-12`}>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <CalendarIcon size={16} className="mr-2" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <MapPinIcon size={16} className="mr-2" />
                    <span>{item.location}</span>
                  </div>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
