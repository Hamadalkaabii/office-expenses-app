import React from 'react';

    function ExpensesTable({ data, onRemoveRow, totals, onEditCell }) {
      const columns = [
        'month',
        'stationeryExpenses',
        'pettyCash',
        'database',
        'commission',
        'etisalat',
        'electricity',
        'visaAndInsurance',
        'vat',
        'rent',
        'advertisement',
        'carMaintenance',
        'assetPurchase',
        'bankCharges',
        'others',
        'remarks',
      ];

      const calculateRowTotal = (row) => {
        let total = 0;
        columns.slice(1, -1).forEach((col) => {
          if (row[col] && !isNaN(parseFloat(row[col]))) {
            total += parseFloat(row[col]);
          }
        });
        return total;
      };

      return (
        <table>
          <thead>
            <tr>
              <th>SI NO.</th>
              {columns.map((column) => (
                <th key={column}>{column.toUpperCase()}</th>
              ))}
              <th>TOTAL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                {columns.map((column) => (
                  <td
                    key={column}
                    contentEditable
                    onBlur={(e) => onEditCell(row.id, column, e.target.innerText)}
                  >
                    {row[column]}
                  </td>
                ))}
                <td>{calculateRowTotal(row)}</td>
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
            <tr className="total-row">
              <td></td>
              <td>TOTAL IN 2024</td>
              {columns.slice(1).map((column) => (
                <td key={column}>{totals[column] || '-'}</td>
              ))}
              <td>
                {Object.values(totals).reduce(
                  (acc, val) => acc + (isNaN(val) ? 0 : val),
                  0,
                )}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      );
    }

    export default ExpensesTable;
