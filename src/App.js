import React from 'react';
import './App.css';
import CreditCardComponent from './components/credit-card-component/credit-card-component';
import '../node_modules/@ttsftwr/jca-ui-kit/docs/css/jca-ui-kit.min.css';

export default class App extends React.Component {

    render() {
      return (
          <div className="App">
              <div className='jca-topbar'>
                  <div className='container-fluid d-flex'>
                      <div className='jca-logo'>
                          Credit card manager
                      </div>
                  </div>
              </div>
              <div className='jca-page-header'>

              </div>
              <div className='jca-content'>
                  <CreditCardComponent />
              </div>
          </div>
      );
    }
}
