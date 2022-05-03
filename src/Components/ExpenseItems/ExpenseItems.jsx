import React, { useEffect, useState } from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'

const ExpenseItems = (props) => {
  const [expenseData,setExpenseData] = useState()
  
  useEffect(() => {
    fetch('http://localhost:3030/expense')
      .then((response) => {
        return response.json()
      })
      .then((expense) => {
        setExpenseData(expense)
      })
      .catch((error) => {
        console.error(error)
      })
  
  },
    [])
 
  return (
    <>
      <div className='expense-item'>
        {/* <ExpenseDate /> */}
        <h2>Expense Tracker</h2>
      </div>
      {expenseData &&
        expenseData.map((expenses) => (
          <div className='expense-item' key={expenses.id}>
            <div >{expenses.date}</div>
            <div className='expense-item__description'>
              <h2>{expenses.title} </h2>
              <div className='expense-item__price'>${expenses.amount}</div>
            </div>
          </div>
        ))}
    </>
  )
}

export default ExpenseItems

 