'use client';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import { Box } from '@mui/material';
import Link from 'next/link';
import {
  CleanLink,
  Container,
  FlexSpaceBetween,
  Info,
  NavigationButton,
  Section,
  SmallIcon,
  Title,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <FlexSpaceBetween>
        <Section>
          <Title>Navegação</Title>
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
          <Title>Contato</Title>
          <Info>
            <LocalPhoneIcon sx={SmallIcon} />
            {process.env.NEXT_PUBLIC_CELL_FORMAT}
          </Info>
          <Info>
            <EmailIcon sx={SmallIcon} />
            iza_martinelli@hotmail.com
          </Info>
          <Info sx={{ alignItems: 'flex-start' }}>
            <LocationPinIcon sx={SmallIcon} />
            Av. Sete de Setembro, 1865 - Centro, Curitiba - PR, BOX 304
          </Info>
        </Section>
        <Section>
          <Title>Redes Sociais</Title>
          <Box sx={{ color: 'white', display: 'flex', gap: '20px' }}>
            <CleanLink
              href="https://www.instagram.com/izamartinelli.artes"
              target="_blank"
              rel="noopener noreferrer">
              <InstagramIcon sx={{ fontSize: { xs: 36, sm: 45 } }} />
            </CleanLink>
            <CleanLink
              href={`https://wa.me/55${process.env.NEXT_PUBLIC_CELL}`}
              target="_blank"
              rel="noopener noreferrer">
              <WhatsAppIcon sx={{ fontSize: { xs: 36, sm: 45 } }} />
            </CleanLink>
            <CleanLink
              href="mailto:iza_martinelli@hotmail.com"
              target="_blank"
              rel="noopener noreferrer">
              <EmailIcon sx={{ fontSize: { xs: 36, sm: 45 } }} />
            </CleanLink>
          </Box>
        </Section>
      </FlexSpaceBetween>
      <Box>
        <Info>Copyright © {new Date().getFullYear()} Iza Artes</Info>
      </Box>
    </Container>
  );
}
