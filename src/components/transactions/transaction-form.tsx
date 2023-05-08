import React from "react";
import { Transaction, useGlobalState } from "../../context";

export const TransactionForm: React.FC = () => {
  const { addTransaction, state } = useGlobalState();
  const { transactions} = state;
  
  let [newIdState, setNewIdState] = React.useState<any>(
    transactions[transactions.length - 1]?.id
  );

  const [transaction, setTransaction] = React.useState<Transaction>({
    id: transactions[transactions.length - 1]?.id,
    description: "",
    amount: 0,
  })
  const [description, setDescription] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>(0);

 React.useEffect(() => {
  setNewIdState(transactions[transactions.length - 1]?.id);
 }, [transactions]);

console.log(newIdState);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    newIdState++
console.log("dentro onsSubmit", newIdState);

    addTransaction({
      id: newIdState ? newIdState : 1, 
      description,
      amount: +amount,
    });
    setDescription("");
    // setAmount(0);
    console.log(description, amount);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={(event) => setDescription(event.target.value)}
          required
          value={description}
        />{" "}
        <br />
        <input
          type="number"
          step="0.01"
          placeholder="00.00"
          onChange={(event) => setAmount(parseFloat(event.target.value))}
          required
          value={amount}
        />{" "}
        <br />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};




