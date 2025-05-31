import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#11608e',
  width: '100%',
  padding: '40px 80px',
}));

export const FlexSpaceBetween = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  gap: '20px',
  flexWrap: 'wrap',
  marginBottom: '32px',
}));

export const Section = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  minWidth: '200px',
  maxWidth: '300px',
}));

export const NavigationButton = styled(ButtonBase)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  color: 'white',
  '&:hover': {
    fontWeight: '600',
  },
}));

export const Info = styled(Typography)(() => ({
  fontSize: '16px',
  fontWeight: 500,
  color: 'white',
  '&:hover': {
    fontWeight: '600',
  },
}));
