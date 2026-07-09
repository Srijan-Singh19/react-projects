export default function ExpenseCard({ expense, deleteExpense }) {
    return (
        <div className="expense-card">

            <h2>₹ {expense.amount}</h2>

            <p>{expense.category}</p>

            <p>{expense.date}</p>

            <button onClick={() => deleteExpense(expense.id)}>
                Delete
            </button>

        </div>
    );
}