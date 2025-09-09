import "../App.css";
import { motion } from "motion/react";

const CustomTitleStyle = {
  fontWeight: "200",
};
function TittlePortafio() {
  return (
    <div className="title">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={CustomTitleStyle}
      >
        Francisco Vanegas Ibarguen
      </motion.h1>{" "}
    </div>
  );
}

export default TittlePortafio;
