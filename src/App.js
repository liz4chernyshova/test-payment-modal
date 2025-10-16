import React, { useState } from 'react';
import './App.css';
import { SiQiwi } from "react-icons/si";
import { PiGlobe } from "react-icons/pi";
import { LuInfo } from "react-icons/lu";
import CardIcon from './images/card-icon.svg';
import SbpIcon from './images/sbp-icon.svg';
import SberPayIcon from './images/sber-pay-icon.svg'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeInput, setActiveInput] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handlePaymentMethodToggle = (type) => {
    setActiveInput((prev) => (prev === type ? null : type));
  };

  return (
    <div className='App'>
      <button onClick={openModal}>Открыть попап</button>
      {isModalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal' role='dialog' aria-modal='true' onClick={(event) => event.stopPropagation()}>
            <div className='modal-header'>
              <div className='icon-container'>
                <PiGlobe size={28} style={{ color: 'white' }} />
                <LuInfo size={28} style={{ color: 'white' }} />
              </div>
            </div>
            <div className='modal-body'>
              <div className='modal-content'>
                <div className=' card fiolet-light'>
                  <span className='font-size-24 semibold'>1 €</span>
                  <div>
                    <span className='medium text-opacity-5'>Merchant: </span>
                    <span className='font-size-19 semibold'>TESTTEST</span>
                  </div>
                </div>
                <div className='card'>
                  <div className='card-content' onClick={() => handlePaymentMethodToggle('card')}>
                    <img src={CardIcon} alt='icon' width='37' height='32' />
                    <span className='medium'>Card payments</span>
                  </div>
                </div>
                {activeInput === 'card' && (
                  <div className='card-input-container'>
                    <div>
                      <div>
                        <label htmlFor='card-number' className='input-label d-block'>Card Number</label>
                        <input id='card-number' type='text' placeholder='0000 0000 0000 0000' />
                      </div>
                      <div>
                        <label htmlFor='card-date' className='input-label d-block'>Expiry Date</label>
                        <input id='card-date' type='text' placeholder='00/00' />
                      </div>
                      <div>
                        <label htmlFor='card-cvv' className='input-label d-block'>CVV-Number</label>
                        <input id='card-cvv' type='text' placeholder='000' />
                      </div>
                    </div>
                    <div className='card-holder-block'>
                      <label htmlFor='card-holder' className='input-label'>Card Holder</label>
                      <input id='card-holder' type='text' placeholder='IVANOV IVAN' />
                    </div>
                    <button className='button fiolet-light semibold'>Pay</button>
                    <div>
                      <button className='button blue-light semibold'>
                        <img src={SbpIcon} alt='icon' width='56' height='100%' />
                      </button>
                      <button className='button purple-light semibold'>
                        <img src={SberPayIcon} alt='icon' width='58' height='100%' />
                      </button>
                    </div>
                  </div>
                )}
                <div className='card'>
                  <div className='card-content' onClick={() => handlePaymentMethodToggle('qiwi')}>
                    <SiQiwi size={33} style={{ color: '#FF8C00' }}/>
                    <span className='medium'>QIWI</span>
                  </div>
                </div>
                {activeInput === 'qiwi' && (
                  <div className='qiwi-input-container' style={{ 'padding-bottom': '114px'}}>
                    <div>
                      <label htmlFor='qiwi-card-input' className='input-label'>Phone</label>
                      <input id='qiwi-card-input' type='text' placeholder='Telephone Number' />
                    </div>
                    <button className='button fiolet-light semibold'>Pay</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
