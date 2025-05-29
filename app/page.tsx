import { Box } from '@mui/material';
import HomeSwiper from './components/swiper';
import Intro from './components/intro';

export default function Home() {
  return (
    <Box pb={4}>
      <HomeSwiper />
      <Intro />
    </Box>
  );
}
