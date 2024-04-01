import React from 'react';
import { useParams } from 'react-router-dom';
import ExpenseRows from '../ExpenseRows/ExpenseRows';


export default function ListExpenses() {
  
  const { id } = useParams();
  const expenseType = id ?? 'All';

  return (
    <div>
      <h2>List Expenses ({ expenseType })</h2>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Quantity</th>
              <th>Total Proce</th>
              <th>View Item</th>
              <th>Delete</th>
            </tr>
          </thead>
            <ExpenseRows />
        </table>
    
    </div>
    
  );
}
