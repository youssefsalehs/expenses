import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import List from "./components/List";
import "./index.css";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="flex  items-start justify-center bg-slate-50 text-slate-900 ">
        <div className="flex flex-col justify-center w-full sm:w-[50%] md:w-[40%] lg:w-[30%]  py-4 px-10 ">
          <Header />
          <Balance />
          <IncomeExpenses />
          <List />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
