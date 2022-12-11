import { getEllipsisTxt } from './helpers/formatters';

const { PropTypes } = require('prop-types');
const React = require('react');
const { useWeb3React } = require('@web3-react/core');

const Wallet = props => {
  const { active, setIsActive } = props;
  const { account } = useWeb3React();

  return (
    <>
      <button type='button' className='btn btn-dark btn-radius btn-sm' onClick={() => setIsActive(prev => !prev)}>
        {active ? getEllipsisTxt(account) : 'Connect'}
      </button>
    </>
  );
};
export default Wallet;

Wallet.propTypes = {
  active: PropTypes.bool,
  setIsActive: PropTypes.func
};
