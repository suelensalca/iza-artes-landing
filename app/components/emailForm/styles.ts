import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-input': {
    fontSize: '18px',
  },
  '& .MuiOutlinedInput-root': {
    fontSize: '16px',
  },
  '& .MuiInputLabel-root': {
    fontSize: '16px',
  },
  '& .MuiInputBase-root': {
    borderRadius: '16px',
  },
}));

export const SendButton = styled(Button)(({ theme }) => ({
  width: '280px',
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
