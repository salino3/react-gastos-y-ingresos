interface ADD_TRANSACTION {
  type: "ADD_TRANSACTION";
  payload: Transaction;
}

interface DELETE_TRANSACTION {
  type: "DELETE_TRANSACTION";
  payload: number;
}


export interface Transaction {
  id?: number;
  description: string;
  amount: number;
}

export type All_Actions = ADD_TRANSACTION | DELETE_TRANSACTION;

export interface State {
  transactions: Transaction[];
}


export interface MyState {
  dispatch: React.Dispatch<All_Actions>;
  state: State;
  addTransaction: (transaction: Transaction) => void;
  deleteTransaction: (id: number) => void;
};


