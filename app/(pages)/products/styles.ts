import { Box, Button, ListItemButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Menu = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  minWidth: '200px',
  padding: '28px 0 12px',
}));

export const MenuTitle = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '18px',
  fontWeight: '500',
  paddingLeft: '28px',
  '&.MuiListItemButton-root:hover': {
    backgroundColor: '#0081a733',
  },
  '&.MuiListItemButton-root': {
    '& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible': {
      color: theme.palette.primary.main,
    },
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: '500',
  color: theme.palette.secondary.main,
  marginBottom: '16px',
  [theme.breakpoints.down('md')]: {
    fontSize: '21px',
  },
}));

export const MoreButton = styled(Button)(({ theme }) => ({
  width: '280px',
  margin: 'auto',
  backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  border: '2px solid',
  borderRadius: '40px',
  textTransform: 'none',
  padding: '8px 16px',
  fontSize: '21px',
  color: theme.palette.common.white,
  '&:hover': {
    border: '2px solid',
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },
}));
