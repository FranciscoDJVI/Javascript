import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Python",
  "Javascript",
  "Mysql",
  "Django",
  "Git",
  "Github",
  "React",
  "Nvim",
];

// Definir las variantes de la animacion para el contenedor
const containerVarinats = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    tansition: {
      straggerChildren: 0.5, // Retrase de la animacion entre cada elmento hijo.
    },
  },
};

// Definir las variantes de la animacion para cada elemento de la lista.
const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

function Skills() {
  return (
    <div className="skills">
      <div>
        <h2 style={{ fontSize: "2rem", marginBottom: "3rem" }}>Skill</h2>
        <motion.ol variants={containerVarinats} initial="hidden" animate="show">
          {skills.map((skill, index) => (
            <motion.li
              style={{ fontSize: "2rem" }}
              key={index}
              variants={itemVariants}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  );
}

export default Skills;
