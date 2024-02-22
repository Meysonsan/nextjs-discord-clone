"use client"

import React from 'react';
import { Box } from '@mui/material'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { UserButton } from "@clerk/nextjs";
import IconButton from '@mui/material/IconButton';
import type {} from '@mui/material/themeCssVarsAugmentation';
import { pink } from '@mui/material/colors';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: pink[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: pink[400],
        },
      },
    },
  },
});

const ModeSwitcher = () => {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // for server-side rendering
    // learn more at https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    return null;
  }

  return (
    <Box
        sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100%',
        alignItems: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 3,
        }}
  >
    <UserButton 
      afterSignOutUrl="/"
    />
    <IconButton sx={{ ml: 1 }} onClick={() => {
        mode === 'light' ? setMode('dark') : setMode('light')
      }} color="inherit">
      {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    {/* <StyledComponent>asdasdasd</StyledComponent> */}
  </Box>
  );
};

export default function App() {
  return (
    <CssVarsProvider theme={theme}>
      <ModeSwitcher />
    </CssVarsProvider>
  );
}

