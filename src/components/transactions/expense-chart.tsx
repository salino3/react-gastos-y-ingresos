import React from 'react';
import {VictoryPie, VictoryLabel } from 'victory';
import { Transaction, useGlobalState } from '../../context';

export const ExpenseChart: React.FC = () => {

 const {state} = useGlobalState();
 const {transactions} = state;

//  //!
// const [totalIncome, setTotalIncome] = React.useState<number>(
//   Number(
//     transactions
//       .filter((item: Transaction) => Number(item.amount) > 0)
//       .reduce(
//         (acc: number, item: Transaction) => (acc += Number(item.amount)),
//         0
//       )
//       .toFixed(2)
//   )
// );

// const [totalExpense, setTotalExpense] = React.useState(
//   Number(
//     transactions
//       .filter((item: Transaction) => Number(item.amount) < 0)
//       .reduce(
//         (acc: number, item: Transaction) => (acc += Number(item.amount)),
//         0
//       )
//       .toFixed(2)
//   ) * -1
// );
 //!

const totalIncome: number = Number(
  transactions
    .filter((item: Transaction) => Number(item.amount) > 0)
    .reduce((acc: number, item: Transaction) => (acc += Number(item.amount)), 0)
    .toFixed(2)
);


 const totalExpense: number = Number(transactions
     .filter((item: Transaction) =>  Number(item.amount) < 0)
     .reduce((acc: number, item: Transaction) => (acc +=  Number(item.amount)), 0)
     .toFixed(2)) * -1;
      
      // const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);
      const totalExpensesPercentage =
        totalIncome === 0 ? 0 : Math.round((totalExpense / totalIncome) * 100);

      const totalIncomePercentage = 100 - totalExpensesPercentage;

  return (
    <div style={{ width: "500px" }}>
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: totalExpensesPercentage },
          { x: "Income", y: totalIncomePercentage },
        ]}
        animate={{
          duration: 200,
        }}
        labels={({ datum }) => `${datum.y}%`}
        labelComponent={
          <VictoryLabel
            angle={0}
            style={{
              fill: "white",
            }}
          />
        }
      />
    </div>
  );
}
