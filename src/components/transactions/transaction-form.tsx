import React from "react";
import { Transaction, useGlobalState } from "../../context";

export const TransactionForm: React.FC = () => {
  const { addTransaction, state } = useGlobalState();
  const { transactions} = state;
  
  let [newIdState, setNewIdState] = React.useState<any>(
    transactions[transactions.length - 1]?.id
  );

  const [transaction, setTransaction] = React.useState<Transaction>({
    // id: transactions[transactions.length - 1]?.id,
    id: newIdState ? newIdState : 1,
    description: "",
    amount: "",
  });

 React.useEffect(() => {
  setNewIdState(transactions[transactions.length - 1]?.id);
 }, [transactions]);

console.log(newIdState);


const handleChange = (field: keyof Transaction) => (event: any): void => {
  
  setTransaction({...transaction, [field]: event.target.value })
};


//
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    newIdState++

    addTransaction({
      id: newIdState ? newIdState : 1,
      description: transaction.description,
      amount: +transaction.amount,
    });

    console.log(transaction);
    setTransaction({
      id: 1,
      description: "",
      amount: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={handleChange("description")}
          required
          value={transaction.description}
        />
        <br />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={handleChange("amount")}
          required
          value={transaction.amount}
        />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};




