import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '27px',
  fontWeight: '500',
  color: theme.palette.secondary.main,
  margin: '16px 0',
  [theme.breakpoints.down('md')]: {
    fontSize: '21px',
  },
}));

export const Info = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontWeight: 500,
  color: theme.palette.secondary.dark,
  display: 'flex',
  alignItems: 'center',
  marginBottom: '6px',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
}));

export const MapGrid = styled(Grid)(({ theme }) => ({
  position: 'relative',
  border: '1px solid',
  borderColor: theme.palette.primary.dark,
  margin: 'auto',
  minHeight: '280px',
  maxWidth: '400px',
  [theme.breakpoints.up('sm')]: {
    minHeight: '380px',
    maxWidth: '600px',
  },
  [theme.breakpoints.up('lg')]: {
    minHeight: '480px',
    maxWidth: '900px',
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

export const SmallIcon = {
  fontSize: '21px',
  marginRight: '4px',
};
