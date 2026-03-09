import { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount || !date) return;

    addExpense({
      id: Date.now(),
      name,
      amount: Number(amount),
      category,
      date,
    });

    setName("");
    setAmount("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg space-y-4 border"
    >
      <h2 className="text-xl font-bold text-gray-800">
        Add New Expense
      </h2>

      <div className="grid sm:grid-cols-4 gap-3">
        <input
          type="text"
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded-lg border w-full focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="number"
          placeholder="Amount ₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="p-2 rounded-lg border w-full focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-lg border w-full focus:ring-2 focus:ring-blue-400"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded-lg border w-full focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl font-semibold">
        Add Expense
      </button>
    </form>
  );
}