import { useWeb3React } from '@web3-react/core';
import { useEffect, useState } from 'react';
import { useClipboard } from 'use-clipboard-copy';

import { ethereum, MetaMask } from './helpers/connector';

const history = window.localStorage;
export const useConnect = () => {
  const { active, activate, deactivate } = useWeb3React();
  const [isActive, setIsActive] = useState(false);
  const [isWal, setWal] = useState('');
  const [cop, setCop] = useState('Copy Address');
  const clipboard = useClipboard({
    onSuccess() {
      setCop('Copied!');
      setTimeout(() => {
        setCop('Copy Address');
      }, 1000);
    },
    onError() {
      setCop('No copied');
      setTimeout(() => {
        setCop('Copy Address');
      }, 1000);
    }
  });
  async function close() {
    setIsActive(false);
  }
  const disconnect = async () => {
    try {
      await deactivate();
      history.removeItem('MetaMask');
    } catch (e) {
      if (ethereum.disconnect) {
        await ethereum.disconnect;
        await ethereum.clearCachedProvider;
      }
      console.log(e);
    }
    setWal('');
  };
  const connect = async () => {
    try {
      await activate(MetaMask);
    } catch (e) {
      disconnect();
      console.log(e);
    }
    ethereum.on('chainChanged', async () => {
      window.location.reload();
    });
    ethereum.on('accountsChanged', async () => {
      window.location.reload();
    });
    ethereum.on('disconnect', () => {
      disconnect();
    });
    history.setItem('MetaMask', 'true');
    setWal('MetaMask');
  };
  const mountMM = history.getItem('MetaMask');
  const checkIfWalletIsConnect = async () => {
    try {
      if (mountMM) {
        if (!ethereum) return console.log('Please install MetaMask.');
        await connect();
      }

      if (!mountMM) {
        await disconnect();
        console.log('No accounts found');
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    checkIfWalletIsConnect();
    // eslint-disable-next-line
  }, []);
  return {
    active,
    connect,
    disconnect,
    isActive,
    setIsActive,
    close,
    isWal,
    cop,
    clipboard
  };
};
