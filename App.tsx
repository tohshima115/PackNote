import { ThemeProvider } from '@shopify/restyle';
import { theme, darkTheme } from './theme/theme';
import React, {useState} from 'react';
import {Switch} from 'react-native';
import Box from './components/atoms/Box';
import Text from './components/atoms/Text';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : theme}>
            <Box padding={2} backgroundColor="mainBackground" flex={1}>
        <Box
          backgroundColor="border"
          margin={1}
          padding={2}
          flexGrow={1}
        >
          <Text variant="Mb" color="text">
            Primary Card
          </Text>
        </Box>
        <Box
          backgroundColor="border"
          margin={1}
          padding={2}
          flexGrow={1}
        >
          <Text variant="Mb" color="border">
            Secondary Card
          </Text>
        </Box>
        <Box marginTop={2}>
          <Switch
            value={darkMode}
            onValueChange={(value: boolean) => setDarkMode(value)}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}