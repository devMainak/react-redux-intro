import { useState } from 'react'

const IncomeExpenseForm = () => {
  const [amount, setAmount] = useState(0)

  const handleAddIncome = () => {
    
  }

  const handleAddExpense = () => {
    
  }
  
  return (
    <div>
      <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  )
}

export default IncomeExpenseForm