"use client";

// Versión de prueba: No importamos 'motion' y no hacemos animación.
const AnimatedSection = ({ children }) => {
  // Simplemente devolvemos el contenido sin ninguna envoltura de animación.
  return <>{children}</>;
};

export default AnimatedSection;