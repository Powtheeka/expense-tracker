export default function ExpenseItem({ expense, deleteExpense }) {
  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-md border">
      <div>
        <h3 className="font-bold text-gray-800">{expense.name}</h3>

        <p className="text-sm text-gray-600">
          ₹{expense.amount} • {expense.category}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          📅 {expense.date}
        </p>
      </div>

      <button
        onClick={() => deleteExpense(expense.id)}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl"
      >
        Delete
      </button>
    </div>
  );
}