import React from 'react';

import {
  allocation_pie_chart,
  Bankroll_Logo,
  Decentralized,
  Dice_Logo,
  Disrupt,
  EOS_Spinning_Logo,
  Feature_Later,
  Feature_Now,
  GitHub,
  ico_pie_chart,
  Medium,
  Permissionless,
  Reddit,
  Slots_Logo,
  Spacer,
  Telegram,
  Twitter,
  Yours
} from '../img';

class Home extends React.Component {
  render() {
    return (
      <>
        <section id='splash'>
          <div className='container'>
            <div className='row'>
              <div className='top-padding'></div>
            </div>
            <div className='row cta-message cta-header'>
              <div className='col-12'>EOSBet</div>
            </div>
            <div className='row cta'>
              <div className='col-md-6'>
                <div data-toggle='tooltip' data-placement='top' title='Stay tuned! Whitepaper v2 coming next week!'>
                  <button type='button' className='btn cta-btn main-btn' disabled>
                    Whitepaper
                  </button>
                </div>
                <div className='cta-message cta-subheader'>
                  Learn about the state-of-the-art gambling system we are building on the EOS Blockchain
                  <br />
                  (Whitepaper v2 coming soon!)
                </div>
              </div>
              <div className='col-md-6'>
                <a href='/#games-and-bankroll'>
                  <button type='button' className='btn cta-btn main-btn'>
                    Play Now
                  </button>
                </a>
                <div className='cta-message cta-subheader'>Our proof-of-concept games are the best on the Ethereum network</div>
              </div>
            </div>
          </div>
        </section>

        <section id='casino-features'>
          <div className='container'>
            <div className='row heading-message'>
              <div className='col-12'>The Future of Decentralized Gambling</div>
            </div>

            <div className='row d-none d-md-flex'>
              <div className='col-5'>
                <img alt='' className='feature-img-1x' src={Feature_Now} />
                <div className='feature-title'>Play Now</div>
                <div className='feature-element'>
                  <i>Our proof-of-concept is live! Place your bets and bankroll us on the Ethereum mainnet.</i>
                </div>
                <div className='feature-element'>
                  Our gambling smart contracts are the best on the market, allow near-instant gameplay, and feature a super low house edge.
                </div>
                <div className='feature-element'>Bankroll us with your ETH and receive dividends in ETH. Withdraw at any time!</div>
              </div>
              <div className='col-7'>
                <img alt='' className='feature-img-1x' src={Feature_Later} />
                <div className='feature-title'>Play on EOS</div>
                <div className='feature-element'>
                  We will be building the future of online gambling on EOS.io, the industrial scale blockchain.
                </div>
                <div className='feature-element'>
                  Our smart casino will be the first of its kind: fully decentralized, trustless, and scalable to millions of users.
                </div>
                <div className='feature-element'>
                  <b>PROVABLY FAIR. COMPLETELY FREE BETTING. ALL THE MOST POPULAR GAMES.</b>
                </div>
              </div>
            </div>

            <div
              className='row d-block d-md-none'
              style={{
                height: '500px',
                paddingLeft: '6px',
                paddingRight: '6px'
              }}
            >
              <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel' style={{ height: '400px' }}>
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <div className='d-block w-100'>
                      <img alt='' className='feature-img-1x' src={Feature_Now} />
                      <div className='feature-title'>Play Now</div>
                      <div className='feature-element'>
                        <i>Our proof-of-concept is live! Place your bets and bankroll us on the Ethereum mainnet.</i>
                      </div>
                      <div className='feature-element'>
                        Our gambling smart contracts are the best on the market, allow near-instant gameplay, and feature a super low house
                        edge.
                      </div>
                      <div className='feature-element'>Bankroll us with your ETH and receive dividends in ETH. Withdraw at any time!</div>
                    </div>
                  </div>
                  <div className='carousel-item'>
                    <div className='d-block w-100'>
                      <img alt='' className='feature-img-1x' src={Feature_Later} />
                      <div className='feature-title'>Play on EOS</div>
                      <div className='feature-element'>
                        We will be building the future of online gambling on EOS.io, the industrial scale blockchain.
                      </div>
                      <div className='feature-element'>
                        Our smart casino will be the first of its kind: fully decentralized, trustless, and scalable to millions of users.
                      </div>
                      <div className='feature-element'>
                        <b>PROVABLY FAIR. COMPLETELY FREE BETTING. ALL THE MOST POPULAR GAMES.</b>
                      </div>
                    </div>
                  </div>
                </div>
                <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
                  <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                  <span className='sr-only'>Previous</span>
                </a>
                <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
                  <span className='carousel-control-next-icon' aria-hidden='true'></span>
                  <span className='sr-only'>Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id='games-and-bankroll'>
          <div className='container'>
            <div className='row heading-message'>
              <div className='col-12'>Play our Proof-of-Concept on the Ethereum Mainnet</div>
            </div>
            <div className='row game-divider game-divider-line'>
              <div className='col-lg-8 order-2 order-lg-1'>
                <img alt='' className='img-fluid' src={Dice_Logo} style={{ width: '45%', marginBottom: '-20px' }} />
                <a href='/Dice'>
                  <button type='button' className='btn cta-btn game-btn'>
                    Play Dice
                  </button>
                </a>
              </div>
              <div className='col-lg-4 order-1 order-lg-2'>
                <div className='feature-title'>Dice</div>
                <div className='feature-element'>
                  Play up to 1024 rolls of dice with a single transaction and enjoy the speed of the first <b>near-instant betting</b>{' '}
                  solution on the Ethereum blockchain.
                </div>
                <div className='feature-element'>
                  Lowest house edge at only <b>0.5%</b>. 2x better than Etheroll and 4x better than vDice.
                </div>
                <div className='feature-element'>
                  All bettors will be airdropped <b>free</b> EOSBET tokens, so there’s no reason not to roll the dice right now!
                </div>
              </div>
            </div>
            <div className='row game-divider game-divider-line'>
              <div className='col-lg-4'>
                <div className='feature-title'>Slots</div>
                <div className='feature-element'>
                  Play the most popular betting game in the world. Our house edge is 1/4 the size of standard casinos.
                </div>
                <div className='feature-element'>
                  Massive <b>5000x multiplier jackpot</b>! Become a whale today!
                </div>
                <div className='feature-element'>
                  Play up to 224 spins with a single transaction and enjoy near-instant slots action. Spin right now for only $0.50 and
                  enjoy
                  <b>free EOSBET</b> tokens from our airdop!
                </div>
              </div>
              <div className='col-lg-8'>
                <img alt='' className='img-fluid' src={Slots_Logo} style={{ width: '40%', marginBottom: '-20px' }} />
                <a href='Slots'>
                  <button type='button' className='btn cta-btn game-btn'>
                    Play Slots
                  </button>
                </a>
              </div>
            </div>
            <div className='row game-divider'>
              <div className='col-lg-8 order-2 order-lg-1'>
                <img alt='' className='img-fluid' src={Bankroll_Logo} style={{ width: '40%' }} />
                <a href='/Bankroll'>
                  <button type='button' className='btn cta-btn game-btn'>
                    Invest Now
                  </button>
                </a>
              </div>
              <div className='col-lg-4 order-1 order-lg-2'>
                <div className='feature-title'>Bankroll</div>
                <div className='feature-element'>
                  Be the house and grow your ETH! With a slim house edge, you are statistically guaranteed profits over time.
                </div>
                <div className='feature-element'>Cash out at any time!</div>
                <div className='feature-element'>
                  All contributors will receive free EOSBET tokens from our airdrop, so there’s no reason not to invest in our bankroll,
                  receive
                  <b>ETH dividends</b>, and <b>free tokens</b>.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='what-is-eosbetio'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='heading-message'>Play Later on EOS</div>
                <br />
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-3 col-sm-6'>
                <img alt='' className='feature-img-2x' src={EOS_Spinning_Logo} />
                <div className='feature-title'>EOS BLOCKCHAIN</div>
                <div className='feature-element'>
                  The EOS blockchain architecture is the fastest, most powerful and most scalable in the world. We are the first gambling
                  platform to utilize this infrastructure and plan to be one of the largest projects on the EOS blockchain.
                </div>
              </div>
              <div className='col-lg-3 col-sm-6'>
                <img alt='' className='feature-img-2x' src={Decentralized} />
                <div className='feature-title'>DECENTRALIZED</div>
                <div className='feature-element'>
                  Say goodbye to shady, rigged online casinos. We are proud to be the first fully decentralized smart casino and will always
                  be provably fair and forever auditable.
                </div>
              </div>

              <div className='col-lg-3 col-sm-6'>
                <img alt='' className='feature-img-2x' src={Permissionless} />
                <div className='feature-title'>PERMISSIONLESS</div>
                <div className='feature-element'>
                  With full decentralization comes permissionless gambling. Play anytime, anywhere, no sign-ups, no questions.
                </div>
              </div>

              <div className='col-lg-3 col-sm-6'>
                <img alt='' className='feature-img-2x' src={Disrupt} />
                <div className='feature-title'>DISRUPT</div>
                <div className='feature-element'>
                  With the largest selection of the most popular casino games offered at no cost, we won’t just be the best casino on the
                  blockchain, we’ll be the best casino online, period.
                </div>
              </div>
            </div>

            <br />
          </div>
        </section>

        <section id='airdrop-and-crowdsale'>
          <div className='container'>
            <div className='row'>
              <div className='col-12' style={{ textAlign: 'center' }}>
                <div className='heading-message'>EOSBet Airdrop &amp; ICO</div>
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6'>
                <img alt='' className='img-fluid' src={ico_pie_chart} />
              </div>
              <div className='col-lg-6'>
                <img alt='' className='img-fluid' src={allocation_pie_chart} />
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <div className='feature-title'>Airdrop</div>
              </div>
            </div>

            <div className='row game-divider game-divider-line-bold'>
              <div className='col-lg-6'>
                <div className='ico-text-lg'>100,000,000 EOSBET Airdrop!</div>
              </div>
              <div className='col-lg-6'>
                <div className='feature-element'>
                  <b>
                    10% of all EOSBET tokens will be airdropped to all EOS token holders, players of dice and slots, and bankroll
                    contributors!
                  </b>
                </div>
              </div>
            </div>

            <div className='row game-divider game-divider-line'>
              <div className='col-lg-6'>
                <div className='ico-text-md'>25,000,000 to EOS holders!</div>
              </div>
              <div className='col-lg-6'>
                <div className='feature-element'>
                  2.5% of all EOSBET tokens given proportionally to
                  <b>all EOS token holders</b>.
                </div>
              </div>
            </div>

            <div className='row game-divider game-divider-line'>
              <div className='col-lg-6'>
                <div className='ico-text-md'>25,000,000 to Bankroll Stakers!</div>
              </div>
              <div className='col-lg-6'>
                <div className='feature-element'>
                  2.5% of tokens given to EOSBET bankroll stakers in proportion to the amount of ETH contributed. You also will receive
                  dividends on the ETH you have contributed to the bankroll. A real win-win!
                </div>
              </div>
            </div>

            <div className='row game-divider game-divider-line'>
              <div className='col-lg-6'>
                <div className='ico-text-md'>20,000,000 to Dice Players!</div>
              </div>
              <div className='col-lg-6'>
                <div className='feature-element'>
                  2% of EOSBET tokens will be given to our dice players! If you play more games, you get more tokens! Start rolling and
                  enjoy the
                  <b>lowest house edge</b> on the blockchain!
                </div>
              </div>
            </div>

            <div className='row game-divider game-divider-line'>
              <div className='col-lg-6'>
                <div className='ico-text-md'>20,000,000 to Slots Players!</div>
              </div>
              <div className='col-lg-6'>
                <div className='feature-element'>
                  2% of EOSBET tokens will be given to our slots players! You will get more tokens the more games that you play, so start
                  spinning and hit our <b>5000x MEGA jackpot</b>!
                </div>
              </div>
            </div>
            <div className='row game-divider'>
              <div className='col-lg-6'>
                <div className='ico-text-md'>10&nbsp;&nbsp;x&nbsp;&nbsp;1,000,000 JACKPOTS!</div>
              </div>
              <div className='col-lg-6'>
                <div className='feature-element'>
                  10 jackpots of <b>1 MILLION EOSBET TOKENS</b> will be distributed as follows:
                </div>
                <div className='feature-element'>
                  &emsp;&bull;&nbsp;2 <a href='/Dice'>dice</a> players to be selected at random
                </div>
                <div className='feature-element'>
                  &emsp;&bull;&nbsp;2 <a href='/Slots'>slots</a> players to be selected at random
                </div>
                <div className='feature-element'>
                  &emsp;&bull;&nbsp;6 <a href='/Bankroll'>bankrollers</a> to be selected at random. Contribute now to start receiving
                  dividends on your ETH and for the chance to win 0.1% of total EOSBET token supply.
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-12'>
                <div className='feature-title'>
                  <img alt='' className='img-fluid' style={{ paddingTop: '40px', paddingBottom: '60px' }} src={Spacer} />
                  Initial Coin Offering
                </div>
                <div className='feature-element'>
                  40% of all tokens will be sold in an Initial Coin Offering. By offering an ICO, in addition to an airdrop, everyone in the
                  community has a chance to receive EOSBET tokens. We strongly believe that the best platforms have the widest token
                  distributions, and we want everyone to have a chance to be part of revolutionizing the gambling industry.
                </div>
                <div className='feature-element'>
                  Currently, our ICO is not open. Please check back in occasionally and stay in touch below. A technical white paper
                  detailing the EOSBet platform and containing more information on the ICO and token dynamics will be released in the coming
                  months. Don’t forget, our proof-of-concept games are live on the Ethereum network right now and if you bet or contribute
                  to the bankroll you
                  <b>will</b> receive EOSBET tokens in our airdrop!
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='social'>
          <div className='container'>
            <div className='row'>
              <div className='col-md col-4'>
                <a href='https://github.com/EOSBetCasino' target='_blank' rel='noreferrer'>
                  <img alt='' className='social-icon img-fluid' src={GitHub} />
                </a>
              </div>
              <div className='col-md col-4'>
                <a href='https://reddit.com/r/eosbetcasino' target='_blank' rel='noreferrer'>
                  <img alt='' className='social-icon img-fluid' src={Reddit} />
                </a>
              </div>
              <div className='col-md col-4'>
                <a href='https://twitter.com/EOSBetCasino' target='_blank' rel='noreferrer'>
                  <img alt='' className='social-icon img-fluid' src={Twitter} />
                </a>
              </div>
              <div className='col-md col-4'>
                <a href='https://t.me/eosbetcasino' target='_blank' rel='noreferrer'>
                  <img alt='' className='social-icon img-fluid' src={Telegram} />
                </a>
              </div>
              <div className='col-md col-4'>
                <a href='https://medium.com/@eosbetcasino' target='_blank' rel='noreferrer'>
                  <img alt='' className='social-icon img-fluid' src={Medium} />
                </a>
              </div>
              <div className='col-md col-4'>
                <a href='https://yours.org/@eosbetcasino' target='_blank' rel='noreferrer'>
                  <img alt='' className='social-icon img-fluid' style={{ width: '40%', marginTop: '10%' }} src={Yours} />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id='footer' style={{ textAlign: 'center', backgroundColor: '#333333' }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='feature-element fine-print'>
                  <br />
                  Please note that there is absolutely zero guarantee of profit that is to be had either playing our games, or staking money
                  in the bankroll. Everyone participating in the airdrop, crowdsale, or any type of gambling gameplay is required to know
                  the legality of these actions in their jurisdiction. You are responsible for your own activity. Please do not do anything
                  illegal. Know any laws and legal requirements before interacting with our site.
                  <br />
                  <br />
                  EOSBet Tokens, EOSBet Bankroll Stake tokens, or any other token distributed through our site have zero value express or
                  implied, and are not securities. Any value is derived explicitly through your interpretation of the smart contracts.
                  Please note that we are not personally running any code contained within these smart contracts. By submitting a
                  transaction to the ethereum network, you are authorizing a miner to execute code contained within a smart contract, and
                  you are accepting any outcome that may occur due to interacting with the previously mentioned smart contract. By signing a
                  valid Ethereum transaction with your personally owned private key, you are entering into a one time contract with a miner
                  to execute the transaction as signed. We are not liable for any malfunction or errors that result from your interaction
                  with these smart contract. You are not entering any agreement, express or implied, with us, the developers of this site,
                  when you submit a transaction to the Ethereum network.
                  <br />
                  <br />
                  Please be aware that, once deployed to the Ethereum network, smart contracts act as a fully autonomous entity. Legal
                  claims or other claims, of any sort, must be settled with the fully autonomous smart contract.
                  <br />
                  <br />
                  <div style={{ textAlign: 'center' }}>Copyright EOSBet 2018</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Home;
