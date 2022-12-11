import { Slider } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useRef, useState } from 'react';

import { getEllipsisTxt, n5 } from '../helpers/formatters';
import { useSlots } from '../hooks/useSlots';
import { Blank_slot, Bronze_EOS, Bronze_Planet, Dial_Frame, Gold_EOS, Gold_Planet, Paytable_slot, Silver_EOS, Silver_Planet } from '../img';

const Slots = () => {
  const mountedRef = useRef(true);
  const { account } = useWeb3React();
  const [act, setAct] = useState(false);
  const {
    balance,
    aWager,
    gamePlayed,
    maxBet,
    minBetSpin,
    minBetTx,
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
    spinWheel,
    totalBet
  } = useSlots();
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
      <section id='slots-splash'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7 col-lg-8'>
              <div className='game-message'>Welcome To Slots</div>
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
                  <span className='stat-num'>{n5.format(maxBet)}</span>
                  &ensp;Max Bet
                </div>
                <br />
                <div className='stat'>
                  <span className='stat-num'>{n5.format(minBetSpin)}</span>
                  &ensp;Min Bet Per Spin
                </div>
                <br />
                <div className='stat'>
                  <span className='stat-num'>{n5.format(minBetTx)}</span>
                  &ensp;Min Bet Per Transaction
                </div>
              </div>
              <div className='how-to-play-btn'>
                <button type='button' className='btn cta-btn' onClick={() => open()}>
                  Paytable
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
                How to play Slots
                <button type='button' className='close' onClick={() => open()}>
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                View contract on
                <a href='https://etherscan.io/address/0x4a3e0c60f7fa67e8b65c401ddbbf7c17fea5fe40#code' target='_blank' rel='noreferrer'>
                  Etherscan
                </a>
                ! <br />
                <br />
                <img alt='' className='img-fluid' src={Paytable_slot} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <section id='slots'>
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
            <div className='col-lg-6 col-md-8 col-sm-10 place-bets-slots' /* id="place-bets" */>
              <GameInfo />
              <div className='buy-box-text'>Number Of Spins</div>
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
                  max={224}
                  aria-label='Default'
                  onChange={e => handleChange(e)}
                  value={numSpins}
                  style={{ width: '70%' }}
                  valueLabelDisplay='auto'
                />
                <span className='game-slider-text'>{numSpins}</span>
              </div>
              <br />
              <div className='buy-box-text'>Bet Per Spin</div>

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
                <input type='text' className='form-control action-input-md' value={betPerSpin} readOnly={true} />
                &nbsp;
                <div className='input-group-append dual-btn-group-rt'>
                  <button className='btn cta-btn action-btn-md' onClick={() => doubleBetPerSpinBtn()} type='button'>
                    &nbsp;2x&nbsp;
                  </button>
                  <button className='btn cta-btn action-btn-rt' onClick={() => maxBetPerSpinBtn()} type='button'>
                    <b>&uarr;&nbsp;</b>
                    {n5.format(maxBet)}
                  </button>
                </div>
              </div>
              <br />
              <div className='row'>
                <div className='col-9'>
                  <div className='buy-box-text'>Total Bet:</div>
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
                  <div className='buy-box-text'>Min Total Bet:</div>
                </div>
                <div className='col-3'>
                  <div className='buy-box-text'>{n5.format(minBetTx)}</div>
                </div>
              </div>
              <button type='button' className='btn cta-btn' onClick={() => buyCredits()} style={{ height: '50px' }}>
                Buy Credits
              </button>
            </div>

            <div className='col-9' /*  id="spin-bets" style={{display: "none"}} */>
              <br />
              <h5>
                <div className='row' style={{ textAlign: 'center' }}>
                  <div className='col-md-6 buy-box-text'>
                    Spins Remaining:&nbsp;<span>{n5.format(credits)}</span>
                  </div>
                  <div className='col-md-6 buy-box-text'>
                    Total Profit:&nbsp;<span>{n5.format(totalProfit)}</span>
                  </div>
                </div>
              </h5>
              <div id='slot-machine' className='row justify-content-center'>
                <div className='dial col'>
                  <img alt='' className='dial-background' src={Dial_Frame} height='100%' width='100%' />

                  <div id='dial-1' className='dial-container'>
                    <div id='dial-1-12'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-13'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-14'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-15'>
                      <img alt='' className='dial-slot' src={Gold_EOS} />
                    </div>
                    <div id='dial-1-16'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-17'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-18'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-19'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-20'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-21'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-1-22'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-1-23'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-24'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-25'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-26'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-27'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-1-28'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-29'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-30'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-1-31'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-32'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-33'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-34'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-35'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-1-36'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-37'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-1-38'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-39'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-40'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-41'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-1-42'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-43'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-1-44'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-45'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-1-46'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-47'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-48'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-49'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-1-50'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-51'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-1-52'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-53'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-54'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-1-55'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-56'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-57'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-58'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-59'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-60'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-61'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-62'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-63'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-64'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>

                    <div id='dial-1-1'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-2'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-3'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-1-4'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-5'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-6'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-1-7'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-8'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-9'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-1-10'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-1-11'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                  </div>
                </div>

                <div className='dial col'>
                  <img alt='' className='dial-background' src={Dial_Frame} height='100%' width='100%' />

                  <div id='dial-2' className='dial-container'>
                    <div id='dial-2-12'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-13'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-14'>
                      <img alt='' className='dial-slot' src={Gold_EOS} />
                    </div>
                    <div id='dial-2-15'>
                      <img alt='' className='dial-slot' src={Gold_EOS} />
                    </div>
                    <div id='dial-2-16'>
                      <img alt='' className='dial-slot' src={Gold_EOS} />
                    </div>
                    <div id='dial-2-17'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-18'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-19'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-20'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-21'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-22'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-2-23'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-2-24'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-25'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-26'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-27'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-2-28'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-2-29'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-30'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-31'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-32'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-33'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-34'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-2-35'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-36'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-2-37'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-2-38'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-39'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-40'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-41'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-42'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-2-43'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-44'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-2-45'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-46'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-2-47'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-48'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-49'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-50'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-51'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-52'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-2-53'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-54'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-2-55'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-56'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-2-57'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-2-58'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-2-59'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-2-60'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-61'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-2-62'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-63'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-64'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>

                    <div id='dial-2-1'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-2-2'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-3'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-4'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-5'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-2-6'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-7'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-2-8'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-2-9'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-10'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-2-11'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                  </div>
                </div>
                <div className='dial col'>
                  <img alt='' className='dial-background' src={Dial_Frame} height='100%' width='100%' />

                  <div id='dial-3' className='dial-container'>
                    <div id='dial-3-14'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-15'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-16'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-17'>
                      <img alt='' className='dial-slot' src={Gold_EOS} />
                    </div>
                    <div id='dial-3-18'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-19'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-20'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-21'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-22'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-3-23'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-3-24'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-3-25'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-3-26'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-27'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-28'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-3-29'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-3-30'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-31'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-32'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-3-33'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-34'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-35'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-36'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-37'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-3-38'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-3-39'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-40'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-3-41'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-3-42'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-3-43'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-3-44'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-3-45'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-3-46'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-47'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-3-48'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-49'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-3-50'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-51'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-3-52'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-53'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-54'>
                      <img alt='' className='dial-slot' src={Silver_EOS} />
                    </div>
                    <div id='dial-3-55'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-56'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-57'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-3-58'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-59'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-3-60'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-61'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-3-62'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-3-63'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-64'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>

                    <div id='dial-3-1'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-3-2'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-3-3'>
                      <img alt='' className='dial-slot' src={Bronze_Planet} />
                    </div>
                    <div id='dial-3-4'>
                      <img alt='' className='dial-slot' src={Bronze_EOS} />
                    </div>
                    <div id='dial-3-5'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-6'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-7'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-3-8'>
                      <img alt='' className='dial-slot' src={Silver_Planet} />
                    </div>
                    <div id='dial-3-9'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-10'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-11'>
                      <img alt='' className='dial-slot' src={Gold_Planet} />
                    </div>
                    <div id='dial-3-12'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                    <div id='dial-3-13'>
                      <img alt='' className='dial-slot' src={Blank_slot} />
                    </div>
                  </div>
                </div>
                <span id='score-pop' className='score-pop'></span>
              </div>
              <br />
              <div className='justify-content-center'>
                <button className='btn cta-btn play-btn' onClick={() => spinWheel()}>
                  Spin
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Slots;
