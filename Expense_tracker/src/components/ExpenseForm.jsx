import { useState } from "react";

export default function ExpenseForm({addExpense}){ // dont forget to destructure
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Food");

    function handleAdd() {
        if(amount.trim === "") return;
        addExpense(amount, category);

        setAmount("");
        setCategory("Food");

    }
    return(
        <div className="expense-form">
        <h1>Amount</h1>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="enter amount.."/>
        <h1>Category</h1>
        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
            <option value="Others">Others</option>
        </select>
        <button onClick={handleAdd}>
            Add Expense
        </button>
        </div>
    );
}