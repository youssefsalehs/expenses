import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const totalBalance = amounts.reduce((acc, amount) => acc + amount, 0);
  return (
    <div className="mb-4">
      <h4 className=" uppercase">your balance</h4>
      <p className="text-3xl font-semibold">${totalBalance}</p>
    </div>
  );
}

export default Balance;
