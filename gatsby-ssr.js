import React from 'react';
import { ThemeProvider } from '@emotion/react';

import Layout from './src/components/Layout/Layout';

import { theme } from './src/styles/theme';

import { defineCustomElements as HighlightElement } from '@deckdeckgo/highlight-code/dist/loader';

HighlightElement();

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);

export const wrapPageElement = ({ element }) => <Layout>{element}</Layout>;
