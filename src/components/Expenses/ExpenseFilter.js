import React, {useState} from 'react';

const ExpenseFilter = (props) => {

    const selectedYear = (event)  => {
        props.onYearChangeFilter(event.target.value);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                    <select onChange={selectedYear}>
                        <option value='2022' key={1}>2022</option>
                        <option value='2021' key={2}>2021</option>
                        <option value='2020' key={3}>2020</option>
                        <option value='2019' key={4}>2019</option>
                    </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;