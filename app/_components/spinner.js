export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
}
