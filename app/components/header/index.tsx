import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Image from 'next/image';
import logo from '../../../public/assets/logo_iza.png';

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'common.white' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image src={logo} alt="Escrita com o nome PROTO em roxo" width={100} height={100} />
        <Box>
          <Button variant="text" sx={{ color: 'primary.main' }}>
            Produtos
          </Button>
          <Button variant="text" sx={{ color: 'primary.main' }}>
            Sobre
          </Button>
          <Button variant="text" sx={{ color: 'primary.main' }}>
            Contato
          </Button>
        </Box>
        <Box />
      </Toolbar>
    </AppBar>
  );
}
