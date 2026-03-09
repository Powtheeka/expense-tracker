export default function FilterBar({ filter, setFilter }) {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="p-2 rounded-xl border shadow-sm"
    >
      <option value="All">All Categories</option>
      <option value="Food">Food</option>
      <option value="Travel">Travel</option>
      <option value="Shopping">Shopping</option>
      <option value="Other">Other</option>
    </select>
  );
}