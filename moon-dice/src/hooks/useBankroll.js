import { bankroll, Bankroll_ADDR, ethereum } from '../helpers/connector';

const { utils } = require('ethers');
const { useEffect, useRef, useState } = require('react');
const React = require('react');

export const useBankroll = () => {
  const mountedRef = useRef(true);
  const [maxBContr, setMaxBContr] = useState(0);
  const [curTotalB, setCurTotalB] = useState(0);
  const [balanceOf, setBalanceOf] = useState(0);
  const [curUTValue, setCurUTValue] = useState(0);
  const [totSup, setTotSup] = useState(0);
  const [youContr, setYouContr] = useState(0);
  const getMaxBContr = async () => {
    const a = await bankroll.MAXIMUMINVESTMENTSALLOWED();
    return setMaxBContr(utils.formatEther(a));
  };
  const getCurToralB = async () => {
    const b = await bankroll.getBankroll();
    return setCurTotalB(utils.formatEther(b));
  };
  const getBalanceOf = async () => {
    const signer = window.ethersProvider.getSigner();
    const myAddress = await signer.getAddress();
    const c = await bankroll.balanceOf(myAddress);
    return setBalanceOf(utils.formatEther(c));
  };
  const getCurUTValue = async () => {
    const signer = window.ethersProvider.getSigner();
    const myAddress = await signer.getAddress();
    const b = await bankroll.getBankroll();
    const c = await bankroll.balanceOf(myAddress);
    const f = await bankroll.totalSupply();
    const e = (Number(utils.formatEther(b)) * Number(utils.formatEther(c))) / Number(utils.formatEther(f));
    return setCurUTValue(e);
  };
  const getTotSup = async () => {
    const f = await bankroll.totalSupply();
    return setTotSup(utils.formatEther(f));
  };
  const getContr = async () => {
    if (maxBContr < curTotalB) return setYouContr(0);
    const g = maxBContr - curTotalB;
    return setYouContr(utils.formatEther(g));
  };
  // deposit
  let q = null;
  function getTransactionReceiptMined(txHash, provider) {
    const transactionReceiptAsync = function (resolve, reject) {
      provider.getTransactionReceipt(txHash, (error, receipt) => {
        if (error) {
          reject(error);
        } else if (receipt == null) {
          setTimeout(() => {
            transactionReceiptAsync(resolve, reject);
          }, 500);
        } else {
          resolve(receipt);
        }
      });
    };
    return new Promise(transactionReceiptAsync);
  }
  const DepositInfo = z => {
    if (q !== null) return z;
    return q;
  };
  const [depositAmt, setDep] = useState(1);
  const [withdrawAmt, setWith] = useState(0.1);
  const handleChange = e => {
    const x = e.target.value;
    setDep(x);
  };
  const handleChangeW = y => {
    const u = y.target.value;
    setWith(u);
  };
  const deposit = async () => {
    const z = depositAmt * 10e17;
    const signer = window.ethersProvider.getSigner();
    const myAddress = await signer.getAddress();
    signer.sendTransaction(
      {
        to: Bankroll_ADDR,
        from: myAddress,
        value: z.toString()
      },
      async (error, result) => {
        if (error) {
          console.log('error while depositing ether to fallback', error);
        } else {
          q = <span className='alert-default'>Waiting for deposit to be processed... one moment please</span>;
          DepositInfo(q);
          const txHash = result;
          const txReceipt = await getTransactionReceiptMined(txHash, window.ethersProvider);

          if (txReceipt.logs.length === 0) {
            q = (
              <span className='alert-danger'>
                Uh oh, your deposit seemed to fail! Please check your account on etherscan for more info...
              </span>
            );
            DepositInfo(q);
          } else {
            const { data } = txReceipt.logs[0];
            const amountEther = parseInt(data.slice(66, 130), 16).toString();
            const amountTokens = parseInt(data.slice(130, 194), 16).toString();
            q = (
              <span className='alert-success'>
                You have successfully deposited {utils.formatEther(amountEther)} ether to our bankroll and have been given
                {utils.formatEther(amountTokens)} EOSBet Stake Tokens! Thank you for contributing to the EOSBet Bankroll.
              </span>
            );
            DepositInfo(q);
          }
        }
      }
    );
  };
  // withdraw
  let j = null;
  const WithdrawInfo = z => {
    if (j !== null) return z;
    return j;
  };
  const parseWithdrawLogs = async txHash => {
    j = <span className='alert alert-info'>Waiting for withdrawal to be processed... one moment please</span>;
    WithdrawInfo(j);
    const txReceipt = await getTransactionReceiptMined(txHash);

    if (txReceipt.logs.length === 0) {
      j = (
        <span className='alert alert-info'>
          Uh oh, your withdrawal seemed to fail! Please check your account on etherscan for more info...
        </span>
      );
      WithdrawInfo(j);
    } else {
      const { data } = txReceipt.logs[0];

      const amountEther = parseInt(data.slice(66, 130), 16).toString();
      const amountTokens = parseInt(data.slice(130, 194), 16).toString();

      j = (
        <span className='alert alert-info'>
          You successfully cashed in {utils.formatEther(amountTokens)} EOSBet Stake tokens and have been sent{' '}
          {utils.formatEther(amountEther)} ether. Thank you for contributing to our bankroll!
        </span>
      );
      WithdrawInfo(j);
    }
  };
  const withdraw = async all => {
    const o = withdrawAmt * 10e17;
    if (all === true) {
      // withdraw all tokens, use smart contract function cashoutEOSBetStakeTokens_ALL
      bankroll.cashoutEOSBetStakeTokens_ALL().then(async (error, result) => {
        if (error) {
          console.log('error while withdrawing all EOSBET Stake tokens', error);
        } else {
          await parseWithdrawLogs(result);
        }
      });
    } else {
      // only withdraw some tokens
      bankroll.cashoutEOSBetStakeTokens(o.toString()).then(async (error, result) => {
        if (error) {
          console.log('error while withdrawing EOSBET Stake tokens', error);
        } else {
          await parseWithdrawLogs(result);
        }
      });
    }
  };
  useEffect(() => {
    getMaxBContr();
    getCurToralB();
    getBalanceOf();
    getCurUTValue();
    getTotSup();
    getContr();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line
  }, []);
  if (!ethereum) return null;
  return {
    maxBContr,
    curTotalB,
    balanceOf,
    curUTValue,
    totSup,
    youContr,
    deposit,
    depositAmt,
    handleChange,
    DepositInfo,
    withdrawAmt,
    handleChangeW,
    WithdrawInfo,
    withdraw
  };
};
