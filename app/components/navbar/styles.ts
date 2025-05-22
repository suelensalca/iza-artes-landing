import { ButtonBase, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavigationButton = styled(ButtonBase)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 600,
  color: theme.palette.common.black,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 80px',
  height: '100px',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 80,
    paddingRight: 160,
  },
}));
