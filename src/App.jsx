import React, { useState } from 'react';
    import ExpensesTable from './ExpensesTable';
    import { v4 as uuidv4 } from 'uuid';
    import {
      BrowserRouter as Router,
      Route,
      Routes,
      Link,
      Navigate,
    } from 'react-router-dom';
    import AccountingTable from './AccountingTable';
    import LoginPage from './LoginPage';

    function App() {
      const initialData = [
        {
          id: uuidv4(),
          month: 'JANUARY',
          stationeryExpenses: '',
          pettyCash: '',
          database: '1500',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'FEBRUARY',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'MARCH',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'APRIL',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'MAY',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'JUNE',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'JULY',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '6000',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '44900',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '7298',
          bankCharges: '',
          others: '2950',
          remarks: 'LICENSE RENEWAL',
        },
        {
          id: uuidv4(),
          month: 'AUGUST',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '7200',
          bankCharges: '',
          others: '319',
          remarks: 'NAME BOARD + NOC CHARGES',
        },
        {
          id: uuidv4(),
          month: 'SEPTEMBER',
          stationeryExpenses: '',
          pettyCash: '500',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'OCTOBER',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '986',
          electricity: '3769',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '985',
          bankCharges: '',
          others: '581',
          remarks: 'ESTABLISHMENT CARD',
        },
        {
          id: uuidv4(),
          month: 'NOVEMBER',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
        {
          id: uuidv4(),
          month: 'DECEMBER',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        },
      ];

      const [data, setData] = useState(initialData);
      const [newRow, setNewRow] = useState({
        month: '',
        stationeryExpenses: '',
        pettyCash: '',
        database: '',
        commission: '',
        etisalat: '',
        electricity: '',
        visaAndInsurance: '',
        vat: '',
        rent: '',
        advertisement: '',
        carMaintenance: '',
        assetPurchase: '',
        bankCharges: '',
        others: '',
        remarks: '',
      });
      const [accountingData, setAccountingData] = useState([
        {
          id: uuidv4(),
          date: '2024-01-01',
          projectName: 'Project A',
          category: 'Office Supplies',
          description: 'Pens and paper',
          modeOfPayment: 'Cash',
          debit: '100',
          credit: '0',
          balance: '100',
        },
        {
          id: uuidv4(),
          date: '2024-01-05',
          projectName: 'Project B',
          category: 'Travel',
          description: 'Taxi fare',
          modeOfPayment: 'Card',
          debit: '50',
          credit: '0',
          balance: '150',
        },
      ]);
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const handleLogin = () => {
        setIsLoggedIn(true);
      };

      const handleInputChange = (e) => {
        setNewRow({ ...newRow, [e.target.name]: e.target.value });
      };

      const handleAddRow = () => {
        const newRowWithId = { ...newRow, id: uuidv4() };
        setData([...data, newRowWithId]);
        setNewRow({
          month: '',
          stationeryExpenses: '',
          pettyCash: '',
          database: '',
          commission: '',
          etisalat: '',
          electricity: '',
          visaAndInsurance: '',
          vat: '',
          rent: '',
          advertisement: '',
          carMaintenance: '',
          assetPurchase: '',
          bankCharges: '',
          others: '',
          remarks: '',
        });
      };

      const handleRemoveRow = (id) => {
        setData(data.filter((row) => row.id !== id));
      };
      const handleAccountingRemoveRow = (id) => {
        setAccountingData(accountingData.filter((row) => row.id !== id));
      };

      const handleEditCell = (id, field, value) => {
        setData((prevData) =>
          prevData.map((row) =>
            row.id === id ? { ...row, [field]: value } : row,
          ),
        );
      };
      const handleAccountingEditCell = (id, field, value) => {
        setAccountingData((prevData) =>
          prevData.map((row) =>
            row.id === id ? { ...row, [field]: value } : row,
          ),
        );
      };

      const calculateTotals = () => {
        const totals = {
          stationeryExpenses: 0,
          pettyCash: 0,
          database: 0,
          commission: 0,
          etisalat: 0,
          electricity: 0,
          visaAndInsurance: 0,
          vat: 0,
          rent: 0,
          advertisement: 0,
          carMaintenance: 0,
          assetPurchase: 0,
          bankCharges: 0,
          others: 0,
        };

        data.forEach((row) => {
          for (const key in totals) {
            if (row[key] && !isNaN(parseFloat(row[key]))) {
              totals[key] += parseFloat(row[key]);
            }
          }
        });
        return totals;
      };

      const totals = calculateTotals();

      const AuthRoute = ({ children }) => {
        return isLoggedIn ? children : <Navigate to="/login" />;
      };

      return (
        <Router>
          <div>
            {isLoggedIn && (
              <nav>
                <ul>
                  <li>
                    <Link to="/">Expenses Sheet</Link>
                  </li>
                  <li>
                    <Link to="/accounting">Accounting Sheet</Link>
                  </li>
                </ul>
              </nav>
            )}
            <Routes>
              <Route
                path="/login"
                element={<LoginPage onLogin={handleLogin} />}
              />
              <Route
                path="/"
                element={
                  <AuthRoute>
                    <div>
                      <h1>OFFICE EXPENSES (AL HOSN REAL ESTATE DUBAI)</h1>
                      <div className="input-container">
                        <input
                          type="text"
                          name="month"
                          placeholder="Month"
                          value={newRow.month}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="stationeryExpenses"
                          placeholder="Stationery Expenses"
                          value={newRow.stationeryExpenses}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="pettyCash"
                          placeholder="Petty Cash"
                          value={newRow.pettyCash}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="database"
                          placeholder="Database"
                          value={newRow.database}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="commission"
                          placeholder="Commission"
                          value={newRow.commission}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="etisalat"
                          placeholder="Etisalat"
                          value={newRow.etisalat}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="electricity"
                          placeholder="Electricity"
                          value={newRow.electricity}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="visaAndInsurance"
                          placeholder="Visa & Insurance"
                          value={newRow.visaAndInsurance}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="vat"
                          placeholder="VAT"
                          value={newRow.vat}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="rent"
                          placeholder="Rent"
                          value={newRow.rent}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="advertisement"
                          placeholder="Advertisement"
                          value={newRow.advertisement}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="carMaintenance"
                          placeholder="Car Maintenance"
                          value={newRow.carMaintenance}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="assetPurchase"
                          placeholder="Asset Purchase"
                          value={newRow.assetPurchase}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="bankCharges"
                          placeholder="Bank Charges"
                          value={newRow.bankCharges}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="others"
                          placeholder="Others"
                          value={newRow.others}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="remarks"
                          placeholder="Remarks"
                          value={newRow.remarks}
                          onChange={handleInputChange}
                        />
                        <button onClick={handleAddRow}>Add Row</button>
                      </div>
                      <ExpensesTable
                        data={data}
                        onRemoveRow={handleRemoveRow}
                        totals={totals}
                        onEditCell={handleEditCell}
                      />
                    </div>
                  </AuthRoute>
                }
              />
              <Route
                path="/accounting"
                element={
                  <AuthRoute>
                    <div>
                      <h1>Accounting Sheet</h1>
                      <AccountingTable
                        data={accountingData}
                        onRemoveRow={handleAccountingRemoveRow}
                        onEditCell={handleAccountingEditCell}
                      />
                    </div>
                  </AuthRoute>
                }
              />
            </Routes>
          </div>
        </Router>
      );
    }

    export default App;
