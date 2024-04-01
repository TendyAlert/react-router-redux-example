import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../../actions/action_creators';

export default function ExpenseRows() {
    const expenses = useSelector(state => state.expenses);
    const dispatch = useDispatch();

    const handleDelete = (event) => {
      event.preventDefault();
      const targetKey = event.target.dataset.id
      dispatch(deleteExpense(targetKey))
      
    }

    const { id } = useParams();
    const expenseType = id ?? 'All';
    
    const tableRows = expenses
    .filter( expense => String(expense.id) === expenseType || expenseType === 'All')
    .map( expense => (
        <tr key={expense.id}>
            <td>{ expense.id }</td>
            <td>{ expense.itemName }</td>
            <td>${ expense.itemPrice / 100 }</td>
            <td>{ expense.quantity }</td>
            <td>{ expense.itemPrice * expense.quantity }</td>
            <td><Link to={"/list/" + expense.id}>View</Link></td>
            <td><button onClick={handleDelete} data-id={expense.id}>Delete</button></td>
        </tr>
    ))
  return (
    <tbody>
        {tableRows}
    </tbody>
  )
}
