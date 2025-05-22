'use client';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Swiper } from 'swiper/react';

import banner1 from './../../../public/assets/banner/banner_1.png';
import banner2 from './../../../public/assets/banner/banner_2.png';
import banner3 from './../../../public/assets/banner/banner_3.png';
import banner4 from './../../../public/assets/banner/banner_4.png';
import { Container, StyledSwiperSlide } from './styles';

export default function HomeSwiper() {
  const images = [
    { image: banner1, name: 'costura criativa' },
    { image: banner2, name: 'produto exclusivo' },
    { image: banner3, name: 'feito a mao' },
    { image: banner4, name: 'pronta entrega' },
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
