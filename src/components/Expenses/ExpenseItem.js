import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    let date=props.date;
    let title=props.title;
    const amount=props.amount

    const [price,setPrice]=useState(amount);

    const DeleteButton =()=>{
      setPrice('');
    }

  return (
    <Card className='expense-item'>
        <ExpenseDate date={date}/>
    <div className='expense-item__description'>
        <h2>{title}</h2>
    </div>
    <div className='expense-item__price'>${price}</div>
    <button onClick={DeleteButton}>Delete Expense</button>
    </Card>
  )
}

export default ExpenseItem