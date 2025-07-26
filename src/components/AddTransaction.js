import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  function onSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      amount: +amount,
      id: crypto.randomUUID(),
      text,
    };
    addTransaction(newTransaction);
    setAmount("");
    setText("");
  }
  return (
    <div>
      <h3 className="capitalize font-semibold text-xl pb-2 mt-4 mb-4 border-b-2 border-b-slate-400">
        Add New Transaction
      </h3>
      <form on onSubmit={onSubmit}>
        <div className="relative mb-4">
          <input
            type="text "
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text...."
            className="block w-full  p-3 outline-none  border-2 bg-transparent border-slate-400 rounded-md"
          />
          <span className=" absolute top-[-12px] left-4 bg-slate-50 px-2">
            {" "}
            text
          </span>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className=" font-medium">
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            name="amount"
            placeholder="Enter amount...."
            className="block w-full mt-2  p-3 outline-none  border-2 border-slate-400 rounded-md"
          />
        </div>
        <button
          className="text-center w-full bg-slate-700 text-slate-100 border-0 py-2 px-4 rounded-md"
          onClick={onSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTransaction;
