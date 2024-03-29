import React from 'react';
import { useParams } from 'react-router-dom';

export default function ListExpenses(props) {
    const { id } = useParams();

    const expenseType = id ?? 'All'
  return (
    <div>List Expenses ({ expenseType })</div>
  );
}
