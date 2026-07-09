import useLocalStorage from "./hooks/useLocalStorage";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Summary from "./components/Summary";
import "./App.css";

export default function App(){
  const [ expenses, setExpenses] = useLocalStorage("expenses", []);
  const { theme, toggleTheme } = useContext(ThemeContext);
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
    <div className={`app ${theme}`}>
       <div className="header">
      <button className="theme-btn" onClick={toggleTheme}>
    {theme === "light"
        ? "🌙 Dark"
        : "☀ Light"}
</button>
</div>
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense = {addExpense}/>
      <Summary expenses={expenses} />
      <ExpenseList
           expenses={expenses}
           deleteExpense={deleteExpense}
      />
    </div>
  );
}