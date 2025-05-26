import { Box } from '@mui/material';
import HomeSwiper from './components/swiper';
import Intro from './components/intro';

export default function Home() {
  return (
    <Box>
      <HomeSwiper />
      <Intro />
    </Box>
  );
}
