import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="https://instagram.com/rigquiro" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-2xl hover:text-blue-300 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://facebook.com/rigquiro" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-2xl hover:text-blue-300 transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a 
            href="https://linkedin.com/in/rigquiro" // LinkedIn suele usar /in/ para perfiles, asumo que es correcto.
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-2xl hover:text-blue-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {currentYear} Rig Quiropráctico. Todos los derechos reservados.</p>
        <p className="text-sm text-gray-400 mt-2">
          Diseñado y desarrollado con la ayuda de Asistente de Programación.
        </p>
      </div>
    </footer>
  );
};

export default Footer;