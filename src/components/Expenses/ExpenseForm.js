import React, { useState } from 'react'

const ExpenseForm = () => {
    
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
            date:date
        }
        console.log(NewData);
        settitle('')
        setamount('')
        setdate('')
    }

  return (
    <div >
        <form onSubmit={submit}>
        <label>Title</label>
        <input type='text' value={title} onChange={changeHandelerTitle} />
        <label>Date</label>
        <input type='date' value={date} onChange={changeHandelerDate} />
        <label>Amount</label>
        <input type='number' value={amount} onChange={changeHandelerAmount} />
        <button >Save</button>
        </form>
    </div>
  )
}

export default ExpenseForm