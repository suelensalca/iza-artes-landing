'use client';

import { Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import atelieMain from '../../assets/intro/atelie10.jpg';
import atelie1 from '../../assets/intro/atelie1.webp';
import atelie2 from '../../assets/intro/atelie2.webp';
import atelie3 from '../../assets/intro/atelie3.webp';
import atelie4 from '../../assets/intro/atelie6.webp';
import { Constants } from './constants';

export default function Intro() {
  const isMobile = useMediaQuery('(max-width:599px)');

  return (
    <Grid container my={8} mx={4} spacing={4}>
      <Grid size={{ xs: 12, md: 4 }} position="relative" minHeight={{ xs: 600, md: 400 }}>
        <Image src={atelieMain} alt="iza costurando" fill style={{ objectFit: 'cover' }} />
      </Grid>
      <Grid size={{ xs: 12, md: 8 }}>
        <Typography fontWeight={600} color="secondary.main">
          {Constants.title}
        </Typography>
        <Typography fontStyle="italic" fontSize={16} mb={2}>
          {Constants.textIntro}
        </Typography>
        <Typography fontStyle="italic" fontSize={16} mb={2}>
          {Constants.textHandmade}
        </Typography>
        <Typography fontStyle="italic" fontSize={16} mb={2}>
          {Constants.textMarket}
        </Typography>
        <Typography fontStyle="italic" fontSize={16} mb={2}>
          {Constants.textEnd}
        </Typography>
        <Grid container spacing={2}>
          {!isMobile && (
            <Grid size={isMobile ? 12 : 3} position="relative" minHeight={200}>
              <Image src={atelie1} alt="maquina" fill style={{ objectFit: 'cover' }} />
            </Grid>
          )}
          <Grid size={isMobile ? 12 : 3} position="relative" minHeight={200}>
            <Image src={atelie2} alt="balcao" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={isMobile ? 12 : 3} position="relative" minHeight={200}>
            <Image src={atelie3} alt="bordado" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={isMobile ? 12 : 3} position="relative" minHeight={200}>
            <Image src={atelie4} alt="maquina" fill style={{ objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
