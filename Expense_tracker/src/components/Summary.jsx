export default function Summary({ expenses }) {

    const totalExpense = expenses.reduce(
        (sum, expense)=> sum+expense.amount, 0
    );
    return (
        <div className="summary">

            <h2>💵 Total Expenses</h2>

            <h1>₹ {totalExpense}</h1>

        </div>
    );
}