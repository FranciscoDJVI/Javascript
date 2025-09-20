import React from "react";
import { motion } from "framer-motion";

const customStyleli = {
  fontSize: "2rem",
  margin: "30px",
  background: "var(--principal-color)",
  padding: "10px",
  border: "10px var(--principal-color) solid",
  boxShadow:"5px 5px 10px #babecc, -5px -5px 10px #ffffff",
  borderRadius:"15px",
};
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
      straggerChildren: 0.5, // Retraso de la animacion entre cada elmento hijo.
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
      <h2 style={{ fontSize: "2rem", marginBottom: "3rem" }}>Skill</h2>
      <div>
        <motion.ul
          variants={containerVarinats}
          initial="hidden"
          animate="show"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "4",
            listStyleType: "none",
          }}
        >
          {skills.map((skill, index) => (
            <motion.li
              style={customStyleli}
              key={index}
              variants={itemVariants}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default Skills;
