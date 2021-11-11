import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/app.css';

import {
  Navbar,
  Homepage,
  Exchanges,
  CryptoCurrencies,
  CryptoDetails,
  News,
} from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <main className='main'>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/exchanges'>
            <Exchanges />
          </Route>
          <Route exact path='/cryptocurrencies'>
            <CryptoCurrencies />
          </Route>
          <Route exact path='/crypto/:coinId'>
            <CryptoDetails />
          </Route>
          <Route exact path='/news'>
            <News />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default App;
