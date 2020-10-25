import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        50: '#fff9da',
        100: '#ffecad',
        200: '#ffe07d',
        300: '#ffd34b',
        400: '#ffc61a',
        500: '#e6ad00', //#6ad00
        600: '#b38600',
        700: '#806000',
        800: '#4e3a00',
        900: '#1d1300',
      },
    },
  };

  export default customTheme;

  
