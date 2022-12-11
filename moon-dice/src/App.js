import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Bankroll, Dice, Home, NotFound, PleaseConnect, Slots, Support } from './components';
import { Hamburger_2x, Nav_Logo } from './img';
import { useConnect } from './useConnect';
import Wallet from './Wallet.jsx';
import WalletBox from './WalletBox.jsx';

function App() {
  const [auth, setAuth] = useState(false);
  const [act, setAct] = useState(false);
  const [actt, setActt] = useState(false);
  const { active, connect, disconnect, isActive, setIsActive, close, isWal, cop, clipboard } = useConnect();
  const showList = () => {
    setAct(!act);
  };
  const showBar = () => {
    setActt(!actt);
  };
  const history = window.localStorage;
  useEffect(() => {
    let timeout;
    if (active && !auth) {
      timeout = setTimeout(() => {
        setAuth(true);
      });
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [active]);
  return (
    <BrowserRouter history={history}>
      <div className='App'>
        <section id='navbar'>
          <nav className='navbar navbar-dark fixed-top navbar-expand-md'>
            <a className='navbar-brand' href='/'>
              <img alt='' src={Nav_Logo} width='80' height='80' />
            </a>
            <div className='ml-auto'>
              <button className='navbar-toggler' type='button' onClick={showBar} data-target='#navbar-content' style={{ border: 'none' }}>
                <span>
                  <img alt='' src={Hamburger_2x} style={{ width: '70px' }} />
                </span>
              </button>
            </div>
            <div className={actt ? 'navbar-collapse' : 'collapse navbar-collapse'} id='navbar-content'>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item dropdown' data-toggle='collapse' data-target='#navbar-content'>
                  <span className='nav-link dropdown-toggle' onClick={showList} role='button'>
                    Play Now
                  </span>
                  {act ? (
                    <div className='dropdown-menuu'>
                      <a className='dropdown-item' href='/Dice'>
                        Dice
                      </a>
                      <a className='dropdown-item' href='/Slots'>
                        Slots
                      </a>
                    </div>
                  ) : null}
                </li>
                <li className='nav-item' data-toggle='collapse' data-target='#navbar-content'>
                  <a className='nav-link' href='/#airdrop-and-crowdsale'>
                    Airdrop &amp; ICO
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link nav-text' href='/Bankroll'>
                    Bankroll Us
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/Support'>
                    Support &amp; FAQ
                  </a>
                </li>{' '}
                <li className='nav-link'>
                  <Wallet active={active} disconnect={disconnect} setIsActive={setIsActive} />
                </li>
              </ul>
            </div>
          </nav>
        </section>

        <WalletBox
          active={active}
          connect={connect}
          disconnect={disconnect}
          isActive={isActive}
          close={close}
          isWal={isWal}
          clipboard={clipboard}
          cop={cop}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Slots' element={active && auth ? <Slots /> : <PleaseConnect />} />
          <Route path='/Bankroll' element={active && auth ? <Bankroll /> : <PleaseConnect />} />
          <Route path='/Dice' element={active && auth ? <Dice /> : <PleaseConnect />} />
          <Route path='/Support' element={<Support />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
