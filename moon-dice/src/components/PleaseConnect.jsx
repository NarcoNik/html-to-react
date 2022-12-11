import React from 'react';

import { Monopoly_Man } from '../img';

class PleaseConnect extends React.Component {
  render() {
    return (
      <section id='error' style={{ minHeight: '100vh' }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='heading-message'>
          <br />
          <span style={{ fontSize: '300%' }}>Please First connect to Wallet</span>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='d-none d-md-block'>
          <img alt='' style={{ height: '400px' }} src={Monopoly_Man} />
        </div>
      </section>
    );
  }
}
export default PleaseConnect;
