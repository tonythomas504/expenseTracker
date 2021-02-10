import React from 'react'
import { Header } from './components/header'
import { Balance } from './components/balance'
import { IncomeExpenses } from './components/incomeExpenses'
import { TransactionList } from './components/transactionList'
import { AddTransaction } from './components/addTransaction'
import { GlobalProvider } from './context/GlobalState'

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
