import React from 'react';
import { Context, AppReducer } from ".";
import { initialState } from '../api/data';

interface Props {
  children: React.ReactNode;
};

export const useGlobalState = () => {
 const context = React.useContext(Context);
  return context;
};

export const MyProvider: React.FC<Props> = ({children}) => {
const [state, dispatch] = React.useReducer(AppReducer, initialState, () => {
  const localData: any = sessionStorage.getItem("transactions");
const parsedData: any = localData !== null ? JSON.parse(localData) : null;
  return parsedData || initialState;
});



  React.useEffect(() => {
    sessionStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);
  

  const addTransaction = (transactions: any) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  };

  const deleteTransaction = (id: any) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider value={{ state, addTransaction, deleteTransaction, dispatch }}>
      {children}
    </Context.Provider>
  );
}
