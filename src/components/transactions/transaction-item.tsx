import React from 'react';

interface Props {
    item: any;
    deleteTransaction: (id: any) => {}
}

export const TransactionItem: React.FC<Props> = (props) => {
 const {item, deleteTransaction} = props;

  return (
    <li>
      <p>{item.id}</p>
      <p>{item.description}</p>
      <span>{item.amount}</span>
      <button onClick={() => deleteTransaction(item.id)}>X</button>
    </li>
  );
}
