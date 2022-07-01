import ExpenseItem from './components/Expenses/ExpenseItem';
import Card from './components/UI/Card';
import './components/Expenses/Expense.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import './components/Expenses/ExpenseFilter.css';

const App = () => {
  const expenses = [
    { id:'1', title: 'Toilet Paper', date:new Date(2022, 6, 30), amount:294.67 },
    { id:'2', title: 'Tooth Bursh', date:new Date(2022, 6, 30), amount:294.67 },
    { id:'3', title: 'Deer Skin', date:new Date(2022, 6, 30), amount:294.67 },
    { id:'4', title: 'Merlin\'s Beard', date:new Date(2022, 6, 30), amount:294.67 }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense); 
  }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Card className='expenses'>
          <ExpenseFilter />
          { expenses.map( (value) => {
            return <ExpenseItem key={value.id} expenseTitle={value.title} expenseDate={value.date} amount={value.amount}/>
          }) }
        </Card>
    </div>
  );
}

export default App;
