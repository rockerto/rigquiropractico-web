"use client";

import React from 'react';
// Importamos los componentes de Swiper que necesitamos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

// Importamos los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const ImageSlider = () => {
  // Lista de las imágenes que subiste a la carpeta /public
  const images = [
    '/slider-1.jpg', // Reemplaza si usaste otros nombres
    '/slider-2.jpg',
    '/slider-3.jpg',
    '/slider-4.jpg', // Añade o quita según cuantas fotos tengas
  ];

  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
      <Swiper
        // Instalamos los módulos que vamos a usar
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation // Activa las flechas de navegación
        pagination={{ clickable: true }} // Activa los puntos de paginación
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade" // Efecto de transición
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Imagen de la consulta ${index + 1}`}
              width={1024}
              height={576}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;