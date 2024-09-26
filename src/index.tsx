import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';


const OFFER_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App OfferCount = {OFFER_COUNT}/>
  </React.StrictMode>
);
