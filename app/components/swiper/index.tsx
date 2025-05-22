'use client';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Swiper } from 'swiper/react';

import banner1 from './../../../public/assets/banner/banner_iza1.png';
import banner2 from './../../../public/assets/banner/banner_iza2.png';
import banner3 from './../../../public/assets/banner/banner_iza3.png';
import { Container, StyledSwiperSlide } from './styles';

export default function HomeSwiper() {
  const images = [
    { image: banner1, name: 'costura criativa' },
    { image: banner2, name: 'feito a mao' },
    { image: banner3, name: 'pronta entrega' },
  ];

  return (
    <Container>
      <Swiper
        centeredSlides
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        navigation
        modules={[Autoplay, Navigation]}>
        {images.map((img) => (
          <StyledSwiperSlide key={img.name}>
            <Image src={img.image} alt={img.name} />
          </StyledSwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
