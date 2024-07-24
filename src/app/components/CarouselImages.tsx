import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


export default function CarouselImages() {
    const imagesSliders : { image: string }[] = [
        { image: '/img-slider1.jpg'},
        { image: '/img-slider2.jpg'},
        { image: '/img-slider3.jpg'},
        { image: '/img-slider4.jpg'},
        { image: '/img-slider5.jpg'},
        { image: '/img-slider6.jpg'}
    ];

    const settings = {
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      arrows: false,
      cssEase: "linear"
    };

  return (
    <div className='relative w-96 lg:w-[500px] lg:-ml-10 lg:h-[600px] rounded-2xl overflow-hidden'>
      <Slider {...settings}>
        {imagesSliders.map((img, key) => (
            <Image src={img.image} key={key} alt="logoHome" width={1000} height={1000} style={{ objectFit: 'cover', objectPosition: 'center' }} quality={100} className='w-auto h-80 md:h-96 lg:h-[600px]'/>
            ))}
      </Slider>
    </div>
  )
}
