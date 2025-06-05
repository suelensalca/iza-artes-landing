'use client';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Image from 'next/image';
import mapImg from '../../assets/map.webp';

import { Box, Grid } from '@mui/material';
import { CleanLink, Info, MapGrid, MapLink, SmallIcon, Title } from './styles';
import EmailForm from '@/app/components/emailForm';

export default function Contact() {
  return (
    <Grid container my={{ xs: 2, md: 4, xl: 8 }} mx={{ xs: 4, md: 6, xl: 10 }} spacing={4}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Title>Contato</Title>
        <Info>
          <LocalPhoneIcon sx={SmallIcon} />
          (41) 99999-9999
        </Info>
        <Info>
          <EmailIcon sx={SmallIcon} />
          iza_martinelli@hotmail.com
        </Info>
        <Info sx={{ alignItems: 'flex-start' }}>
          <LocationPinIcon sx={SmallIcon} />
          Av. Sete de Setembro, 1865 - Centro, Curitiba - PR, BOX 304
        </Info>
        <Title mt={6}>Redes Sociais</Title>
        <Box sx={{ color: 'secondary.dark', display: 'flex', gap: '20px' }}>
          <CleanLink
            href="https://www.instagram.com/izamartinelli.artes"
            target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
          </CleanLink>
          <CleanLink href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
          </CleanLink>
          <CleanLink
            href="mailto:iza_martinelli@hotmail.com"
            target="_blank"
            rel="noopener noreferrer">
            <EmailIcon sx={{ fontSize: { xs: 32, sm: 40 } }} />
          </CleanLink>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, lg: 6 }} maxWidth="900px">
        <Title>Enviar Mensagem</Title>
        <EmailForm />
      </Grid>
      <MapGrid size={12}>
        <Image src={mapImg} alt="mapa endereço" fill style={{ objectFit: 'cover' }} />
        <CleanLink
          href="https://maps.app.goo.gl/wRqCHyf9TQDt53DB6"
          target="_blank"
          rel="noopener noreferrer">
          <MapLink>ver no Google Maps</MapLink>
        </CleanLink>
      </MapGrid>
    </Grid>
  );
}
