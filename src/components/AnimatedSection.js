"use client";

import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Estado inicial: invisible y 50px más abajo
      whileInView={{ opacity: 1, y: 0 }} // Estado final: visible y en su posición original
      viewport={{ once: true }} // La animación solo ocurre una vez
      transition={{ duration: 0.8, ease: "easeOut" }} // Duración y tipo de transición
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;