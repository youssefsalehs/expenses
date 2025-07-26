import { useContext } from "react";
import Transaction from "./Transaction";
import { GlobalContext } from "../context/GlobalState";

function List() {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div className="mt-4 ">
      <h3 className="capitalize font-semibold text-xl pb-2 mb-2 border-b-2 border-b-slate-400  ">
        Transactions
      </h3>
      <ul className="max-h-[160px] overflow-y-auto ">
        {transactions.length === 0 && (
          <div className="text-center text-gray-500  py-5">
            <div className="text-5xl mb-4">📦</div>
            <p className="text-lg font-medium">No transactions yet</p>
            <p className="text-sm">Add a new transaction to get started ✨</p>
          </div>
        )}

        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default List;
