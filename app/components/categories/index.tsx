'use client';

import { Box } from '@mui/material';
import necessaire from '../../assets/categories/necessaire.jpeg';
import ecobag from '../../assets/categories/ecobag.jpeg';
import carteira from '../../assets/categories/carteira.jpeg';
import panoprato from '../../assets/categories/panoprato.jpeg';
import portaoculos from '../../assets/categories/portaoculos.jpeg';
import Image from 'next/image';
import { Container, ImageBox, MoreButton, StyledImage, Title } from './styles';
import Link from 'next/link';

export default function Categories() {
  return (
    <Box display="flex" flexDirection="column" margin="80px 40px">
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
      <Link href="/products" style={{ margin: 'auto' }}>
        <MoreButton>ver todos os produtos</MoreButton>
      </Link>
    </Box>
  );
}
