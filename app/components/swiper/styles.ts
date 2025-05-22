import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SwiperSlide } from 'swiper/react';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '4px auto',
  maxWidth: '1580px',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '1200px',
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '900px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '800px',
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: '580px',
  },
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
    height: '180px',
    [theme.breakpoints.up('xl')]: {
      height: '680px',
    },
    [theme.breakpoints.down('xl')]: {
      height: '490px',
    },
    [theme.breakpoints.down('lg')]: {
      height: '360px',
    },
    [theme.breakpoints.down('md')]: {
      height: '290px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '210px',
    },
  },
}));
