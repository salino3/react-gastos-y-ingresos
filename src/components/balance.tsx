import React from 'react';
import { useGlobalState } from '../context';

export const Balance: React.FC = () => {

 const {state} = useGlobalState();
 const {transactions} = state;

 const amount = transactions.map((transaction: any) => transaction.amount);
 const total = amount.reduce((acc: number, item: number) => (acc += item), 0)

  return (
    <>
    <h3>Your Balance</h3>
    <h1>{total} €</h1>
    </>
  )
}
