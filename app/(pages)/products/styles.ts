import { Box, Button, IconButton, ListItemButton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

export const Menu = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  minWidth: '200px',
  padding: '20px 0 12px',
  [theme.breakpoints.down('md')]: {
    minWidth: '150px',
    padding: '14px 0 6px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '120px',
    padding: '14px 0 6px',
  },
}));

export const MenuTitle = styled(ListItemButton)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontSize: '20px',
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
  [theme.breakpoints.down('md')]: {
    paddingLeft: '20px',
    fontSize: '16px',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: '500',
  color: theme.palette.secondary.main,
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
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    width: '200px',
  },
}));

export const CleanLink = styled('a')({
  textDecoration: 'none',
  color: 'inherit',
  '&:visited': {
    color: 'inherit',
  },
  '&:hover': {
    color: 'inherit',
  },
  '&:active': {
    color: 'inherit',
  },
});

export const BackButton = styled(IconButton)(({ theme }) => ({
  margin: '-50px 0 -10px -80px',
  [theme.breakpoints.down('xxl')]: {
    margin: '-40px 0 -10px -50px',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '-40px 0 -10px -40px',
  },
  [theme.breakpoints.down('md')]: {
    margin: '-20px 0 -10px -20px',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '-10px 0 -10px -10px',
  },
}));

export const StyledIcon = styled(ArrowCircleLeftOutlinedIcon)(({ theme }) => ({
  color: '#0081a7',
  fontSize: '44px',
  [theme.breakpoints.down('xxl')]: {
    fontSize: '40px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '32px',
  },
}));
