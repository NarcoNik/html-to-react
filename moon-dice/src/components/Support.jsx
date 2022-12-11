import React from 'react';

import { FAQ_Heading, Support_Heading } from '../img';

class Support extends React.Component {
  state = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false
  };

  close = () => {
    this.setState({
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eight: false,
      nine: false,
      ten: false,
      eleven: false
    });
  };

  showFaq = x => {
    this.close();
    if (x === 1) {
      this.setState({ one: !this.state.one });
    } else if (x === 2) {
      this.setState({ two: !this.state.two });
    } else if (x === 3) {
      this.setState({ three: !this.state.three });
    } else if (x === 4) {
      this.setState({ four: !this.state.four });
    } else if (x === 5) {
      this.setState({ five: !this.state.five });
    } else if (x === 6) {
      this.setState({ six: !this.state.six });
    } else if (x === 7) {
      this.setState({ seven: !this.state.seven });
    } else if (x === 8) {
      this.setState({ eight: !this.state.eight });
    } else if (x === 9) {
      this.setState({ nine: !this.state.nine });
    } else if (x === 10) {
      this.setState({ ten: !this.state.ten });
    } else {
      this.setState({ eleven: !this.state.eleven });
    }
  };

  render() {
    const { one, two, three, four, five, six, seven, eight, nine, ten, eleven } = this.state;
    return (
      <section id='faq'>
        <div id='accordion' className='container'>
          <br />
          <br />
          <br />
          <br />
          <div className='heading-message'>Getting Started</div>
          <div style={{ textAlign: 'right', marginTop: '-2em' }}>
            <img alt='' className='img-fluid' src={Support_Heading} />
          </div>

          <div className='card'>
            <div className='card-header'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(1)}>
                  &nbsp;&nbsp;What do I need to play on EOSBet?
                </button>
              </h5>
            </div>
            {one ? (
              <div className='card-body'>
                You need three things:
                <br />
                <br />
                &emsp; 1. A computer or laptop with Chrome, Firefox or Brave Browser.
                <br />
                &emsp; 2. <a href='https://metamask.io'>MetaMask</a>, a digital wallet/browser extension used for web apps.
                <br />
                &emsp; 3. <a href='https://www.coinbase.com'>Ether</a>, the world’s second most popular cryptocurrency.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='support-collapse-two-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(2)}>
                  &nbsp;&nbsp;Do I need to signup?
                </button>
              </h5>
            </div>
            {two ? (
              <div className='card-body'>
                Nope. No signups are necessary! We will never ask you for any personal information and all betting can be done anonymously.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='support-collapse-three-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(3)}>
                  &nbsp;&nbsp;What’s Ethereum and how do I get Ether?
                </button>
              </h5>
            </div>
            {three ? (
              <div className='card-body'>
                Ethereum is an open software blockchain platform that allows people to create decentralized applications or “dApps”. Ether
                (ETH) is the digital currency used to power the Ethereum network.
                <br />
                <br />
                The easiest way to purchase ETH is through an exchange. <a href='https://www.coinbase.com'>Coinbase</a>
                is the simplest and most popular option, although there are many others, such as Gemini, Kraken, and BitStamp.
                <br />
                <br />
                If you are a U.S. citizen, you can also purchase ETH directly through MetaMask.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='support-collapse-four-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(4)}>
                  &nbsp;&nbsp;What’s MetaMask and how do I install it?
                </button>
              </h5>
            </div>
            {four ? (
              <div className='card-body'>
                <a href='https://metamask.io'>MetaMask</a> is an extension that allows you to make Ethereum transactions right in your
                Chrome or Firefox browser.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='support-collapse-five-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(5)}>
                  &nbsp;&nbsp;How do I send ETH to MetaMask?
                </button>
              </h5>
            </div>
            {five ? (
              <div className='card-body'>
                <u>For U.S. citizens:</u>
                <br />
                You can purchase ETH directly from MetaMask using the handy Coinbase widget.
                <br />
                <br />
                <u>For everyone else:</u>
                <br />
                &emsp;1. Purchase ETH from an exchange using fiat currency such as $USD or €Euros.
                <br />
                &emsp;2. Copy your MetaMask address by clicking “…” then “Copy Address to clipboard”.
                <br />
                &emsp;3. Go back to the exchange and select your ETH wallet. Then click “send” or “withdrawal”.
                <br />
                &emsp;4. Paste in the MetaMask address you copied with the amount you’d like to transfer and send it!
                <br />
                <br />
                <i>If your ETH doesn’t show up immediately don’t worry! It can take a few minutes for the transaction to be processed.</i>
                <br />
                <br />
                <b>Have fun betting, and good luck!</b>
              </div>
            ) : null}
          </div>
          <br />
          <div className='heading-message'>FAQ</div>

          <div style={{ textAlign: 'right', marginTop: '-2em' }}>
            <img alt='' className='img-fluid' src={FAQ_Heading} />
          </div>

          <div className='card'>
            <div className='card-header' id='faq-collapse-one-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(6)}>
                  &nbsp;&nbsp;What is EOSBet?
                </button>
              </h5>
            </div>
            {six ? (
              <div className='card-body'>
                EOSBet has big plans for the online gambling industry. Right now, we have launched two simple Ethereum smart contract games
                with many improvements over our competitors, including purchasing multiple bets at once, instant betting, and community
                sourced bankroll (that you can earn dividends on your ether!) Everything takes place on-chain, and we have shown that we can
                make on-chain betting fun!
                <br />
                <br />
                However, doing on-chain computations on Ethereum is not a long-term solution, due to high fees and slow processing times. We
                are moving to the EOS Blockchain when it launches, which will allow truly instant betting, and always-free transactions. We
                will be offering all the hottest casino games on EOS, as well as some proprietary games which take advantage of the unique,
                trustless nature of smart contracts.
                <br />
                <br />
                EOSBet will always be trustless, permissionless, and decentralized. Join us and build a fairer world on the EOS.IO
                blockchain.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='faq-collapse-two-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(7)}>
                  &nbsp;&nbsp;Why not play on a centralized casino platform?
                </button>
              </h5>
            </div>
            {seven ? (
              <div className='card-body'>
                Most online casinos require lengthy sign-up and verification processes and make it very difficult and time-consuming to
                withdraw your winnings. More importantly, while some platforms are provably fair, many are not, and there have been numerous
                instances of companies rigging their games, hiding profitability from investors, and even running off with player’s money.
                <br />
                <br />
                With EOSBet you can quickly and anonymously place your bets without the casino ever holding your funds. Since we are 100%
                smart contract based, you can be confident that each game is 100% verifiably fair and transparent.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='faq-collapse-three-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(8)}>
                  &nbsp;&nbsp;I’ve heard about other blockchain casinos. Why should I play on EOSBet
                  <i>right now</i>?
                </button>
              </h5>
            </div>
            {eight ? (
              <div className='card-body'>
                We’re confident EOSBet is the best blockchain casino out there—and we’re only getting better with more games and features
                under development from our team!
                <br />
                <br />
                Each of our games is ran solely on the Ethereum blockchain, meaning we have no external servers and are truly and fully
                decentralized and trustless. We also do not force users to purchase and use a platform-specific token in order to play our
                games like most companies.
                <br />
                <br />
                Most importantly, we offer greatly superior gameplay speeds thanks to our burst chain betting technology compared with
                alternative blockchain casinos, and an elegant UI/UX free of distractions. Decentralized applications (dApps) are relatively
                new, and most blockchain casinos only have semi-working products at best. We’re confident that users will find our games the
                fastest and most enjoyable.
                <br />
                <br />
                Lastly, we offer individuals the ability to compound their Ether and receive dividends by being the house and investing in
                our bankroll. More information on bankroll staking is provided below.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='faq-collapse-four-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(9)}>
                  &nbsp;&nbsp;Why should I play on EOSBet <i>in the future</i>?
                </button>
              </h5>
            </div>
            {nine ? (
              <div className='card-body'>
                As the first smart contract platform, Ethereum is a bit dated and unable to offer an experience similar to those expected
                from a traditional online casino. Transaction speeds are slow and it costs a small fee for the user to begin playing.
                <br />
                <br />
                We are confident that the <a href='https://eos.io'>EOS</a> blockchain will solve all these problems. Bet’s will be resolved
                instantly, but still in a fully decentralized way, and will be completely free for the player.
                <br />
                <br />
                The EOS platform will allow us to offer dozens of popular games and scale to millions of users. We will be a superior online
                gambling platform to anything available. Our games will cost nothing to play, be provably fair, and will be easily playable
                and auditable from anywhere in the world due to the permissionless nature of the blockchain. EOSBet will operate as a truly
                decentralized business with all governance procedures being enacted on-chain and decision-making placed in the hands of the
                community through token-protocol voting. This is the future of decentralized online gambling.
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='faq-collapse-five-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(10)}>
                  &nbsp;&nbsp;So how does it work?
                </button>
              </h5>
            </div>
            {ten ? (
              <div className='card-body'>
                EOSBet is powered by a complex series of fully audited smart contracts, written by our team of experienced developers. A fun
                and unique front-end provides the interface between the blockchain and our gamblers and bankrollers!
                <br />
                <br />
                Transactions, sums, bets, fairness and randomness are all open to and verifiable by the public.
                <br />
                <br />
                Given the immutable and tamper-proof nature of Ethereum contracts it would be impossible for us to steal deposits, winnings,
                or ETH from the bankroll — that’s the beauty of Ethereum and smart contracts!
                <br />
                <br />
                Further, our contracts have been audited by multiple 3rd party entities and has gone through an extensive and successful bug
                bounty program.
                <br />
                <br />
                For more information, please review our whitepaper (v2 coming soon)!
              </div>
            ) : null}
          </div>

          <div className='card'>
            <div className='card-header' id='faq-collapse-six-heading'>
              <h5 className='mb-0'>
                <button className='btn card-btn' onClick={() => this.showFaq(11)}>
                  &nbsp;&nbsp;What does investing in the bankroll mean?
                </button>
              </h5>
            </div>
            {eleven ? (
              <div className='card-body'>
                EOSBet pays out winners from its bankroll—a pot of Ether securely stored away that our smart contracts draw from. If players
                get on a hot streak or win big the bankroll temporarily decreases in size. However, the bankroll is statistically guaranteed
                to grow over time because we have a very slight house edge in our Ethereum based games!
                <br />
                <br />
                EOSBet allows people to invest their Ether directly in our bankroll. 80% of all winnings are distributed to bankroll
                investors in proportion to their stake.
              </div>
            ) : null}
          </div>
          <br />
          <br />

          <span style={{ color: 'white' }}>If you have any more questions, please do not hesitate to contact us at support@eosbet.io</span>
          <br />
          <br />
        </div>
      </section>
    );
  }
}
export default Support;
