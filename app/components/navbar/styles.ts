import { ButtonBase, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const NavigationButton = styled(ButtonBase)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  padding: '10px 16px',
  color: theme.palette.common.black,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px',
  height: '86px',
  [theme.breakpoints.up('sm')]: {
    paddingLeft: 40,
    paddingRight: 160,
  },
}));
