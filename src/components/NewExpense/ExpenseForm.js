import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    
    const [title,settitle]=useState('')
const [date,setdate]=useState('')
const [amount,setamount]=useState('')
    
    const changeHandelerTitle =(e)=>{
        settitle(e.target.value);
    }
    const changeHandelerAmount =(e)=>{
        setamount(e.target.value);
    }
    const changeHandelerDate =(e)=>{
        setdate(e.target.value);
    }

    const submit =(e)=>{
        e.preventDefault();
        const NewData={
            title:title,
            amount:amount,
            date:new Date(date)
        }

        props.onSaveExpenseData(NewData)

        // console.log(NewData);

        settitle('')
        setamount('')
        setdate('')
    }

  return (
   
        <form onSubmit={submit}>

        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={title} onChange={ changeHandelerTitle }  />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={amount} onChange={changeHandelerAmount} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' value={date} onChange={changeHandelerDate} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
        </form>
    
  )
}

export default ExpenseForm