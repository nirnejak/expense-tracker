import React from 'react';

import { GlobalProvider } from './context/GlobalState'

import Layout from './components/Layout'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionList from './components/TransactionList'
import AddTransaction from './components/AddTransaction'

import './App.scss';

const App = () => {
  return (
    <GlobalProvider>
      <Layout>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </Layout>
    </GlobalProvider>
  );
}

export default App;