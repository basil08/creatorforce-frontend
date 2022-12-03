import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import * as serviceWorker from './serviceWorker';
import theme from './theme';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: "b86e16d0-92d8-4da8-b925-97739de0e6d4",
  }),
});


root.render(
  <StrictMode>
    <ColorModeScript />

    <LivepeerConfig client={livepeerClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </LivepeerConfig>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
