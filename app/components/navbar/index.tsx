'use client';

import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';
import Image from 'next/image';
import logo from '../../../public/assets/logo_iza.png';
import { NavigationButton, StyledToolbar } from './styles';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'common.white', boxShadow: 'none' }}>
      <StyledToolbar>
        <Link href="/">
          <Image
            src={logo}
            alt="logo iza artes"
            width={90}
            height={90}
            style={{ marginBottom: '-6px' }}
          />
        </Link>
        <Box display="flex" gap="80px">
          <Link href="/products">
            <NavigationButton disableTouchRipple>Produtos</NavigationButton>
          </Link>
          <Link href="/about">
            <NavigationButton disableTouchRipple>Sobre</NavigationButton>
          </Link>
          <Link href="/contact">
            <NavigationButton disableTouchRipple>Contato</NavigationButton>
          </Link>
        </Box>
        <Box />
      </StyledToolbar>
    </AppBar>
  );
}
