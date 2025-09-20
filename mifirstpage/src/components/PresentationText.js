import { motion } from "motion/react";

const customStylediv = {
  background: "var(--principal-color)",
  borderRadius: "15px",
  boxShadow: "5px 5px 10px #babecc, -5px -5px 10px #ffffff",
};

function PresentationText() {
  return (
    <div className="presentation-text" style={customStylediv}>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Hola, mucho gusto soy ingeniero de sistemas egresado de la Univerisidad
        del Pacífico en la ciudad del Buenaventura, Valle del cauca-Colombia.
        soy un desarrollador Jr, apasionado por el desarrollo y con intensiones
        de ser un excelente desarrollador cada día.
      </motion.p>
    </div>
  );
}

export default PresentationText;
