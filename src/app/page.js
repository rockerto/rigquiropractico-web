"use client"; 

import Image from 'next/image';
import { FaUserMd, FaRunning, FaQuoteLeft, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { GiTripleNeedle } from 'react-icons/gi'; 
import { useState } from 'react';
import { sendEmail } from './actions';
import AnimatedSection from '@/components/AnimatedSection';
import ImageSlider from '@/components/ImageSlider';

export default function Home() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (formData) => {
    setStatus('enviando');
    const result = await sendEmail(formData);
    if (result.success) {
      setStatus('exito');
      document.getElementById('contact-form').reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <main>
      {/* === SECCIÓN 1: HERO (CON LOGO Y BOTÓN CORREGIDOS) === */}
      <section 
        className="relative bg-cover bg-[50%_30%] bg-no-repeat text-white md:bg-fixed"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto flex flex-col items-center px-6 py-24 md:py-32 text-center z-10">
          
          <div className="mb-8">
            <Image
                src="/logo.png"
                alt="Logo de Rig Quiropráctico"
                width={200}
                height={100}
                priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Recupera tu Bienestar y Vive sin Dolor
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Atención quiropráctica profesional enfocada en aliviar tus dolencias, mejorar tu postura y potenciar tu calidad de vida.
          </p>
          <a
            href="https://rigquiropractico-spa.appointlet.com/" // <-- ¡ENLACE ACTUALIZADO!
            target="_blank" // Para que se abra en una nueva pestaña
            rel="noopener noreferrer"
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out text-lg"
          >
            Agenda tu Evaluación
          </a>
        </div>
      </section>

      {/* === SECCIÓN 2: QUIÉN SOY === */}
      <section id="quien-soy" className="py-20 bg-white">
        <AnimatedSection>
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3">
                <Image 
                  src="/foto-perfil.jpg"
                  alt="Fotografía de Roberto Ibacache G., Quiropráctico y Kinesiólogo"
                  width={400}
                  height={400}
                  className="rounded-full shadow-2xl mx-auto"
                  style={{ objectFit: 'cover', width: '300px', height: '300px' }}
                />
              </div>
              <div className="md:w-2/3 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Más de 15 Años de Experiencia a tu Servicio
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  ¡Hola! Soy <strong>Roberto Ibacache G. (RIG)</strong>, Quiropráctico y Kinesiólogo con más de una década y media dedicado a la salud de mis pacientes. Mi formación incluye Kinesiología en la Universidad de Antofagasta y Quiropráctica en la Universidad Central, complementada con especialización en Fisioterapia Invasiva de la Universidad de Chile.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Como atleta activo de Strongman, entiendo en carne propia las demandas del cuerpo, el dolor y la importancia de una recuperación óptima. Esta experiencia personal, sumada a mi formación profesional, me permite ofrecer un enfoque integral y empático, enfocado en encontrar y tratar la raíz de tus dolencias para que puedas volver a moverte sin limitaciones.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* === SECCIÓN 3: GALERÍA (SLIDER REACTIVADO) === */}
      <section id="galeria" className="py-20 bg-gray-50">
        <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Conoce Nuestra Consulta
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Un espacio diseñado para tu comodidad y bienestar, equipado con la mejor tecnología para tu recuperación.
            </p>
            <ImageSlider /> {/* <-- ¡REACTIVADO! */}
          </div>
        </AnimatedSection>
     </section>

      {/* === SECCIÓN 4: SERVICIOS (CONTENIDO ACTUALIZADO) === */}
      <section id="servicios" className="py-20 bg-white">
         <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Ofrecemos una variedad de tratamientos para abordar tus necesidades específicas y ayudarte a alcanzar tus objetivos de salud.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaUserMd className="text-5xl text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Ajuste Quiropráctico</h3>
                <p className="text-gray-600 leading-relaxed">Corrección específica de subluxaciones vertebrales para liberar la interferencia del sistema nervioso y potenciar la salud general.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <GiTripleNeedle className="text-5xl text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Fisioterapia Invasiva</h3>
                <p className="text-gray-600 leading-relaxed">Técnicas avanzadas como punción seca y electrólisis para el tratamiento preciso de lesiones, acelerando la recuperación y aliviando el dolor.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <FaRunning className="text-5xl text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Rehabilitación Funcional</h3>
                <p className="text-gray-600 leading-relaxed">Programas de ejercicios y educación para corregir desequilibrios, mejorar la postura y prevenir futuras lesiones.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* === SECCIÓN 5: TESTIMONIOS === */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Lo Que Dicen Nuestros Pacientes
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              La confianza y el bienestar de mis pacientes es mi mayor recompensa. Aquí algunas de sus historias.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg relative border">
                <FaQuoteLeft className="absolute top-6 left-6 text-5xl text-gray-100" />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6 relative z-10">
                  "Llevaba mucho tiempo con dolor lumbar, el cual se irradiaba hacia mi pierna. Gracias a Roberto, hoy me encuentro sin dolor, además de que me ayudó a mejorar mi postura."
                </p>
                <p className="font-bold text-gray-800 text-right">- Daniel L.</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg relative border">
                <FaQuoteLeft className="absolute top-6 left-6 text-5xl text-gray-100" />
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6 relative z-10">
                  "Llegué a la consulta por una rectificación cervical que me producía mucho dolor. En la primera sesión me sentí mucho mejor. Un excelente profesional, lo recomiendo 100%."
                </p>
                <p className="font-bold text-gray-800 text-right">- María José P.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* === SECCIÓN 6: MULTIMEDIA === */}
      <section id="multimedia" className="py-20 bg-white">
        <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Recursos y Contenido de Valor
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Explora nuestros videos educativos y escucha nuestro podcast para aprender más sobre el cuidado de tu columna y tu salud.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">Canal de YouTube</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/videoseries?list=PLk7PQDq4eiRolBJa_yJPbk5eAuViOWxl6"
                    title="Playlist de YouTube de Rig Quiropráctico" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                  </iframe>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-left">Nuestro Podcast</h3>
                 <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/show/1FcYinJl7VRxOS45N85XOS?utm_source=generator"
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                  </iframe>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
      {/* === SECCIÓN 7: CONTACTO Y FORMULARIO (CONTENIDO ACTUALIZADO) === */}
      <section id="contacto" className="py-20 bg-gray-50">
        <AnimatedSection>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Agenda tu Evaluación
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              ¿Listo para dar el primer paso hacia una vida sin dolor? Contáctame a través de este formulario.
            </p>
            <div className="flex flex-col lg:flex-row gap-12 text-left">
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <li className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-blue-600 text-2xl" />
                    <span>Salitrera Lautaro 541-B, Copiapó, Atacama</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaPhone className="text-blue-600 text-2xl" />
                    <a href="tel:+56989967350" className="hover:text-blue-600">+56 9 8996 7350</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-600 text-2xl" />
                    <a href="mailto:rig@rigquiropractico.cl" className="hover:text-blue-600">rig@rigquiropractico.cl</a>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíame un Mensaje</h3>
                <form id="contact-form" action={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nombre</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensaje</label>
                    <textarea id="message" name="message" rows="5" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === 'enviando'}
                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
                  >
                    {status === 'enviando' ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                </form>
                {status === 'exito' && <p className="text-green-600 font-bold mt-4">¡Mensaje enviado con éxito! Gracias por contactarme.</p>}
                {status === 'error' && <p className="text-red-600 font-bold mt-4">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>
      
    </main>
  );
}