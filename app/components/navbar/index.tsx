'use client';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/material';
import Image from 'next/image';
import logo from '../../../public/assets/logo_iza.png';
import { NavigationButton, StyledToolbar } from './styles';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'common.white' }}>
      <StyledToolbar>
        <Link href="/">
          <Image src={logo} alt="Escrita com o nome PROTO em roxo" width={100} height={100} />
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
