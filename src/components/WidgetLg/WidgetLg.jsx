import React, { useEffect, useState } from "react";
import "./WidgetLg.css";

function WidgetLg() {
  const [transactions, setTransactions] = useState([]);

  const Button = ({ type }) => {
    return <button className={"WidgetLgButton " + type}>{type}</button>;
  };

  useEffect(() => {
    fetch(
      "https://dashborad-1910f-default-rtdb.firebaseio.com/transactions.json"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTransactions(data);
        // console.log(transactions);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [transactions]);

  useEffect(() => {}, [transactions]);

  return (
    <div className="WidgetLg">
      <h3 className="WidgetLgTitle">Latest TransActions</h3>
      <table className="WidgetLgTable">
        <tr className="WidgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amount</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        {transactions.map((transaction) => (
          <>
            <tr className="WidgetLgTr">
              <td className="WidgetLgUser">
                <img src="avatar.jpg" className="WidgetLgImg" />
                <span className="WidgetLgName">{transaction.customer}</span>
              </td>
              <td className="WidgetLgDate">{transaction.data}</td>
              <td className="WidgetLgAmount">{transaction.amount}</td>
              <td className="WidgetLgStatus">
                <Button type={transaction.status} />
              </td>
            </tr>
          </>
        ))}
      </table>
    </div>
  );
}

export default WidgetLg;
