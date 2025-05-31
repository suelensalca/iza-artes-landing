import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#11608e',
  width: '100%',
  padding: '40px 80px',
  [theme.breakpoints.down('sm')]: {
    padding: '40px',
  },
}));

export const FlexSpaceBetween = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '20px',
  flexWrap: 'wrap',
  marginBottom: '32px',
}));

export const Section = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: '200px',
  maxWidth: '300px',
  [theme.breakpoints.down('md')]: {
    maxWidth: '200px',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: '100%',
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '21px',
  fontWeight: '500',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
  },
}));

export const NavigationButton = styled(ButtonBase)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  color: 'white',
  '&:hover': {
    fontWeight: '600',
  },
}));

export const Info = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 500,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    fontWeight: '600',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '14px',
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
