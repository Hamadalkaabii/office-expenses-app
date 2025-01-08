import React from 'react';

    function AccountingTable({ data, onRemoveRow }) {
      return (
        <table>
          <thead>
            <tr>
              <th>SI NO.</th>
              <th>DATE</th>
              <th>PROJECT NAME</th>
              <th>CATEGORY</th>
              <th>DESCRIPTION</th>
              <th>MODE OF PAYMENT</th>
              <th>DEBIT</th>
              <th>CREDIT</th>
              <th>BALANCE</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.date}</td>
                <td>{row.projectName}</td>
                <td>{row.category}</td>
                <td>{row.description}</td>
                <td>{row.modeOfPayment}</td>
                <td>{row.debit}</td>
                <td>{row.credit}</td>
                <td>{row.balance}</td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => onRemoveRow(row.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }

    export default AccountingTable;
