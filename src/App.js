import React from 'react';
import './App.css';
import CreditCardComponent from './components/credit-card-component/credit-card-component';
import HeaderComponent from './components/header/header-component';
import '../node_modules/@ttsftwr/jca-ui-kit/docs/css/jca-ui-kit.min.css';

export default class App extends React.Component {

    render() {
      return (
          <div className='App'>
              <HeaderComponent />
              <div className='jca-content'>
                  <CreditCardComponent />
              </div>
          </div>
      );
    }
}
