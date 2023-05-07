import React from "react";
import { useGlobalState } from "../context";

export const IncomeExpense: React.FC = () => {
  const { state } = useGlobalState();
  const { transactions } = state;

  const amounts = transactions.map((item: any) => item.amount);

  const income = amounts
    .filter((item: any) => item > 0)
    .reduce((acc: number, item: number) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts
      .filter((item: any) => item < 0)
      .reduce((acc: number, item: number) => (acc += item), 0)
      .toFixed(2) * -1;

  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>Expense</div>
      <h4>{expense}</h4>
    </>
  );
};
