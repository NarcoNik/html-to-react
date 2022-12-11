import React from 'react';

import { n6 } from '../helpers/formatters';
import { useBankroll } from '../hooks/useBankroll';
import { Feature_Cashout, Feature_Grow, Feature_Invest, Feature_Trustless, Moneyman } from '../img';

const Bankroll = () => {
  const {
    maxBContr,
    curTotalB,
    balanceOf,
    curUTValue,
    youContr,
    deposit,
    depositAmt,
    handleChange,
    DepositInfo,
    withdrawAmt,
    handleChangeW,
    WithdrawInfo,
    withdraw
  } = useBankroll();
  return (
    <>
      <section id='bankroll-splash'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 splash-logo'>
              <div className='top-padding'></div>
            </div>
          </div>
          <div className='row'>
            <div className='row cta-message cta-subheader'>
              <div className='col-10 offset-1'>
                Invest ETH in our Proof-of-Concept bankroll. This ETH will be used as capital to back our dice and slots games. You may cash
                out at any time and receive your ETH back, plus any casino profits!
              </div>
            </div>
          </div>
          <div className='row cta'>
            <div className='col-md-6 col-sm-10 offset-md-3 offset-sm-1'>
              <a href='/Bankroll#bankroll-actions'>
                <button type='button' className='btn cta-btn main-btn'>
                  Invest Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      <DepositInfo />
      <section id='bankroll-features'>
        <div className='container'>
          <div className='row heading-message'>
            <div className='col-12'>Trustlessly Receive Dividends on your ETH</div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <img alt='' className='feature-img-2x' src={Feature_Invest} />
              <div className='feature-title'>Invest</div>
              <div className='feature-element'>Anyone may contribute ETH to our bankroll at any time.</div>
              <div className='feature-element'>Investors may cash out ETH at any time, after a brief staking period.</div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img alt='' className='feature-img-2x' src={Feature_Grow} />
              <div className='feature-title'>Get Dividends</div>
              <div className='feature-element'>This will give you 80% of the profits of the casino.</div>
              <div className='feature-element'>A bigger bankroll means bigger bets for all players!</div>
              <div className='feature-element'>Your dividends will automatically reinvest into the bankroll. Compound interest!</div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img alt='' className='feature-img-2x' src={Feature_Cashout} />
              <div className='feature-title'>Cashout</div>
              <div className='feature-element'>
                Due to the constant (but small) house edge, a person that lends us their ETH long enough is{' '}
                <b>highly statistically likely</b> to profit.
              </div>
              <div className='feature-element fine-print'>
                <i>Note, that there is ZERO guarantee of profit, we are merely stating a probabilistic fact.</i>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <img alt='' className='feature-img-2x' src={Feature_Trustless} />
              <div className='feature-title'>Trustless &amp; Safe</div>
              <div className='feature-element'>These deposits are completely trustless, we cannot touch your ETH!</div>
              <div className='feature-element'>Our smart contracts have been audited by multiple 3rd party professionals.</div>
              <div className='feature-element fine-print'>
                <i>
                  Note, that there is ALWAYS a risk while investing, and lucky gamblers &amp; faulty smart contracts are a few of the risks
                  you take while investing in our bankroll.
                </i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='bankroll-actions' style={{ backgroundColor: 'black', paddingBottom: '20px' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='heading-message' style={{ textAlign: 'center' }}>
                Deposit
              </div>
              <div className='feature-element' style={{ fontSize: '18px' }}>
                We are currently capped at{' '}
                <b>
                  <span>{maxBContr}</span>&nbsp;ETH
                </b>
                .
              </div>
              <div className='feature-element' style={{ fontSize: '18px' }}>
                Users have deposited{' '}
                <b>
                  <span>{n6.format(curTotalB)}</span>&nbsp;ETH
                </b>
                .
              </div>
              <div className='feature-element' style={{ fontSize: '18px' }}>
                Therefore, you may contribute up to
                <b>
                  <span>{n6.format(youContr)}</span>&nbsp;ETH
                </b>{' '}
                below, or by sending ETH to our contract at{' '}
                <b>
                  <a target='_blank' rel='noreferrer' href='https://etherscan.io/address/0x06adba5ad6c494e536cad8afa1129ab9f7cb99bf'>
                    0x06adBa5ad6c494e536CAd8afA1129AB9F7Cb99bF
                  </a>{' '}
                </b>
                with 200,000 gas.
              </div>
              <div className='alert alert-info'>MAX: {n6.format(youContr)} ether.</div>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control action-input-lt'
                  min={0}
                  max={100}
                  aria-label='Default'
                  onChange={e => handleChange(e)}
                  value={depositAmt}
                  style={{ width: '70%' }}
                />
                <div className='input-group-append'>
                  <button className='btn cta-btn action-btn-rt' onClick={() => deposit()} type='button'>
                    Deposit
                  </button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='heading-message' style={{ textAlign: 'center' }}>
                Withdraw
              </div>
              <div className='feature-element' style={{ fontSize: '18px' }}>
                You currently have
                <b>
                  <span>{n6.format(balanceOf)}</span>&nbsp;EOSBet Stake Tokens
                </b>
                deposited with us.
              </div>
              <div className='feature-element' style={{ fontSize: '18px' }}>
                These are valued at{' '}
                <b>
                  <span>{n6.format(curUTValue)}</span>&nbsp;ETH
                </b>
                .
              </div>
              <div className='feature-element' style={{ fontSize: '18px' }}>
                You may withdraw some, or all of your tokens below. Or you may withdraw all of your tokens by sending a <b>0 ETH</b>{' '}
                transaction to our contract
                <b>
                  <a target='_blank' rel='noreferrer' href='https://etherscan.io/address/0x06adba5ad6c494e536cad8afa1129ab9f7cb99bf'>
                    0x06adBa5ad6c494e536CAd8afA1129AB9F7Cb99bF
                  </a>
                </b>
                with extra data <b>0x7a09588b</b> and 200,000 gas.
              </div>
              <WithdrawInfo />
              <div className='input-group' style={{ paddingBottom: '30px' }}>
                <div className='input-group-prepend'>
                  <button className='btn cta-btn action-btn-lt' onClick={() => withdraw(true)} type='button'>
                    <b>&nbsp;&uarr;</b>
                  </button>
                </div>
                <input
                  type='text'
                  className='form-control action-input-lt'
                  aria-label='Default'
                  onChange={e => handleChangeW(e)}
                  value={withdrawAmt}
                  style={{ width: '70%' }}
                />
                <div className='input-group-append'>
                  <button className='btn cta-btn action-btn-rt' onClick={() => withdraw(false)} type='button'>
                    Withdraw
                  </button>
                </div>
              </div>
              <div className='feature-element fine-print'>
                Note, that there is 1% fee on withdrawals, as well as a 24 hour staking period. This is to discourage repeated depositing
                and withdrawing from the bankroll, because it throws off our maximum allowed bet calculations. If you are a bankroll staker,
                please email support@eosbet.io when you withdraw, with a transaction hash, and we <b>will</b> refund this 1% fee ASAP!
              </div>
            </div>
          </div>
          <div className='row' style={{ paddingTop: '20px' }}>
            <div className='col-xl-9 col-lg-8'>
              <div className='feature-element fine-print'>
                Please note that there is absolutely zero guarantee of profit or return on investment by using our smart contracts. We are
                not liable for any damages that may arise from use of our smart contracts, up to and including the loss of all ether or
                other digital assets deposited into the bankroll. We are not liable for any losses due to use of the dice, slots, and
                bankroll smart contracts. You must be 18 years of age or older, to use any of our smart contracts, and you must be legally
                allowed to do so. Please check with the authorities in your jurisdiction before interacting with any of our smart contracts
                if you are unsure of your nations or states legal requirements.
              </div>
              <div className='feature-element fine-print'>
                Please note that we are not personally running any code contained within these smart contracts. By submitting a transaction
                to the ethereum network, you are authorizing a miner to execute code contained within a smart contract, and you are
                accepting any outcome that may occur due to interacting with the previously mentioned smart contract. By signing a valid
                Ethereum transaction with your personally owned private key, you are entering into a one time contract with a miner to
                execute the transaction as signed. We are not liable for any malfunction or errors that result from your interaction with
                these smart contracts. You are not entering any agreement, express or implied, with us, the developers of this site, when
                you submit a transaction to the Ethereum network.
              </div>
              <div className='feature-element fine-print'>
                Please be aware that, once deployed to the Ethereum network, smart contracts act as a fully autonomous entity. Legal claims
                or other claims, of any sort, must be settled with the fully autonomous smart contract.
              </div>
            </div>
            <div className='col-xl-3 col-lg-4 d-none d-lg-inline'>
              <img alt='' src={Moneyman} width='200px' style={{ marginLeft: '50px' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Bankroll;
