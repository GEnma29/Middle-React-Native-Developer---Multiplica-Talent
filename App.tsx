import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {SWRConfig} from 'swr';
import {API} from '@src/config/API';
import {theme} from './src/theme';
import MainStack from '@src/navigation/main-stack.nagivation';

const App = () => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          API.get(resource, init).then(res => res.data),
      }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <MainStack />
        </SafeAreaProvider>
      </ThemeProvider>
    </SWRConfig>
  );
};

export default App;
