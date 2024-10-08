import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { offersMock } from './mocks/offers';

const OFFER_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offerCount = {OFFER_COUNT}
      OfferProps = {offersMock}
    />

  </React.StrictMode>
);
