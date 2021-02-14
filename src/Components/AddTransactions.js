import React, { useState } from "react";

function AddTransactions() {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmFor="description">Description</label>
          <input
            type="text"
            id="description"
            placeholder="Detail of Transaction"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmFor="transactionamount">Transaction Amount</label>
          <input
            type="text"
            id="transactionamount"
            placeholder="Enter transaction amount"
            value={transactionAmount}
            onChange={(e) => {
              setTransactionAmount(e.target.value);
            }}
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}

export default AddTransactions;
