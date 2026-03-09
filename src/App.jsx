import { useEffect, useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import Summary from "./components/Summary";
import ExpenseList from "./components/ExpenseList";
import FilterBar from "./components/FilterBar";
import ExportCSV from "./components/ExportCSV";

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  // ✅ Load expenses from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("expenses"));
    if (saved) setExpenses(saved);
  }, []);

  // ✅ Save expenses to localStorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // ✅ Add Expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  // ✅ Delete Expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  // ✅ Filter expenses by category
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-400 to-blue-500 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* ✅ Header */}
        <div className="px-8 py-5 bg-gradient-to-r from-blue-600 to-purple-600">
          <h1 className="text-4xl font-extrabold text-white tracking-wide">
            Expense Tracker 💰
          </h1>
          <p className="text-sm text-white/80 mt-1">
            Track your daily spending with date-wise entries
          </p>
        </div>

        {/* ✅ Main Content */}
        <div className="p-8 space-y-8">

          {/* ✅ Expense Form (now includes Date input) */}
          <ExpenseForm addExpense={addExpense} />

          {/* ✅ Total Summary */}
          <Summary expenses={expenses} />

          {/* ✅ Filter + Export */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
            <FilterBar filter={filter} setFilter={setFilter} />
            <ExportCSV expenses={expenses} />
          </div>

          {/* ✅ Expense List (shows Date + Delete option) */}
          <ExpenseList
            expenses={filteredExpenses}
            deleteExpense={deleteExpense}
          />
        </div>
      </div>
    </div>
  );
}