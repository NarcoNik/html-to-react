import React from 'react';

import { Monopoly_Man } from '../img';

class NotFound extends React.Component {
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
          <span style={{ fontSize: '300%' }}>ERROR!</span>
          <br />
          <br />
          Sorry, but we can not find that page.
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
export default NotFound;
