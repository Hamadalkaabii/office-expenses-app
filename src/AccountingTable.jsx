import React from 'react';

    function AccountingTable({ data, onRemoveRow, onEditCell }) {
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
                <td
                  contentEditable
                  onBlur={(e) => onEditCell(row.id, 'date', e.target.innerText)}
                >
                  {row.date}
                </td>
                <td
                  contentEditable
                  onBlur={(e) =>
                    onEditCell(row.id, 'projectName', e.target.innerText)
                  }
                >
                  {row.projectName}
                </td>
                <td
                  contentEditable
                  onBlur={(e) =>
                    onEditCell(row.id, 'category', e.target.innerText)
                  }
                >
                  {row.category}
                </td>
                <td
                  contentEditable
                  onBlur={(e) =>
                    onEditCell(row.id, 'description', e.target.innerText)
                  }
                >
                  {row.description}
                </td>
                <td
                  contentEditable
                  onBlur={(e) =>
                    onEditCell(row.id, 'modeOfPayment', e.target.innerText)
                  }
                >
                  {row.modeOfPayment}
                </td>
                <td
                  contentEditable
                  onBlur={(e) =>
                    onEditCell(row.id, 'debit', e.target.innerText)
                  }
                >
                  {row.debit}
                </td>
                <td
                  contentEditable
                  onBlur={(e) =>
                    onEditCell(row.id, 'credit', e.target.innerText)
                  }
                >
                  {row.credit}
                </td>
                <td
                  contentEditable
                  onBlur={(e) =>
                    onEditCell(row.id, 'balance', e.target.innerText)
                  }
                >
                  {row.balance}
                </td>
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
