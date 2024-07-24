"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';

const ServicesSection = () => {
  const router = useRouter();
  const smallDevice = useMediaQuery({ query: '(max-width: 768px)'});
  const [isClient, setIsClient] = useState(false);

  const services = [
    { src: "/Services1.jpg", alt: "Services1", route: "/services/extensions-eyelashes", title: "EXTENSIONES DE PESTAÑAS" },
    { src: "/services2.jpg", alt: "Services2", route: "/services/eyebrow-micropigmentation", title: "MICROPIGMENTACIÓN DE CEJAS" },
    { src: "/services3.jpg", alt: "Services3", route: "/services/lip-micropigmentation", title: "LABIOS" },
    { src: "/services4.jpg", alt: "Services4", route: "/services/facial-and-body-treatments", title: "TRATAMIENTOS FACIALES Y CORPORALES" },
    { src: "/services5.jpg", alt: "Services5", route: "/services/serum-therapy", title: "SUERO TERAPIA"}
  ];

  useEffect(() => {
    setIsClient(true);
    const hash = window.location.hash;
    if (hash === '#servicios') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section id="servicios">
      {isClient && smallDevice ? (
        <div className='min-h-screen'>
          <h1 className='flex justify-center text-pink-400 font-extrabold text-2xl p-10'>SERVICIOS</h1>
          <div className='flex flex-col items-center gap-5'>
            {services.map((service, index) => (
              <div key={index} className='flex bg-white bg-opacity-40 backdrop-blur-xl w-[400px] h-[500px] justify-center items-center rounded-md overflow-hidden'>
                <div className='relative w-96 h-[440px] mb-10 transition-transform duration-200 ease-in-out transform hover:scale-110 cursor-pointer'
                onClick={() => router.push(service.route)}>
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    quality={100}
                    className="h-full w-full rounded-md"
                  />
                </div>
                <div className='absolute flex bottom-2'>
                  <p className='text-pink-500'>{service.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-screen shadow-2xl">
          <div className="grid grid-cols-5 bg-black min-h-screen">
            {services.map((service, index) => (
              <div key={index} className="relative h-full overflow-hidden group">
                <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden group-hover:block p-4'>
                  <p className='flex justify-center 2xl:w-96 text-extrabold text-pink-500 text-xl'>{service.title}</p>
                </div>
                <div
                  className="h-full w-full transition-transform duration-200 ease-in-out transform hover:scale-110 cursor-pointer hover:opacity-40"
                  onClick={() => router.push(service.route)}
                >
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    quality={100}
                    className="h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
    </section>
  );
};

export default ServicesSection;
