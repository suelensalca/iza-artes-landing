'use client';

import { Box, Grid, List, ListItem } from '@mui/material';
import { Menu, MenuTitle, MoreButton, Title } from './styles';
import Image from 'next/image';
import atelie1 from '../../../public/assets/intro/atelie1.webp';
import atelie2 from '../../../public/assets/intro/atelie2.webp';
import atelie8 from '../../../public/assets/intro/atelie8.webp';
import { productsMenu } from './constants';

export default function Products() {
  return (
    <Box display="flex">
      <Menu>
        <List>
          {productsMenu.map((product) => (
            <ListItem key={product.id} sx={{ padding: '2px 0' }}>
              <MenuTitle>{product.name}</MenuTitle>
            </ListItem>
          ))}
        </List>
      </Menu>
      <Grid container width="100%" m={4} spacing={4}>
        <Grid size={12}>
          <Title>Aventais</Title>
        </Grid>
        <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
          <Image src={atelie8} alt="pano bordado" fill style={{ objectFit: 'cover' }} />
        </Grid>
        <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
          <Image src={atelie1} alt="maquina" fill style={{ objectFit: 'cover' }} />
        </Grid>
        <Grid size={4} position="relative" minHeight={{ xs: 140, sm: 160, md: 200, lg: 220 }}>
          <Image src={atelie2} alt="balcao" fill style={{ objectFit: 'cover' }} />
        </Grid>
        <Grid size={12} textAlign="center">
          <MoreButton>faça um orçamento</MoreButton>
        </Grid>
      </Grid>
    </Box>
  );
}
