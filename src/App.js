import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import AccountsSummar from "./Components/AccountsSummary";
import TransactionHistory from "./Components/TransactionHistory";
import AddTransactions from "./Components/AddTransactions";
import { GlobalProvide } from "./Context/GlobalState";

function App() {
  return (
    <GlobalProvide>
      <Header />
      <div className="container">
        <Balance />
        <AccountsSummar />
        <TransactionHistory />
        <AddTransactions />
      </div>
    </GlobalProvide>
  );
}

export default App;
