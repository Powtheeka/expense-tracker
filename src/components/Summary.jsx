export default function Summary({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-lg font-semibold">Total Expense</h2>
      <p className="text-4xl font-bold mt-2">₹{total}</p>
    </div>
  );
}