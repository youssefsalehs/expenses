import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expenses = transactions
    .map((transaction) => transaction.amount)
    .filter((amount) => amount < 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  return (
    <div className="bg-slate-200 flex text-center justify-center items-center  mx-auto relative">
      <div className="text-center my-2 px-6 border-r-2 border-r-slate-400 relative">
        <div className="absolute content-none top-[-10px] left-0 w-[101%] h-2 bg-green-700  "></div>
        <h4>Income</h4>
        <p className="text-green-700 text-lg">${income}</p>
      </div>

      <div className="text-center my-2 px-6 relative  ">
        <div className="absolute content-none top-[-10px] left-[-1px] w-[101%] h-2 bg-red-700  "></div>
        <h4>Expense</h4>
        <p className="text-red-700 text-lg">${Math.abs(expenses)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
