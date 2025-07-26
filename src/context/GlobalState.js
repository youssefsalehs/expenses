import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useEffect, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "deleteTransaction":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "addTransaction":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
}
const init = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};
export const GlobalContext = createContext(init);
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, init);
  function deleteTransaction(id) {
    dispatch({ type: "deleteTransaction", payload: id });
  }
  function addTransaction(newtransaction) {
    dispatch({ type: "addTransaction", payload: newtransaction });
  }
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
