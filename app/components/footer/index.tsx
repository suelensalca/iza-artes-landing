'use client';

import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { Container, FlexSpaceBetween, Info, NavigationButton, Section } from './styles';

export default function Footer() {
  return (
    <Container>
      <FlexSpaceBetween>
        <Section>
          <Typography sx={{ fontSize: '21px', fontWeight: '500', color: 'white' }}>
            Navegação
          </Typography>
          <Link href="/">
            <NavigationButton disableTouchRipple>Página Inicial</NavigationButton>
          </Link>
          <Link href="/products">
            <NavigationButton disableTouchRipple>Produtos</NavigationButton>
          </Link>
          <Link href="/about">
            <NavigationButton disableTouchRipple>Sobre</NavigationButton>
          </Link>
          <Link href="/contact">
            <NavigationButton disableTouchRipple>Contato</NavigationButton>
          </Link>
        </Section>
        <Section>
          <Typography sx={{ fontSize: '21px', fontWeight: '500', color: 'white' }}>
            Contato
          </Typography>
          <Info>(41) 99999-9999</Info>
          <Info>@izamartinelli.artes</Info>
          <Info>Av. Sete de Setembro, 1865 - Centro, Curitiba - PR, BOX 304</Info>
        </Section>
        <Section>
          <Typography sx={{ fontSize: '21px', fontWeight: '500', color: 'white' }}>
            Redes Sociais
          </Typography>
          <Info>insta</Info>
          <Info>wpp</Info>
          <Info>email</Info>
        </Section>
      </FlexSpaceBetween>
      <Box>
        <Info>Copyright © {new Date().getFullYear()} Iza Artes</Info>
      </Box>
    </Container>
  );
}
