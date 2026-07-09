import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
// import Summary from "./components/Summary";
import "./App.css";

export default function App(){
  const [ expenses, setExpenses] = useState([]);
  function addExpense(amount, category){
    const expense ={
      id:Date.now(),
      amount:Number(amount),
      category,
      date: new Date().toLocaleDateString()
    };
    setExpenses([...expenses,expense]);
  }

  function deleteExpense(id) {
    setExpenses(
      expenses.filter((expense)=> expense.id!== id)
    );
  }

  return(
    <div className="app">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense = {addExpense}/>
      <ExpenseList
           expenses={expenses}
           deleteExpense={deleteExpense}
      />
    </div>
  );
}