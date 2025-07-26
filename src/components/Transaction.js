import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const { text, amount } = transaction;
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li
      className={`group bg-slate-200 p-3 pl-10 flex justify-between rounded-md border-r-[5px] relative ${
        amount < 0 ? "border-r-red-700" : "border-r-green-700"
      } mb-2`}
    >
      {text}{" "}
      <span>
        {amount < 0 ? "-" : "+"} ${Math.abs(amount)}
      </span>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-red-300 hover:bg-red-400 text-white px-2 rounded transition-all duration-300"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}

export default Transaction;
