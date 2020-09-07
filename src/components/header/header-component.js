import React from 'react';
import BanCountryModal from '../modals/ban-country-modal';

const headerComponent = () => (
    <div className='jca-topbar'>
        <div className='container-fluid d-flex'>
            <div className='jca-logo'>
                Credit card manager
            </div>
        </div>

        <ul className='jca-topbar__nav'>
            <li className='jca-topbar__nav-item'>
                <div className='jca-topbar__nav-content'>
                    More information
                </div>

            </li>
            <li className='jca-topbar__nav-item'>
                <div className='jca-topbar__nav-content'>
                    <BanCountryModal data={[]}/>
                </div>
            </li>
        </ul>
    </div>
);

export default headerComponent;
