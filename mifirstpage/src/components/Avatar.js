import avatar from "../assets/images/avatar.jpg";
import { motion } from "motion/react";

const customStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "500px",
  fontSize: "2rem",
  borderRadius: "24px",
  boxShadow: "0 0 2px 2px #ffffff",
};

function Avatar() {
  return (
    <div clasName="avatar" style={customStyle}>
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="avatar-img"
        src={avatar}
        alt="Avatar"
      ></motion.img>
      <motion.ol
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ margin: "20px" }}
      >
        <li style={{ fontSize: "2rem", fontStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "#000000" }}
            href="https://github.com/FranciscoDJVI"
            target="_blank"
            rel="nooponer noreferrer"
          >
            Github
          </a>
        </li>
        <li style={{ fontSize: "2rem", fontStyle: "none" }}>
          <a
            style={{ textDecoration: "none", color: "#000000" }}
            href="https://www.linkedin.com/in/francisco-vanegas-134522229"
            target="_blank"
            rel="nooponer noreferrer"
          >
            Linkedin
          </a>
        </li>
      </motion.ol>
    </div>
  );
}

export default Avatar;
