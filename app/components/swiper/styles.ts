import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SwiperSlide } from 'swiper/react';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '40px 80px',
}));

export const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  backgroundColor: '#f8f8f8cc',
  '& img': {
    objectFit: 'cover',
    width: '100%',
    height: '520px',
  },
}));
