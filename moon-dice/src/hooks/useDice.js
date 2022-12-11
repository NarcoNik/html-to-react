import { dice, Dice_ADDR, ethereum } from '../helpers/connector';

const { utils } = require('ethers');
const { useEffect, useRef, useState } = require('react');

export const useDice = () => {
  const mountedRef = useRef(true);
  const [balance, setBalance] = useState(0);
  const [aWager, setAWager] = useState(0);
  const [gamePlayed, setGamePlayed] = useState(0);
  const [maxWin, setMaxBet] = useState(0);
  const [minBetRoll, setMinBetSpin] = useState(0);
  const [minBetTx, setMinBetTx] = useState(0);
  const [houseEdge, setHouseEdge] = useState(10);
  const [gamePaused, setGamePaused] = useState(false);
  const getContractInfo = async () => {
    const signer = window.ethersProvider.getSigner();
    const myAddress = await signer.getAddress();
    const a = await window.ethersProvider.getBalance(myAddress);
    setBalance(utils.formatEther(a));
    const b = await dice.AMOUNTWAGERED();
    setAWager(utils.formatEther(b));
    const c = await dice.GAMESPLAYED();
    setGamePlayed(c);
    const d = await dice.getMaxWin();
    setMaxBet(utils.formatEther(d));
    const e = await dice.MINBET_perROLL();
    setMinBetSpin(utils.formatEther(e));
    const f = await dice.MINBET_perTX();
    setMinBetTx(utils.formatEther(f));
    const g = await dice.HOUSEEDGE_inTHOUSANDTHPERCENTS();
    setHouseEdge(utils.formatEther(g));
    const j = await dice.GAMEPAUSED();
    setGamePaused(j);
  };
  const rollCountValues = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 125, 150, 175, 200, 250, 300, 350,
    400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1024
  ];
  // func for spins
  const [betPerRoll, setBetPerRoll] = useState('0.003');
  const [betSize, setBetSize] = useState(0);
  const [maxRolls, setMaxRolls] = useState(9);
  const [rollUnder, setNumRollsUnder] = useState(50);
  const [numGRolls, setNumGRolls] = useState(10);
  const [numMaxGRolls, setNumMaxGRolls] = useState(10);
  const [profit, setProfit] = useState(10);
  const [totalBet, setTotalBet] = useState(10);
  const calculateMaxBet = () => {
    // stay on the safe side so rolls don't fail...
    const profitMult = (100 / (rollUnder - 1)).toString();
    const maxBet = (maxWin / Number(profitMult)) * 0.98;
    return maxBet;
  };
  const UpdateTotalBet = async () => {
    const q = Number(betPerRoll) * Number(numGRolls);
    setTotalBet(q);
  };
  const handleChange = e => {
    const numbers = e.target.value;
    setMaxRolls(numbers);
    const numberRolls = rollCountValues[numbers];
    updateGuaranteedRollsSlider(numberRolls);
    UpdateTotalBet();
  };
  const handleChangeR = e => {
    const numbers = e.target.value;
    setNumRollsUnder(numbers);
    const maxBet = calculateMaxBet(numbers);
    if (betPerRoll > maxBet) setBetPerRoll(maxBet);
    insertProfitPerRoll(numbers);
    updateGuaranteedRollsSlider_withFixedRolls();
  };
  const handleChangeGR = e => {
    const numbers = e.target.value;
    setNumGRolls(numbers);
    UpdateTotalBet(numbers);
  };

  const maxWinPerSpinBtn = async () => {
    const maxBet = calculateMaxBet(rollUnder);
    updateGuaranteedRollsSlider_withFixedRolls();
    UpdateTotalBet();
    return setBetPerRoll(maxBet);
  };
  const doubleBetPerSpinBtn = async () => {
    const maxBet = calculateMaxBet(rollUnder);
    const doubleBet = betPerRoll * 2;
    updateGuaranteedRollsSlider_withFixedRolls();
    UpdateTotalBet();
    if (maxBet < doubleBet) return setBetPerRoll(maxBet);
    return setBetPerRoll(doubleBet);
  };
  const halfBetPerSpinBtn = async () => {
    const halfBet = betPerRoll / 2;
    if (minBetRoll > halfBet) return setBetPerRoll(minBetRoll);
    updateGuaranteedRollsSlider_withFixedRolls();
    UpdateTotalBet();
    return setBetPerRoll(halfBet);
  };
  const minBetPerSpinBtn = async () => {
    updateGuaranteedRollsSlider_withFixedRolls();
    UpdateTotalBet();
    return setBetPerRoll(minBetRoll);
  };
  const updateGuaranteedRollsSlider = numberRolls => {
    if (!Number.isNaN(betPerRoll) && betPerRoll !== 0) {
      const maxPossibleRolls = Math.floor(balance / betPerRoll);
      if (maxPossibleRolls < numberRolls) {
        // change the max value to the max rolls possible
        setNumMaxGRolls(maxPossibleRolls);
        if (numGRolls > maxPossibleRolls) setNumGRolls(maxPossibleRolls);
      } else {
        // change the max value to the number of rolls, cause the bettor has enough ether to get all the rolls
        setNumMaxGRolls(numberRolls);
        if (numGRolls > numberRolls) setNumGRolls(numberRolls);
      }
      setNumGRolls(numGRolls);
    }
  };
  const updateGuaranteedRollsSlider_withFixedRolls = async () => {
    const numberRolls = rollCountValues[maxRolls];
    updateGuaranteedRollsSlider(numberRolls);
  };
  const insertProfitPerRoll = rollUnderValue => {
    const x = (100 / (rollUnderValue - 1)) * ((100 - houseEdge) / 100);
    // let profit = calculateProfit(betPerRoll, rollUnderValue);
    setProfit(x.toString().slice(0, 4));
  };
  // buyRolls
  const [rollData, setRollData] = useState(null);
  const [currentProfit, setCurProfit] = useState(0);
  const [maxCurRolls, setMaxCurRolls] = useState('0/1');
  const [luckyNum, setLuckyNum] = useState('0');
  const [yourNumber, setYourNumber] = useState('0');
  const getTransactionReceiptMined = (txHash, provider) => {
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
  };
  const hexToBinary = hexString => {
    const hexAlphabet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const binaryAlphabet = [
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

    let binaryString = '';
    let hexChar;
    let binaryChar;
    for (let i = 0; i < hexString.length; i++) {
      hexChar = hexString.charAt(i);
      binaryChar = binaryAlphabet[hexAlphabet.indexOf(hexChar)];

      binaryString += binaryChar;
    }

    return binaryString;
  };
  const parseRolls = (data, totalRolls) => {
    // // NOTE: fade out roll selection screen, fade in the roll screen
    // $('#game-info').html('');
    // $('#roll-bets').show();

    // // TODO: fade in and then fade out, instead of harsh hide <-> show
    // $('#place-bets').hide();
    // $('#address-balance-stats').hide();

    // set values initially...
    setBetSize(betPerRoll);
    setCurProfit(totalBet);
    setMaxCurRolls(`'0' + ${totalRolls.toString()}`);
    setLuckyNum(rollUnder.toString());
    // get the amount of rolls that actually happened from the logs
    const rolls = parseInt(data.slice(2, 66), 16);
    // get the roll data (in a hex string, convert to binary)..
    // then we need to slice this string again, because after the rolls are done, it will all be 00000000
    const i = hexToBinary(data.slice(66, 322)).slice(0, rolls);
    setRollData(i);
  };
  let p = null;
  const GameInfo = z => {
    if (p !== null) return z;
    return p;
  };
  let onRoll = null;
  const buyRolls = async () => {
    const signer = window.ethersProvider.getSigner();
    const myAddress = await signer.getAddress();
    const totalRolls = rollCountValues[maxRolls];
    onRoll = 0;
    const tx = await dice.play(
      betPerRoll.toString(),
      totalRolls.toString(),
      rollUnder.toString(),
      { from: myAddress, value: totalBet.toString(), gasPrice: 10000000000 },
      async (err, res) => {
        if (err) {
          console.log('err while purchasing rolls ---', err);
        } else {
          p = <div className='alert alert-info'>Transaction waiting to be mined...</div>;
          GameInfo(p);
          const txHash = res;
          const txReceipt = await getTransactionReceiptMined(txHash, window.ethersProvider);
          if (txReceipt.logs.length === 0) {
            p = (
              <div className='alert alert-danger'>
                UH OH! Transaction seemed to fail! Please try again, or check etherscan for more info...
              </div>
            );
            GameInfo(p);
          } else {
            p = (
              <div className='alert alert-success'>Transaction mined! Please wait, fetching provable randomness from our provider...</div>
            );
            GameInfo(p);
            const resTopic = '0xb9d44d01b9e36e98413c2ed40b61f560e40595343f3cc734c988da4db5dd6563';
            const ledgerProofFailTopic = '0x2576aa524eff2f518901d6458ad267a59debacb7bf8700998dba20313f17dce6';
            const oraclizeQueryId = txReceipt.logs[1].topics[1];
            const watchForResult = await window.ethersProvider.send('eth_newFilter', [
              {
                topics: [resTopic, oraclizeQueryId],
                fromBlock: 'pending',
                to: Dice_ADDR
              }
            ]);
            // let watchForResult = web3.eth.filter({
            //   topics: [resTopic, oraclizeQueryId],
            //   fromBlock: 'pending',
            //   to: Dice_ADDR
            // });
            const watchForFail = await window.ethersProvider.send('eth_newFilter', [
              {
                topics: [ledgerProofFailTopic, oraclizeQueryId],
                fromBlock: 'pending',
                to: Dice_ADDR
              }
            ]);
            // const filter = {
            //   topics: [failTopic, oraclizeQueryId],
            //   fromBlock: 'pending',
            //   to: Slots_ADDR
            // };
            // const filterId = await window.ethersProvider.send('eth_newFilter', [filter]);
            // let watchForFail = web3.eth.filter({
            //   topics: [ledgerProofFailTopic, oraclizeQueryId],
            //   fromBlock: 'pending',
            //   to: Dice_ADDR
            // });
            watchForResult.watch((e, reso) => {
              if (e) {
                console.log('err while fetching res event', e);
              } else {
                watchForResult.stopWatching();
                watchForFail.stopWatching();
                const { data } = reso;
                parseRolls(data, totalRolls);
              }
            });
            watchForFail.watch((e, reso) => {
              if (e) {
                console.log('ledger proof failed, but err', e);
              } else {
                watchForResult.stopWatching();
                watchForFail.stopWatching();
                console.log(reso);
                p = (
                  <div className='alert alert-danger'>
                    We apologize, but the random number has not passed our test of provable randomness, so all your ether has been refunded.
                    Please feel free to play again, or read more about our instantly provable randomness generation{' '}
                    <a href='/Support'>here</a>. We strive to bring the best online gambling experience at EOSBet.IO, and occasionally the
                    random numbers generated do not pass our stringent testing.
                  </div>
                );
                GameInfo(p);
              }
            });
          }
        }
      }
    );
    await tx.wait();
  };
  // rollDice
  function updateTicker(k, l, u, cssColor) {
    // increment the roll number color: white -> cssColor -> white
    console.log(cssColor);
    // $('.in-game-stats').css(cssColor);
    setMaxCurRolls(`${k.toString()}/${l.toString()}`);
    setCurProfit(u);
    // setTimeout(() => {
    //   $('.in-game-stats').css({ color: 'white' });
    // }, 500);
  }
  function rollingDice(s, h, j, k, l, y, u) {
    // // disable the ROLL button
    // $('#roll-dice').addClass('disabled');
    // $('#roll-dice').off('click');
    let thisRoll;
    // // break if the rolls are completed.
    // if (k > l) {
    //   $('#roll-dice').removeClass('disabled');
    //   $('#roll-dice').click(() => {
    //     EOSBetDice.rollDice();
    //   });
    //   return;
    // }
    // do a simple animation
    let interval = 10;
    const rollAnimation = function () {
      // if the interval is small, then show a random number and increment the interval, then set another timeout with new interval
      if (interval < 400) {
        interval *= 1.15;
        const r = Math.floor(Math.random() * 100) + 1;
        setYourNumber(r);
        setTimeout(rollAnimation, interval);
      }
      // if the interval is large, then end the animation.
      // if the bettor won, then choose a random number below the rollUnder, and update the UI
      // if the bettor lost, then choose a random number above the rollUnder, ...
      else {
        let cssColor;
        if (!s) {
          thisRoll = Math.floor(Math.random() * (100 - h) + (h + 1));
          setYourNumber(thisRoll);
          cssColor = { color: '#ff1919' };
        } else {
          thisRoll = Math.floor(Math.random() * (h - 1) + 1);
          setYourNumber(thisRoll);
          cssColor = { color: '#09d602' };
        }
        // update ticker and re-enable button
        setTimeout(() => {
          updateTicker(k, l, u, cssColor);
          // if (k < l) $('#roll-dice').removeClass('disabled');
          // $('#roll-dice').click(() => {
          //   EOSBetDice.rollDice();
          // });
        }, 500);
      }
    };
    console.log(j);
    console.log(y);
    // start the timeout function
    setTimeout(rollAnimation, interval);
  }
  const rollDice = () => {
    const totalRolls = rollCountValues[maxRolls];
    const win = rollData.charAt(onRoll) === '1';
    const houseEdgeMult = (100 - houseEdge) / 100;
    const profitMult = 100 / (rollUnder - 1);

    const winSize = betPerRoll * profitMult * houseEdgeMult - betPerRoll;

    // increment or decrement current profit based on win or not
    const plus = currentProfit + winSize;
    const min = currentProfit - betPerRoll;
    if (win) setCurProfit(plus);
    else setCurProfit(min);
    onRoll += 1;
    rollingDice(win, rollUnder, winSize, onRoll, totalRolls, betPerRoll, currentProfit);
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
    rollCountValues,
    balance,
    aWager,
    gamePlayed,
    maxWin,
    minBetRoll,
    minBetTx,
    gamePaused,
    betPerRoll,
    betSize,
    maxRolls,
    handleChange,
    rollUnder,
    handleChangeR,
    numGRolls,
    numMaxGRolls,
    handleChangeGR,
    minBetPerSpinBtn,
    halfBetPerSpinBtn,
    doubleBetPerSpinBtn,
    maxWinPerSpinBtn,
    profit,
    totalBet,
    currentProfit,
    maxCurRolls,
    GameInfo,
    buyRolls,
    rollDice,
    luckyNum,
    yourNumber,
    rollData
  };
};
