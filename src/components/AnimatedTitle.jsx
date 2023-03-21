import { motion } from "framer-motion";

export default function AnimatedTitle({ text, className }) {
  // const words = text.split(" ");
  const letters = Array.from(text)
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 + i },
    }),
  };
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      style={{ overflow: "y", display: "flex" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.h1
          variants={child}
          key={index}
          className={className}
        >
          {letter === " " ? `\u00A0` : letter}
        </motion.h1>
      ))}
    </motion.div>
  );
}
