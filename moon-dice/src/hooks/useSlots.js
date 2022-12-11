import React from 'react';

import { ethereum, slots, Slots_ADDR } from '../helpers/connector';

const { utils } = require('ethers');
const { useEffect, useRef, useState } = require('react');

export const useSlots = () => {
  const mountedRef = useRef(true);
  const [balance, setBalance] = useState(0);
  const [aWager, setAWager] = useState(0);
  const [gamePlayed, setGamePlayed] = useState(0);
  const [maxBet, setMaxBet] = useState(0);
  const [minBetSpin, setMinBetSpin] = useState(0);
  const [minBetTx, setMinBetTx] = useState(0);
  const [gamePaused, setGamePaused] = useState(false);
  const dial1Layout = [
    [15],
    [30, 35, 41, 43, 45, 49, 54],
    [51],
    [9, 21, 22, 27, 37],
    [1, 6, 26, 28, 40, 52, 56, 59, 60],
    [3, 25, 32, 34, 38, 42, 57, 61, 62],
    [2, 4, 5, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 23, 24, 29, 31, 33, 36, 39, 44, 46, 47, 48, 50, 53, 55, 58, 63, 64]
  ];
  const dial2Layout = [
    [14, 15, 16],
    [5],
    [34, 42, 44, 46, 57, 58, 61],
    [7, 8, 22, 23, 36, 37, 56],
    [1, 27, 28, 52, 59, 64],
    [25, 31, 32, 38, 41, 47, 53, 54],
    [2, 3, 4, 6, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21, 24, 26, 29, 30, 33, 35, 39, 40, 43, 45, 48, 49, 50, 51, 55, 60, 62, 63]
  ];
  const dial3Layout = [
    [17],
    [41, 43, 45, 47, 49, 54],
    [4, 44, 51, 61, 62, 64],
    [2, 11, 22, 25, 28, 37],
    [1, 7, 8, 23, 29, 40, 59],
    [3, 24, 32, 38, 42, 57],
    [5, 6, 9, 10, 12, 13, 14, 15, 16, 18, 19, 20, 21, 26, 27, 30, 31, 33, 34, 35, 36, 39, 46, 48, 50, 52, 53, 55, 56, 58, 60, 63]
  ];
  const getContractInfo = async () => {
    const signer = window.ethersProvider.getSigner();
    const myAddress = await signer.getAddress();
    const a = await window.ethersProvider.getBalance(myAddress);
    setBalance(utils.formatEther(a));
    const b = await slots.AMOUNTWAGERED();
    setAWager(utils.formatEther(b));
    const c = await slots.DIALSSPUN();
    setGamePlayed(c);
    const d = await slots.getMaxWin();
    setMaxBet(utils.formatEther(d));
    const e = await slots.MINBET_perSPIN();
    setMinBetSpin(utils.formatEther(e));
    const f = await slots.MINBET_perTX();
    setMinBetTx(utils.formatEther(f));
    const g = await slots.GAMEPAUSED();
    setGamePaused(g);
  };
  // func for spins
  const [betPerSpin, setBetPerSpin] = useState('0.003');
  const [numSpins, setNumSpins] = useState(10);
  function UpdateTotalBet() {
    const l = Number(betPerSpin) * numSpins;
    setTotalBet(l);
  }
  const handleChange = e => {
    const numbers = e.target.value;
    setNumSpins(numbers);
    UpdateTotalBet();
  };
  const credits = parseInt(numSpins, 10);
  const [totalBet, setTotalBet] = useState(10);

  const minBetPerSpinBtn = async () => {
    UpdateTotalBet();
    return setBetPerSpin(minBetSpin);
  };
  const halfBetPerSpinBtn = async () => {
    const halfBet = betPerSpin / 2;
    if (minBetSpin > halfBet) return setBetPerSpin(minBetSpin);
    UpdateTotalBet();
    return setBetPerSpin(halfBet);
  };
  const doubleBetPerSpinBtn = async () => {
    const doubleBet = betPerSpin * 2;
    const x = (maxBet * 0.98).toFixed(0);
    if (x < doubleBet) return setBetPerSpin(x);
    UpdateTotalBet();
    return setBetPerSpin(doubleBet);
  };
  const maxBetPerSpinBtn = async () => {
    UpdateTotalBet();
    return setBetPerSpin(maxBet);
  };
  // buy Credits
  let betPerCredit;
  const [totalProfit, setTotalProfit] = useState(0);
  let onCredit = 1;
  let x = null;
  let spinData;
  const GameInfo = z => {
    if (x !== null) return z;
    return x;
  };
  function getTransactionReceiptMined(txHash, provider) {
    const transactionReceiptAsync = function (res, rej) {
      provider.getTransactionReceipt(txHash, (err, rec) => {
        if (err) {
          rej(err);
        } else if (rec == null) {
          setTimeout(() => {
            transactionReceiptAsync(res, rej);
          }, 500);
        } else {
          res(rec);
        }
      });
    };
    return new Promise(transactionReceiptAsync);
  }
  function hexToOctal(hexString) {
    const hexAlphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const hexToBinaryDecoder = [
      '0000',
      '0001',
      '0010',
      '0011',
      '0100',
      '0101',
      '0110',
      '0111',
      '1000',
      '1001',
      '1010',
      '1011',
      '1100',
      '1101',
      '1110',
      '1111'
    ];
    const octalToBinaryDecoder = ['000', '001', '010', '011', '100', '101', '110', '111'];
    const octalAlphabet = ['0', '1', '2', '3', '4', '5', '6', '7'];

    let binaryString = '';
    let hexChar;
    let binaryQuad;

    for (let i = 0; i < hexString.length; i++) {
      hexChar = hexString.charAt(i);
      binaryQuad = hexToBinaryDecoder[hexAlphabet.indexOf(hexChar)];

      binaryString += binaryQuad;
    }

    let octalString = '';
    let binaryTriple;
    let octalChar;

    for (let j = 0; j < binaryString.length; j += 3) {
      binaryTriple = binaryString.slice(j, j + 3);
      octalChar = octalAlphabet[octalToBinaryDecoder.indexOf(binaryTriple)];

      octalString += octalChar;
    }

    return octalString;
  }
  const parseData = async data => {
    // there are 8 uint265's worth of data for slots
    // each uint256 starts with one zero, so delete that.
    let parsedData = data.slice(3, 66) + data.slice(67, 130) + data.slice(131, 193) + data.slice(194, 256);
    parsedData += data.slice(257, 318) + data.slice(319, 382) + data.slice(383, 445) + data.slice(446, 508);
    // now convert parsedData to octal, each dial is represented in octal notation.
    const parsedData_octal = hexToOctal(parsedData);
    spinData = parsedData_octal;
    setTotalProfit(0);
    GameInfo(null);
    // document.getElementById('#place-bets').hide();
    // document.getElementById('#address-balance-stats').hide();
    // document.getElementById('#spin-bets').show();
  };
  const buyCredits = async () => {
    betPerCredit = Number(betPerSpin);
    setTotalProfit(0);
    const l = betPerCredit * credits * 10e17;
    setTotalBet(l);
    const signer = window.ethersProvider.getSigner();
    const myAddress = await signer.getAddress();
    const tx = await slots
      .play(credits, {
        from: myAddress,
        value: totalBet.toString(),
        gasPrice: 10000000000
      })
      .then(async (err, res) => {
        if (err) {
          console.log('err while purchasing credits ---', err);
        } else {
          x = <div className='alert alert-info'>Transaction waiting to be mined...</div>;
          GameInfo(x);
          const txHash = res;
          const txReceipt = await getTransactionReceiptMined(txHash, window.ethersProvider);
          if (txReceipt.logs.length === 0) {
            x = (
              <div className='alert alert-danger'>
                UH OH! Transaction seemed to fail! Please try again, or check etherscan for more info...
              </div>
            );
            GameInfo(x);
          } else {
            x = (
              <div className='alert alert-success'>Transaction mined! Please wait, fetching provable randomness from our provider...</div>
            );
            GameInfo(x);
            // BuyCredits topic
            const resTopic = '0xc97a66505c1c68fd69c7d907e99a861eb4cf9a33460059bee6f6ec5a9e677931';
            // Ledger Proof Failed topic
            const failTopic = '0x2576aa524eff2f518901d6458ad267a59debacb7bf8700998dba20313f17dce6';
            // get oraclize query id from the logs...
            const oraclizeQueryId = txReceipt.logs[1].topics[1];
            // now watch for the oraclize callback with this queryId
            const watchForResult = await window.ethersProvider.send('eth_newFilter', [
              {
                topics: [resTopic, oraclizeQueryId],
                fromBlock: 'pending',
                to: Slots_ADDR
              }
            ]);
            // let watchForResult = web3.eth.filter({
            //   topics: [resTopic, oraclizeQueryId],
            //   fromBlock: 'pending',
            //   to: Slots_ADDR
            // });
            const watchForFail = await window.ethersProvider.send('eth_newFilter', [
              {
                topics: [failTopic, oraclizeQueryId],
                fromBlock: 'pending',
                to: Slots_ADDR
              }
            ]);
            // let watchForFail = web3.eth.filter({
            //   topics: [failTopic, oraclizeQueryId],
            //   fromBlock: 'pending',
            //   to: Slots_ADDR
            // });
            // const filter = {
            //   topics: [failTopic, oraclizeQueryId],
            //   fromBlock: 'pending',
            //   to: Slots_ADDR
            // };
            // let filterId = await window.ethersProvider.send('eth_newFilter', [filter]);
            watchForResult.watch((e, reso) => {
              if (e) {
                console.log('could not get res from oraclize', e);
              } else {
                watchForResult.stopWatching();
                watchForFail.stopWatching();
                const { data } = reso;
                parseData(data);
              }
            });
            watchForFail.watch((e, reso) => {
              if (e) {
                console.log('fail event triggered, but erred', e);
              } else {
                watchForResult.stopWatching();
                watchForFail.stopWatching();
                console.log(reso);
                x = (
                  <div className='alert alert-danger'>
                    We apologize, but the random number has not passed our test of provable randomness, so all your ether has been refunded.
                    Please feel free to play again, or read more about our instantly provable randomness generation{' '}
                    <a href='/Support'>here</a>. We strive to bring the best online gambling experience at EOSBet.IO, and occasionally the
                    random numbers generated do not pass our stringent testing.
                  </div>
                );
                GameInfo(x);
              }
            });
          }
        }
      });
    await tx.wait();
  };
  let dial1Type = null;
  let dial2Type = null;
  let dial3Type = null;
  function updateTicker(onRoll, totalRolls, currentProfit, cssColor) {
    // since the user won, animate the status bar in green
    document.getElementById('#spins-remaining').css(cssColor);
    document.getElementById('#total-profit').css(cssColor);

    document.getElementById('#spins-remaining').text((totalRolls - onRoll).toString());
    document.getElementById('#total-profit').text(currentProfit.toString().slice(0, 8));

    setTimeout(() => {
      document.getElementById('#spins-remaining').css({ color: 'white' });
      document.getElementById('#total-profit').css({ color: 'white' });
    }, 500);
  }
  const animatePayment = async () => {
    let winningsMultiple = 0;
    if (dial1Type === 2 && dial2Type === 1 && dial3Type === 0) winningsMultiple = 5000;
    else if (dial1Type === 0 && dial2Type === 0 && dial3Type === 0) winningsMultiple = 1777;
    else if (dial1Type === 1 && dial2Type === 1 && dial3Type === 1) winningsMultiple = 250;
    else if (dial1Type === 2 && dial2Type === 2 && dial3Type === 2) winningsMultiple = 250;
    else if (dial1Type === 5 && dial1Type === 4 && dial3Type === 3) winningsMultiple = 90;
    else if (dial1Type >= 0 && dial1Type <= 2 && dial2Type >= 0 && dial2Type <= 2 && dial3Type >= 0 && dial3Type <= 2)
      winningsMultiple = 70;
    else if (dial1Type === 3 && dial2Type === 3 && dial3Type === 3) winningsMultiple = 50;
    else if (dial1Type === 4 && dial2Type === 4 && dial3Type === 4) winningsMultiple = 25;
    else if (
      (dial1Type === 3 && ((dial2Type === 4 && dial3Type === 5) || (dial2Type === 5 && dial3Type === 4))) ||
      (dial1Type === 4 && ((dial2Type === 3 && dial3Type === 5) || (dial2Type === 5 && dial3Type === 3))) ||
      (dial1Type === 5 && dial2Type === 3 && dial3Type === 4)
    )
      winningsMultiple = 15;
    else if (dial1Type === 5 && dial2Type === 5 && dial3Type === 5) winningsMultiple = 10;
    else if (dial1Type >= 3 && dial1Type <= 5 && dial2Type >= 3 && dial2Type <= 5 && dial3Type >= 3 && dial3Type <= 5) winningsMultiple = 3;
    else if ((dial1Type === 0 || dial1Type === 3) && (dial2Type === 0 || dial2Type === 3) && (dial3Type === 0 || dial3Type === 3))
      winningsMultiple = 3;
    else if ((dial1Type === 1 || dial1Type === 4) && (dial2Type === 1 || dial2Type === 4) && (dial3Type === 1 || dial3Type === 4))
      winningsMultiple = 2;
    else if ((dial1Type === 2 || dial1Type === 5) && (dial2Type === 2 || dial2Type === 5) && (dial3Type === 2 || dial3Type === 5))
      winningsMultiple = 2;
    else if (dial1Type === 6 && dial2Type === 6 && dial3Type === 6) winningsMultiple = 1;

    const winningsEther = betPerCredit * winningsMultiple;

    // add to total profit
    setTotalProfit(totalProfit + winningsEther);
    if (winningsMultiple > 0) {
      document
        .getElementById('#score-pop')
        .text(`\u25CAdocument.getElementById{winningsEther.toString().slice(0, 9)}`)
        .show()
        .animate({ bottom: '70%', fontSize: '800%' }, 2000, () => {
          document.getElementById('#score-pop').fadeOut(1000, () => {
            // reset the css to go back down
            document.getElementById('#score-pop').css({ bottom: '10%', fontSize: '400%' });
          });
        });
    }

    // now update the ticker based on whether the user won or lost (red or green)
    // let cssColor = { color: 'green' };
    // winningsMultiple > 0 ? (cssColor = { color: 'green' }) : (cssColor = { color: 'red' });

    updateTicker(onCredit, credits, totalProfit, winningsMultiple > 0 ? { color: 'green' } : { color: 'red' });

    // roll has resolved, so increment the credits
    onCredit += 1;

    // possibly end game if out of credits
    if (onCredit > credits) {
      setTimeout(() => {
        document.getElementById('#spin-bets').hide();

        // bring back the stats and the buy box
        document.getElementById('#place-bets').show();
        document.getElementById('#address-balance-stats').show();

        document.getElementById('#spin-wheel').removeClass('disabled');
        document.getElementById('#spin-wheel').click(() => {
          spinWheel();
        });
      }, 5000);
    }
    // just immeiately re-enable the button for another sesh
    else {
      document.getElementById('#spin-wheel').removeClass('disabled');
      document.getElementById('#spin-wheel').click(() => {
        spinWheel();
      });
    }
  };
  const doWheelAnimation = async (dialId, numberChanges, dialLocation, searching) => {
    let animationSpeed;

    if (!searching) {
      // set animation speed high, wheel is still spinning fast.
      animationSpeed = 15;
    }
    // if the wheel is searching for a stop, then gradually slow and stop on the correct element
    else {
      animationSpeed = 15 + 1.5 * numberChanges;
    }
    // NOW DO THE ANIMATION...

    // clone and append this picture to the bottom of the wheel
    document.getElementById(`document.getElementById{dialId} div:first-child`).clone().appendTo(document.getElementById(dialId));

    // animate the wheel with simple picture shrinking animation with a variable speed to simulate the wheel spinning.
    document.getElementById(`document.getElementById{dialId} div:first-child`).animate({ height: '0' }, animationSpeed, 'linear', () => {
      // delete the shrunken (and now cloned) div
      document.getElementById(`document.getElementById{dialId} div:first-child`).remove();

      // Call animate wheel again...
      animateWheel(dialId, numberChanges, dialLocation, searching);
    });
  };
  const animateWheel = async (dialId, numberChanges, dialLocation, searching) => {
    let currentLocation;

    // dial 1 search & stop after 32 spins
    // dial 2 search & stop after 96 spins
    // dial 3 search & stop after 160 spins
    if (
      (dialId === '#dial-1' && (numberChanges > 0 || searching)) ||
      (dialId === '#dial-2' && (numberChanges > 64 || searching)) ||
      (dialId === '#dial-3' && (numberChanges > 128 || searching))
    ) {
      // get the current location from the id of the dial in the middle of the view (4th down)
      currentLocation = document.getElementById(`document.getElementById{dialId} div:nth-child(4)`)[0].id.slice(7);

      // start "search"... aka spin 64 more times and slowly come to a stop
      if (!searching && currentLocation === dialLocation) {
        doWheelAnimation(dialId, 1, dialLocation, true);
      }
      // done with search, display a payout if there is one & the third dial is done spinning!
      else if (searching && numberChanges === 64) {
        if (dialId === '#dial-3') {
          // if the third dial is done spinning (means they all are done spinning), animate the payment
          animatePayment();
        }
      }
      // keep going like normal!
      else {
        doWheelAnimation(dialId, numberChanges + 1, dialLocation, searching);
      }
    }
    // not searching, just keep spinning fast
    else {
      doWheelAnimation(dialId, numberChanges + 1, dialLocation, false);
    }
  };
  const spinWheel = async () => {
    dial1Type = parseInt(spinData[0], 10);
    dial2Type = parseInt(spinData[1], 10);
    dial3Type = parseInt(spinData[2], 10);
    spinData = spinData.slice(3);
    const dial1Location = String(dial1Layout[dial1Type][Math.floor(Math.random() * dial1Layout[dial1Type].length)]);
    const dial2Location = String(dial2Layout[dial2Type][Math.floor(Math.random() * dial2Layout[dial2Type].length)]);
    const dial3Location = String(dial3Layout[dial3Type][Math.floor(Math.random() * dial3Layout[dial3Type].length)]);

    // spin through all combinations, and then blindly search for the previously determined dial position
    animateWheel('#dial-1', 0, dial1Location, false);
    animateWheel('#dial-2', 0, dial2Location, false);
    animateWheel('#dial-3', 0, dial3Location, false);
  };
  useEffect(() => {
    getContractInfo();
    return () => {
      mountedRef.current = false;
    };
    // eslint-disable-next-line
  }, []);
  if (!ethereum) return null;
  return {
    balance,
    aWager,
    gamePlayed,
    maxBet,
    minBetSpin,
    minBetTx,
    gamePaused,
    betPerSpin,
    numSpins,
    handleChange,
    minBetPerSpinBtn,
    halfBetPerSpinBtn,
    doubleBetPerSpinBtn,
    maxBetPerSpinBtn,
    buyCredits,
    GameInfo,
    totalProfit,
    credits,
    onCredit,
    spinData,
    parseData,
    spinWheel,
    totalBet
  };
};
