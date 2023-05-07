import React from 'react';
import {VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../../context';

export const ExpenseChart: React.FC = () => {

 const {state} = useGlobalState();
 const {transactions} = state;

//  const total: number =  transactions
//     .reduce((acc: number, item: any) => (acc += item.amount), 0);


const totalIncome: any = transactions
  .filter((item: any) => item.amount > 0)
  .reduce((acc: number, item: any) => (acc += item.amount), 0)
  .toFixed(2);


 const totalExpense: any =
   transactions
     .filter((item: any) => item.amount < 0)
     .reduce((acc: any, item: any) => (acc += item.amount), 0)
     .toFixed(2) * -1;
      
      const totalExpensesPercentage = Math.round((totalExpense / totalIncome) * 100);
      
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
