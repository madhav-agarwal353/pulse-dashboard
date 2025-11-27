export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-white p-4 shadow rounded-xl">
      <input
        type="text"
        placeholder="Search..."
        className="w-1/3 px-4 py-2 border rounded-xl shadow-sm"
      />
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-400 rounded-full" />
        <p className="font-semibold">Dylan Hunter</p>
      </div>
    </header>
  );
}