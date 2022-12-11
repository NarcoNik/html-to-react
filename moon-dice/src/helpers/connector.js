import { InjectedConnector } from '@web3-react/injected-connector';
import { Contract, providers } from 'ethers';

import BankrollABI from './json/BankrollABI.json';
import DiceABI from './json/DiceABI.json';
import SlotsABI from './json/SlotsABI.json';

export const { ethereum } = window;
export const MetaMask = new InjectedConnector({
  supportedChainIds: [1]
});

window.ethersProvider = ethereum ? new providers.Web3Provider(ethereum) : null;
const signer = ethereum ? window.ethersProvider.getSigner() : null;
export const alertChain = 'Please connect with Binance Testnet Chain';
// Token
export const Bankroll_ADDR = '0x06adba5ad6c494e536cad8afa1129ab9f7cb99bf';
export const bankroll = new Contract(Bankroll_ADDR, BankrollABI, signer);
// Mint NFT
export const Dice_ADDR = '0xB533Ff572f5E33d04d02B149E7dCFe980E424c63';
export const dice = new Contract(Dice_ADDR, DiceABI, signer);
// Stake
export const Slots_ADDR = '0x4A3e0c60f7Fa67E8B65C401ddbBF7C17Fea5fe40';
export const slots = new Contract(Slots_ADDR, SlotsABI, signer);
