import Card from './components/UI/Card';
import './components/Expenses/Expense.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import './components/Expenses/ExpenseFilter.css';
import ExpensesList from './components/Expenses/ExpensesList';
import { useState } from 'react';

const DUMMY_EXPENSE = [
  { id:'1', title: 'Toilet Paper', date:new Date(2019, 6, 30), amount:294.67 },
  { id:'2', title: 'Tooth Bursh', date:new Date(2022, 6, 30), amount:294.67 },
  { id:'3', title: 'Deer Skin', date:new Date(2022, 6, 30), amount:294.67 },
  { id:'4', title: 'Merlin\'s Beard', date:new Date(2022, 6, 30), amount:294.67 }
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const [filteredYear, setFilteredYear] = useState('2022');

  const addExpenseHandler = (expense) => {
      setExpenses( previousExpense => {
        return [expense, ...previousExpense]
      } );
  }

  const filteredChangeYear = (year) => {
      setFilteredYear(year);    
  }

  const filteredExpenses = expenses.filter( (currentValue) => {
      return filteredYear === currentValue.date.getFullYear().toString()
  });

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Card className='expenses'>
          <ExpenseFilter selected={filteredYear} onYearChangeFilter={filteredChangeYear}/>
          <ExpensesList filteredExpenses={filteredExpenses}/>
        </Card>
    </div>
  );
}

export default App;
