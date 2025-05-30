'use client';

import { Box } from '@mui/material';
import necessaire from '../../../public/assets/categories/necessaire.jpeg';
import ecobag from '../../../public/assets/categories/ecobag.jpeg';
import carteira from '../../../public/assets/categories/carteira.jpeg';
import panoprato from '../../../public/assets/categories/panoprato.jpeg';
import portaoculos from '../../../public/assets/categories/portaoculos.jpeg';
import Image from 'next/image';
import { Container, ImageBox, MoreButton, StyledImage, Title } from './styles';

export default function Categories() {
  return (
    <Box display="flex" flexDirection="column" margin="90px 40px">
      <Container>
        <Box>
          <ImageBox>
            <Image src={carteira} alt="carteira" fill style={StyledImage} />
          </ImageBox>
          <Title>Carteiras</Title>
        </Box>
        <Box>
          <ImageBox>
            <Image src={ecobag} alt="ecobag" fill style={StyledImage} />
          </ImageBox>
          <Title>Ecobags</Title>
        </Box>
        <Box>
          <ImageBox>
            <Image src={necessaire} alt="necessaire" fill style={StyledImage} />
          </ImageBox>
          <Title>Necessaires</Title>
        </Box>
        <Box>
          <ImageBox>
            <Image src={panoprato} alt="panoprato" fill style={StyledImage} />
          </ImageBox>
          <Title>Panos de Prato</Title>
        </Box>
        <Box>
          <ImageBox>
            <Image src={portaoculos} alt="portaoculos" fill style={StyledImage} />
          </ImageBox>
          <Title>Porta Óculos</Title>
        </Box>
      </Container>
      <MoreButton>ver todos os produtos</MoreButton>
    </Box>
  );
}
