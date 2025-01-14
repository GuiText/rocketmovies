import { StrictMode } from "react";
import React from "react";
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "styled-components";
import GlobalStyles from './styles/global'

import { View } from './pages/View'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <View />
    </ThemeProvider>
  </StrictMode>
)