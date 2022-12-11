import App from './App';
import { ethereum } from './helpers/connector';

require('./index.css');
require('bootstrap/dist/css/bootstrap.css');
const { Web3ReactProvider } = require('@web3-react/core');
const ReactDOM = require('react-dom/client');
const React = require('react');
const { providers } = require('ethers');
const reportWebVitals = require('./reportWebVitals');

const POLLING_INTERVAL = 12000;
const getLibrary = async provider => {
  if (!ethereum) return null;
  const library = new providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);
reportWebVitals();
