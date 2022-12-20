import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    let date=props.date;
    let title=props.title;
    const amount=props.amount

  return (
    <Card className='expense-item'>
        <ExpenseDate date={date}/>
    <div className='expense-item__description'>
        <h2>{title}</h2>
    </div>
    <div className='expense-item__price'>${amount}</div>
    </Card>
  )
}

export default ExpenseItem