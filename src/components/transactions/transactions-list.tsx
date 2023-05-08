import React from 'react';
import { Transaction, useGlobalState } from '../../context';
import { TransactionItem } from './transaction-item';

export const TransactionList: React.FC = () => {
  const { state, deleteTransaction, setToggle } = useGlobalState();
  const { transactions } = state;


  function handleClick(item: Transaction) {
    if (item.id !== undefined) {
      setToggle(true);
      deleteTransaction(item.id);
    };
  };

  return (
    <>
      <h3>History</h3>
      <ul>
        {transactions &&
          transactions.map((item: Transaction) => (
            <TransactionItem
              key={item.id}
              item={item}
              onClick={() => item.id && handleClick(item)}
            />
          ))}
      </ul>
    </>
  );
}
