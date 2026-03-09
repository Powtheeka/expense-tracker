import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-300">
        No expenses added yet 🚫
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
}