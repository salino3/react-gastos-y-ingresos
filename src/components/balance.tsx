import React from 'react';
import { Transaction, useGlobalState } from '../context';

export const Balance: React.FC = () => {

 const {state} = useGlobalState();
 const {transactions} = state;

 const amount = transactions.map((transaction: Transaction) => transaction.amount);
 const total: number = amount.reduce((acc: number, item) => (acc += Number(item)), 0)

  return (
    <>
    <h3>Your Balance</h3>
    <h1>{total} €</h1>
    </>
  )
}
