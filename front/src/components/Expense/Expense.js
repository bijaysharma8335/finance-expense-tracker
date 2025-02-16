import React from 'react'
import ExpenseForm from './ExpenseForm'
import ViewExpense from './ViewExpense'

const Expense = () => {
  return (
    <div>
       <h1 className="text-2xl font-bold mb-4"> Expense Management</h1>
      <ExpenseForm/>
      <ViewExpense/>
    </div>
  )
}

export default Expense
