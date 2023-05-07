
export const AppReducer = (state: any, action: any) => {
  
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((item: any) => {
        return  item.id !== action.payload
        }
         )
        
      };

    default:
      return state;
  }
}
