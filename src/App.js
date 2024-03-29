import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import Home from './components/Home/Home';
import ListExpenses from './components/List Expenses/ListExpenses';
import NewExpenses from './components/New Expenses/NewExpenses';

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">New Expense</Link></li>
          <li><Link to="/list">List Expenses</Link></li>
        </ul>
        <Routes>
          <Route path='/new' Component={NewExpenses} />
          <Route path='/list/:id' Component={ListExpenses} />
          <Route path='/list' Component={ListExpenses} />
          <Route Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
