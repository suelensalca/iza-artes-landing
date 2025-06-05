'use client';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Swiper } from 'swiper/react';

import banner1 from './../../assets/banner/banner_1.png';
import banner2 from './../../assets/banner/banner_2.png';
import banner3 from './../../assets/banner/banner_3.png';
import banner4 from './../../assets/banner/banner_4.png';
import bannerMobile1 from './../../assets/banner/banner_mobile1.png';
import bannerMobile2 from './../../assets/banner/banner_mobile2.png';
import bannerMobile3 from './../../assets/banner/banner_mobile3.png';
import bannerMobile4 from './../../assets/banner/banner_mobile4.png';
import { Container, StyledSwiperSlide } from './styles';
import { useMediaQuery } from '@mui/material';

export default function HomeSwiper() {
  const isMobile = useMediaQuery('(max-width:599px)');

  const images = isMobile
    ? [
        { image: bannerMobile1, name: 'costura criativa' },
        { image: bannerMobile2, name: 'produto exclusivo' },
        { image: bannerMobile3, name: 'feito a mao' },
        { image: bannerMobile4, name: 'pronta entrega' },
      ]
    : [
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
