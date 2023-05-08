import { All_Actions, State, Transaction } from "./interface";

export const AppReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((item: Transaction) => {
          return item.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
