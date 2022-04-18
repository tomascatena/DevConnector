import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const UIElementBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

export const ComponentBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh'
}));

export const InputContainer = styled(Container)(({ theme }) => ({
  maxWidth: '45rem'
}));

export const PageContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.paper,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(7),
}));
