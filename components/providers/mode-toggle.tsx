// import * as React from 'react';
// import IconButton from '@mui/material/IconButton';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { useTheme } from "next-themes";

// export const ModeToggle = () => {
//     const { theme } = useTheme();

//     return (
//         <IconButton sx={{ ml: 1 }} onClick={toggleTheme}>
//         {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//      );
// }

// const toggleTheme = () => {
//     // Отримайте актуальну тему
//     const { theme, setTheme } = useTheme();
  
//     // Переключіть тему на протилежну
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };