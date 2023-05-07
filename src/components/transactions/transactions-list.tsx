import React from 'react';
import { useGlobalState } from '../../context';
import { TransactionItem } from './transaction-item';

export const TransactionList: React.FC = () => {
 
  const { state, deleteTransaction } = useGlobalState();
  const {transactions} = state;

  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul>
       {transactions &&
        transactions.map((item: any) => (
          <TransactionItem
          key={item.id}
          item={item}
          deleteTransaction={deleteTransaction}
          />
          ))}
      </ul>
    </>
  );
}
