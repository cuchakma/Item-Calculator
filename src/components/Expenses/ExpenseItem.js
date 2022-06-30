import React, {useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [expenseTitle, setTitle] = useState(props.expenseTitle); 

    const clickHandler = (e) => {
        setTitle('Hello');
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expenseDate}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>Amount : ${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;