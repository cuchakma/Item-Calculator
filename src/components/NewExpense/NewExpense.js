import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [showForm, hideForm] = useState(false);

    const openForm = (event) => {
        hideForm(true);
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            {! showForm && <button type="submit" onClick={openForm}>Add Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideForm}/>}
        </div>
    );
}

export default NewExpense;