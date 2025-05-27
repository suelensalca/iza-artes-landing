import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SwiperSlide } from 'swiper/react';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '2px auto',
  '.swiper-button-prev, .swiper-button-next': {
    color: 'transparent',
  },
  '.swiper-button-prev:hover, .swiper-button-next:hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    zIndex: 10,
  },
}));

export const StyledSwiperSlide = styled(SwiperSlide)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12,
  backgroundColor: '#f2f2f2',
  '& img': {
    objectFit: 'cover',
    width: '100%',
    height: '180px',
    [theme.breakpoints.up('xxl')]: {
      height: '680px',
    },
    [theme.breakpoints.up('xl')]: {
      height: '610px',
    },
    [theme.breakpoints.down('xl')]: {
      height: '550px',
    },
    [theme.breakpoints.down('lg')]: {
      height: '450px',
    },
    [theme.breakpoints.down('md')]: {
      height: '360px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '210px',
    },
  },
}));
