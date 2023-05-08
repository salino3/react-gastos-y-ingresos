import React from "react";
import { Transaction, useGlobalState } from "../context";

export const IncomeExpense: React.FC = () => {
  const { state } = useGlobalState();
  const { transactions } = state;

  const amounts: (string | number)[] = transactions.map(
    (item: Transaction) => item.amount
  );

  const income: number | string = Number(
    amounts
      .filter((item: number | string) => Number(item) > 0)
      .reduce((acc: number, item: number | string) => (acc += Number(item)), 0)
      .toFixed(2)
  );

  const expense: number =
    Number(
      amounts
        .filter((item: number | string) => Number(item) < 0)
        .reduce((acc: number, item: number | string) => (acc += Number(item)), 0)
        .toFixed(2)
    ) * -1;

  return (
    <>
      <div>
        <h4>Income</h4>
        <p>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p>{expense}</p>
      </div>
    </>
  );
};
