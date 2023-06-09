import React from 'react';
import { Context, AppReducer, Transaction } from ".";
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
  const localData: string | null = sessionStorage.getItem("transactions");
  const parsedData: any = localData !== null ? JSON.parse(localData) : null;
  return parsedData || initialState;
 });

 const [toggle, setToggle] = React.useState<boolean>(false);


  React.useEffect(() => {
    sessionStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);
  

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id: number) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        addTransaction,
        deleteTransaction,
        toggle,
        setToggle,
      }}
    >
      {children}
    </Context.Provider>
  );
}
