'use client';

import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Constants } from './constants';
import atelieMain from '../../../public/assets/intro/atelie9.webp';
import atelie1 from '../../../public/assets/intro/atelie1.webp';
import atelie2 from '../../../public/assets/intro/atelie2.webp';
import atelie3 from '../../../public/assets/intro/atelie3.webp';
import atelie5 from '../../../public/assets/intro/atelie5.webp';
import atelie6 from '../../../public/assets/intro/atelie6.webp';
import atelie8 from '../../../public/assets/intro/atelie8.webp';

export default function About() {
  return (
    <Grid container my={8} mx={{ xs: 4, xxl: 10 }} spacing={4}>
      <Grid size={{ xs: 12, md: 7 }}>
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
          {Constants.textProducts}
        </Typography>
        <Typography fontStyle="italic" fontSize={16} mb={2}>
          {Constants.textMarket}
        </Typography>
        <Typography fontStyle="italic" fontSize={16} mb={2}>
          {Constants.textEnd}
        </Typography>
        <Grid container spacing={2}>
          <Grid size={4} position="relative" minHeight={200}>
            <Image src={atelie8} alt="maquina" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={200}>
            <Image src={atelie1} alt="balcao" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={200}>
            <Image src={atelie2} alt="bordado" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={200}>
            <Image src={atelie3} alt="maquina" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={200}>
            <Image src={atelie6} alt="balcao" fill style={{ objectFit: 'cover' }} />
          </Grid>
          <Grid size={4} position="relative" minHeight={200}>
            <Image src={atelie5} alt="bordado" fill style={{ objectFit: 'cover' }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }} position="relative" minHeight={{ xs: 600, md: 400 }}>
        <Image src={atelieMain} alt="iza costurando" fill style={{ objectFit: 'cover' }} />
      </Grid>
    </Grid>
  );
}
