import ExpenseCard from "./ExpenseCard";

export default function ExpenseList({ expenses, deleteExpense }){
    if(expenses.length === 0){
        return(
            <div className="empty-state">
                <h2>📭</h2>
                <p>No Expenses Yet</p>
            </div>
        );
    }
    return(
        <div>
            {expenses.map((expense)=>(
                <ExpenseCard // it will depkay the expensecard
                key={expense.id}
                expense={expense}
                deleteExpense={deleteExpense}
                />
            ))}
        </div>
    );
}