"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import CarouselImages from './CarouselImages';

export default function HomeSection() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#home') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section id='home' className="min-h-screen">
      <div className='flex items-center min-h-screen justify-center lg:mt-20 md:mt-20 max-sm:mt-40'>
        <div className='flex flex-col lg:flex-row justify-around items-center h-full p-2 lg:p-0 lg:w-[1000px] lg:h-[600px] bg-white bg-opacity-40 rounded-2xl shadow-2xl'>
          <CarouselImages />
          <div className='flex flex-col justify-center p-4 w-96'>
            <h1 className='flex justify-center text-5xl p-5 text-pink-500'>Acerca de mi</h1>
            <p>
              ¡Hola! Mi nombre es Leidy y soy una esteticista apasionada por realzar la belleza natural de mis clientes. Con años de experiencia en el cuidado estético, me especializo en tratamientos de pestañas, masajes rejuvenecedores y terapias con plasma. Mi objetivo es ofrecer un servicio personalizado y de alta calidad, asegurando que cada visita sea una experiencia única y revitalizante.
            </p>
            <div className='flex justify-end gap-2 mt-10'>
              <button onClick={() => window.open("https://www.instagram.com/pestanasdivinasladyfer", "_blank")}>
                <Image src="/instagram.png" alt='logoInstagram' width={50} height={50} />
              </button>
              <button onClick={() => window.open("https://api.whatsapp.com/send?phone=3155785695", "_blank")}>
                <Image src="/whatsappLogo.png" alt='logoWhatsapp' width={50} height={50} />
              </button>
              <button onClick={() => window.open("https://www.facebook.com/profile.php?id=100064073948313&sk=about", "_blank")}>
                <Image src="/facebookLogo.png" alt='logoFacebook' width={50} height={50} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
