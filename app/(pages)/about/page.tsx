'use client';

import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Constants } from './constants';
import atelieMain from '../../assets/intro/atelie9.webp';
import atelie1 from '../../assets/intro/atelie1.webp';
import atelie2 from '../../assets/intro/atelie2.webp';
import atelie3 from '../../assets/intro/atelie3.webp';
import atelie5 from '../../assets/intro/atelie5.webp';
import atelie6 from '../../assets/intro/atelie6.webp';
import atelie8 from '../../assets/intro/atelie8.webp';

export default function About() {
  return (
    <Grid container my={{ xs: 2, md: 4, xl: 8 }} mx={{ xs: 4, md: 6, xl: 10 }} spacing={4}>
      <Grid size={{ xs: 12, lg: 7 }}>
        <Typography fontWeight={600} color="secondary.main" mb={2}>
          {Constants.title}
        </Typography>
        <Typography fontStyle="italic" fontSize={{ xs: 14, sm: 16, lg: 18 }} mb={2}>
          {Constants.textIntro}
        </Typography>
        <Typography fontStyle="italic" fontSize={{ xs: 14, sm: 16, lg: 18 }} mb={2}>
          {Constants.textHandmade}
        </Typography>
        <Typography fontStyle="italic" fontSize={{ xs: 14, sm: 16, lg: 18 }} mb={2}>
          {Constants.textProducts}
        </Typography>
        <Typography fontStyle="italic" fontSize={{ xs: 14, sm: 16, lg: 18 }} mb={2}>
          {Constants.textMarket}
        </Typography>
        <Typography fontStyle="italic" fontSize={{ xs: 14, sm: 16, lg: 18 }} mb={2}>
          {Constants.textEnd}
        </Typography>
        <Grid container spacing={2}>
          <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
            <Image src={atelie8} alt="pano bordado" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
            <Image src={atelie1} alt="maquina" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
            <Image src={atelie2} alt="balcao" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
            <Image src={atelie3} alt="bordado" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
            <Image src={atelie6} alt="acabamento" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
            <Image src={atelie5} alt="costura" fill style={{ objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        size={{ xs: 12, lg: 5 }}
        position="relative"
        minHeight={{ xs: 480, sm: 600, md: 700, lg: 400 }}>
        <Image src={atelieMain} alt="iza costurando" fill style={{ objectFit: 'cover' }} />
      </Grid>
    </Grid>
  );
}
