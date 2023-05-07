import React from 'react';
import { Balance, Header, IncomeExpense } from '../components';
import { ExpenseChart, TransactionForm, TransactionList } from '../components/transactions';

export const Home: React.FC = () => {
  return (
    <div>
        <Header />
        <IncomeExpense />
        <Balance />
        <TransactionForm />
        <TransactionList />
        <ExpenseChart />
    </div>
  )
}
