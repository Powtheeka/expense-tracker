export default function ExportCSV({ expenses }) {
  const exportCSV = () => {
    const csv =
      "Name,Amount,Category\n" +
      expenses.map((e) => `${e.name},${e.amount},${e.category}`).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);
    link.download = "expenses.csv";
    link.click();
  };

  return (
    <button
      onClick={exportCSV}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-md"
    >
      Export CSV ⬇
    </button>
  );
}