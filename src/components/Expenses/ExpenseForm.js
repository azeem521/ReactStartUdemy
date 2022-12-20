import React, { useState } from 'react'

const ExpenseForm = () => {
    
    const [title,settitle]=useState('')
const [date,setdate]=useState('')
const [amount,setamount]=useState('')
    
    const changeHandelerTitle =(e)=>{
        // console.log('changed', e.target.value);
        settitle(e.target.value);
        // console.log(title);
    }
    const changeHandelerAmount =(e)=>{
        setamount(e.target.value);
    }
    const changeHandelerDate =(e)=>{
        setdate(e.target.value);
    }

    const submit =(e)=>{
        e.preventDefault();
        console.log(date);
        console.log(title);
        console.log(amount);
    }

  return (
    <div >
        <label>Title</label>
        <input type='text' value={title} onChange={changeHandelerTitle} />
        <label>Date</label>
        <input type='date' value={date} onChange={changeHandelerDate} />
        <label>Amount</label>
        <input type='number' value={amount} onChange={changeHandelerAmount} />
        <button onClick={submit} >See in console</button>
    </div>
  )
}

export default ExpenseForm