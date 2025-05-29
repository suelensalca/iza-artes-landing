import { Box } from '@mui/material';
import HomeSwiper from './components/swiper';
import Intro from './components/intro';
import Categories from './components/categories';

export default function Home() {
  return (
    <Box pb={4}>
      <HomeSwiper />
      <Categories />
      <Intro />
    </Box>
  );
}
