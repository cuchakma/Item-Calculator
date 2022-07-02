import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if( props.filteredExpenses.length == 0 ) {
        return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
    }

    return <ul className='expenses-list'>
            { props.filteredExpenses.map( (value) => {
                return <ExpenseItem key={value.id} expenseTitle={value.title} expenseDate={value.date} amount={value.amount}/>
            })}
          </ul>;

}

export default ExpensesList;