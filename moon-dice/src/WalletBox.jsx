import { alertChain } from './helpers/connector';
import { getEllipsisTxt } from './helpers/formatters';

const { useWeb3React } = require('@web3-react/core');
const { PropTypes } = require('prop-types');
const React = require('react');

const WalletBox = props => {
  const { active, connect, disconnect, isActive, close, isWal, clipboard, cop } = props;
  const { account } = useWeb3React();
  const link = `https://etherscan.io/address/${account}`;
  return (
    isActive && (
      <div className='connect-box'>
        <div className='con-box'>
          <div className='con-boxx'>
            {active ? (
              <div className='con-boxxx'>
                <button type='button' className='crest' onClick={close}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='sc-1hmbv05-1 jBUAfz'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                </button>

                <div className='con-wal'>
                  <div className='con-wall'>Account</div>
                </div>
                <div className='fhFZhN'>
                  <div className='kVlCdV'>
                    <div className='mYoVp'>
                      <div className='jaSGRG'>{`Connected with ${isWal}`}</div>
                      <div>
                        <button type='button' className='hYTqPD' onClick={disconnect}>
                          Disconnect
                        </button>
                      </div>
                    </div>
                    <div className='mYoVp'>
                      <div>
                        <div className='hpOYmM'>
                          <span>
                            <div className='wefsd'>
                              <svg x='0' y='0' width='16' height='16'>
                                <rect
                                  x='0'
                                  y='0'
                                  width='16'
                                  height='16'
                                  transform='translate(1.1796502641681756 2.9631249723104855) rotate(230.8 8 8)'
                                  fill='#F2C602'
                                ></rect>
                                <rect
                                  x='0'
                                  y='0'
                                  width='16'
                                  height='16'
                                  transform='translate(-6.250837224529755 -6.588897569341067) rotate(312.1 8 8)'
                                  fill='#F96801'
                                ></rect>
                                <rect
                                  x='0'
                                  y='0'
                                  width='16'
                                  height='16'
                                  transform='translate(-14.500338077124104 -1.2514513738463688) rotate(284.4 8 8)'
                                  fill='#01728E'
                                ></rect>
                              </svg>
                            </div>
                          </span>
                        </div>
                        <span>{getEllipsisTxt(account)}</span>
                      </div>
                    </div>
                    <div className='mYoVp'>
                      <div>
                        <button type='button' className='cXjqqP' onClick={() => clipboard.copy(account)}>
                          <div className='sdfwe'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='16'
                              height='16'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            >
                              <rect x='9' y='9' width='13' height='13' rx='2' ry='2'></rect>
                              <path d='M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1'></path>
                            </svg>
                            <span fontSize='14' className='ccSfOB'>
                              {cop}
                            </span>
                          </div>
                        </button>
                        <a target='_blank' rel='noopener noreferrer' href={link} className='kylAaZ'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='16'
                            height='16'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          >
                            <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                            <polyline points='15 3 21 3 21 9'></polyline>
                            <line x1='10' y1='14' x2='21' y2='3'></line>
                          </svg>
                          View on Explorer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='con-boxxx'>
                <button type='button' className='crest' onClick={close}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='sc-1hmbv05-1 jBUAfz'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                </button>

                <div className='con-wal'>
                  <div className='con-wall'>Connect wallet</div>
                </div>
                <div className='con-but'>
                  <div className='con-butt'>
                    <div className='con-butto'>
                      <button type='button' className='dwNCOz' onClick={() => connect()}>
                        <div className='dAICrD'>Connect wallet</div>
                        <div className='jAqWxr'>{/* <img src={mm} alt="Icon" /> */}</div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='chain'>{alertChain}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};
export default WalletBox;

WalletBox.propTypes = {
  active: PropTypes.bool,
  connect: PropTypes.func,
  disconnect: PropTypes.func,
  isActive: PropTypes.bool,
  close: PropTypes.func,
  isWal: PropTypes.string,
  clipboard: PropTypes.object,
  cop: PropTypes.string
};
