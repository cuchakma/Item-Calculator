import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';
import './components/Expense.css';

function App() {
  const expenses = [
    { id:'1', title: 'Toilet Paper', date:new Date(2022, 6, 30), amount:294.67 },
    { id:'2', title: 'Tooth Bursh', date:new Date(2022, 6, 30), amount:294.67 },
    { id:'3', title: 'Deer Skin', date:new Date(2022, 6, 30), amount:294.67 },
    { id:'4', title: 'Merlin\'s Beard', date:new Date(2022, 6, 30), amount:294.67 }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
        <Card className='expenses'>
          { expenses.map( (value) => {
            return <ExpenseItem key={value.id} expenseTitle={value.title} expenseDate={value.date} amount={value.amount}/>
          }) }
        </Card>
    </div>
  );
}

export default App;
