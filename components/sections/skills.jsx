"use client"

import { motion } from "framer-motion"
import { FaReact, FaLaravel, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub } from "react-icons/fa"
import { SiTailwindcss, SiMysql, SiPhp, SiBootstrap, SiJira, SiTrello, SiFigma, SiPostgresql } from "react-icons/si"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skills = [
  { name: "JavaScript", icon: FaJs, level: 90, color: "#F7DF1E" },
  { name: "ES6+", icon: FaJs, level: 85, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, level: 95, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, level: 90, color: "#1572B6" },
  { name: "React.js", icon: FaReact, level: 80, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#38B2AC" },
  { name: "Bootstrap", icon: SiBootstrap, level: 85, color: "#7952B3" },
  { name: "PHP", icon: SiPhp, level: 80, color: "#777BB4" },
  { name: "Laravel", icon: FaLaravel, level: 85, color: "#FF2D20" },
  { name: "MySQL", icon: SiMysql, level: 85, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, level: 75, color: "#336791" },
  { name: "Git", icon: FaGitAlt, level: 85, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, level: 80, color: "#181717" },
  { name: "Jira", icon: SiJira, level: 75, color: "#0052CC" },
  { name: "Trello", icon: SiTrello, level: 85, color: "#0079BF" },
  { name: "Figma", icon: SiFigma, level: 70, color: "#F24E1E" },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un aperçu des technologies et outils que je maîtrise pour développer des applications web modernes et
            performantes.
          </p>
        </motion.div>

        <TooltipProvider>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-accent transition-colors cursor-pointer">
                      <skill.icon size={48} color={skill.color} className="mb-3" />
                      <h3 className="font-medium mb-2">{skill.name}</h3>
                      <Progress value={skill.level} className="w-full h-2" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {skill.name}: {skill.level}%
                    </p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </motion.div>
        </TooltipProvider>
      </div>
    </section>
  )
}
