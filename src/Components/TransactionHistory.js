import React, { useContext } from "react";

// import the global context
import { GlobalContext } from "../Context/GlobalState";

// import Transaction
import Transaction from "./Transaction";

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
