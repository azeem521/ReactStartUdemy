import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {

  const [filteredYear,setFilteredYear]=useState('2020');

  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  };

  const filteredExpenses=props.item.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  let expensesContent=<p>No expense found.</p>;
  if(filteredExpenses.length===1){
    
    expensesContent=
    
    filteredExpenses.map((expense)=>(
      <ExpenseItem 
      key={ expense.id }
      date={ expense.date } 
      title={ expense.title } 
      amount={ expense.amount } 
      />
      
     ))
   }
   if(filteredExpenses.length>1){
    expensesContent=filteredExpenses.map((expense)=>(
      <ExpenseItem 
      key={ expense.id }
      date={ expense.date } 
      title={ expense.title } 
      amount={ expense.amount } />
      
     ))
   }


  return (
    <Card className="expenses">
      <ExpenseFilter
       selected={filteredYear}
       onChangeFilter={filterChangeHandler}
         />

    {expensesContent}
    {filteredExpenses.length===1 ? (<p>Only single Expense here. Please add more...</p>) : ''}
         
         
         
    </Card>
  );
}

export default Expenses