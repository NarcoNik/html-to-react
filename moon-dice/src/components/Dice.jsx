import { Slider } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useRef, useState } from 'react';

import { getEllipsisTxt, n5 } from '../helpers/formatters';
import { useDice } from '../hooks/useDice';

const Dice = () => {
  const mountedRef = useRef(true);
  const { account } = useWeb3React();
  const [act, setAct] = useState(false);
  const {
    rollCountValues,
    balance,
    aWager,
    gamePlayed,
    maxWin,
    minBetRoll,
    minBetTx,
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
    yourNumber
  } = useDice();
  const open = async () => setAct(!act);
  useEffect(
    () => () => {
      mountedRef.current = false;
    },
    // eslint-disable-next-line
    []
  );
  return (
    <>
      <section id='dice-splash'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-lg-8'>
              <div className='game-message'>Welcome To Dice</div>
            </div>
            <div className='col-md-5 col-lg-4'>
              <div className='d-none d-md-block feature-element'>
                <div className='stat'>
                  <span className='stat-num'>{n5.format(aWager)}</span>
                  &ensp;Ether Wagered
                </div>
                <br />
                <div className='stat'>
                  <span className='stat-num'>{n5.format(gamePlayed)}</span>
                  &ensp;Games Played
                </div>
                <br />
                <div className='stat'>
                  <span className='stat-num'>{n5.format(maxWin)}</span>
                  &ensp;Max Win
                </div>
                <br />
                <div className='stat'>
                  <span className='stat-num'>{n5.format(minBetRoll)}</span>
                  &ensp;Min Bet
                </div>
                <br />
              </div>
              <div className='how-to-play-btn'>
                <button type='button' className='btn cta-btn' onClick={() => open()}>
                  How To Play
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {act ? (
        <div className='faq-slots' role='dialog'>
          <div style={{ maxWidth: '768px', width: '100%' }}>
            <div
              className='modal-content'
              style={{
                opacity: '0.95',
                backgroundColor: 'grey',
                color: 'white'
              }}
            >
              <div className='modal-header heading-message' style={{ textTransform: 'uppercase' }}>
                How to play Dice
                <button type='button' className='close' onClick={() => open()}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                View contract on
                <a href='https://etherscan.io/address/0xb533ff572f5e33d04d02b149e7dcfe980e424c63#code' target='_blank' rel='noreferrer'>
                  Etherscan
                </a>
                ! <br />
                <br />
                Dice is the most popular cryptocurrency betting game in the world because it’s simple, fun, and allows you to adjust the
                risk and reward to your liking. You are betting on the outcome of a 100-sided dice; if you roll under the number you choose
                then you win!
                <br />
                <br />
                Playing Dice is easy!
                <br />
                <br />
                <b>1)</b> Make sure you’re using
                <a href='https://metamask.io/'>MetaMask</a> so you can connect to the Ethereum Network. For more information on how to do
                this visit our <a href='/Support'>FAQ page</a>
                .
                <br />
                <br />
                <b>2)</b> Enter game information:
                <br />
                <i>Maximum Rolls</i>: The highest number of rolls you want to play in one session. If you reach this number your session
                will end. <br />
                <br />
                <i>Minimum Rolls</i>: The lowest number of rolls you would like to be guaranteed. You may play more rolls if you win (up to
                the maximum), but you will never play less than this number. (“ETH to send” is calculated as Bet Size x Minimum Rolls).{' '}
                <br />
                <br />
                <i>Bet per Roll</i>: The amount of ETH you would like to wager on each roll. <br />
                <br />
                <i>Roll Under</i>: The number you must roll lower than in order to win. This determines your odds since your chance of
                winning is “Roll Under - 1”. (E.g. choosing 51 gives you a 50% chance of winning). <br />
                <br />
                The interface then automatically calculates your profit per roll and the amount of ETH you’ll send to the contract.
                <br />
                <br />
                <b>3)</b> Hit “Buy Rolls”, and wait for a MetaMask verification window to popup. <br />
                <br />
                <b>4)</b> Wait for your transaction to be confirmed by the network and then roll away! <br />
                <br />
                <b>House Edge: 0.8%</b>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <section id='dice'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div
              className='col-lg-6 col-md-8 col-sm-10 feature-element'
              style={{
                top: '30px',
                fontSize: '11px',
                textAlign: 'right',
                right: '10px'
              }}
            >
              <div className='stat' style={{ paddingBottom: '10px' }}>
                Your Address:&ensp;
                <span>{getEllipsisTxt(account)}</span>
              </div>
              <div className='stat'>
                Your Balance:&ensp;<span>{n5.format(balance)}</span>
                &ensp;ether
              </div>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-6 col-md-8 col-sm-10 place-bets-dice' /* id='place-bets' */>
              <GameInfo />
              <div className='buy-box-text'>Maximum Rolls</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignContent: 'center',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Slider
                  defaultValue={9}
                  min={1}
                  max={rollCountValues.length - 1}
                  aria-label='Default'
                  onChange={e => handleChange(e)}
                  value={maxRolls}
                  style={{ width: '70%' }}
                  valueLabelDisplay='auto'
                />
                <span className='game-slider-text'>{maxRolls}</span>
              </div>
              <br />
              <div className='buy-box-text'>Bet Per Roll</div>
              <div className='input-group'>
                <div className='input-group-prepend dual-btn-group-lt'>
                  <button className='btn cta-btn action-btn-lt' onClick={() => minBetPerSpinBtn()} type='button'>
                    <b>&nbsp;&darr;</b>
                  </button>
                  <button className='btn cta-btn action-btn-md' onClick={() => halfBetPerSpinBtn()} type='button'>
                    1/2x
                  </button>
                </div>
                &nbsp;
                <input type='text' className='form-control action-input-md' value={betPerRoll} readOnly={true} />
                &nbsp;
                <div className='input-group-append dual-btn-group-rt'>
                  <button className='btn cta-btn action-btn-md' onClick={() => doubleBetPerSpinBtn()} type='button'>
                    &nbsp;2x&nbsp;
                  </button>
                  <button className='btn cta-btn action-btn-rt' onClick={() => maxWinPerSpinBtn()} type='button'>
                    <b>&uarr;&nbsp;</b>
                    {n5.format(maxWin)}
                  </button>
                </div>
              </div>
              <br />
              <div className='buy-box-text'>Roll Under</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignContent: 'center',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Slider
                  defaultValue={50}
                  min={2}
                  max={97}
                  aria-label='Default'
                  onChange={e => handleChangeR(e)}
                  value={rollUnder}
                  style={{ width: '70%' }}
                  valueLabelDisplay='auto'
                />
                <span className='game-slider-text'>{rollUnder}</span>
              </div>
              <br />
              <div className='buy-box-text'>Minimum Rolls</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignContent: 'center',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Slider
                  defaultValue={10}
                  min={1}
                  max={numMaxGRolls}
                  aria-label='Default'
                  onChange={e => handleChangeGR(e)}
                  value={numGRolls}
                  style={{ width: '70%' }}
                  valueLabelDisplay='auto'
                />
                <span className='game-slider-text'>{numGRolls}</span>
              </div>
              <br />
              <div className='row'>
                <div className='col-9'>
                  <div className='buy-box-text'>Profit Per Roll</div>
                </div>
                <div className='col-3'>
                  <span className='buy-box-text'>{profit}x</span>
                </div>
              </div>

              <div className='row'>
                <div className='col-9'>
                  <div className='buy-box-text'>Total Bet</div>
                </div>
                <div className='col-3'>
                  {totalBet < minBetTx ? (
                    <span className='buy-box-text' style={{ color: 'red !important' }}>
                      {n5.format(totalBet)}
                    </span>
                  ) : (
                    <span className='buy-box-text'>{n5.format(totalBet)}</span>
                  )}
                </div>
              </div>

              <div className='row'>
                <div className='col-9'>
                  <div className='buy-box-text'>Min Total Bet</div>
                </div>
                <div className='col-3'>
                  <span className='buy-box-text'>{n5.format(minBetTx)}</span>
                </div>
              </div>

              <button type='button' className='btn cta-btn' onClick={() => buyRolls()} style={{ height: '50px' }}>
                Buy Rolls
              </button>
            </div>

            <div className='col-sm-9 roll-bets-dice' /* id='roll-bets' style={{ display: 'none' }} */>
              <br />
              <div className='row' style={{ textAlign: 'center' }}>
                <div className='col-lg-4 buy-box-text'>
                  BET SIZE:&nbsp;
                  <span className='in-game-stats'>{n5.format(betSize)}</span>
                </div>
                <div className='col-lg-4 buy-box-text'>
                  TOTAL PROFIT:&nbsp;
                  <span className='in-game-stats'>{n5.format(currentProfit)}</span>
                </div>
                <div className='col-lg-4 buy-box-text'>
                  MAX ROLLS:&nbsp;
                  <span className='in-game-stats'>{maxCurRolls}</span>
                </div>
              </div>
              <div>{luckyNum}</div>
              <div>{yourNumber}</div>
              <br />
              <button className='btn cta-btn play-btn' onClick={() => rollDice()}>
                Roll
              </button>
              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Dice;
