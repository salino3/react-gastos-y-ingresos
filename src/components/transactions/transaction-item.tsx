import React from 'react';
import { Transaction } from '../../context';

interface Props {
  item: Transaction;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const TransactionItem: React.FC<Props> = (props) => {
 const {item, onClick} = props;

  return (
    <li>
      <p>{item.id}</p>
      <p>{item.description}</p>
      <span>{item.amount}</span>
      <button onClick={onClick}>X</button>
    </li>
  );
}
