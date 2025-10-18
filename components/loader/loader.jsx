export function Loader() {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div
        className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin"
        role="status"
      >
        <span className="sr-only">Загрузка...</span>
      </div>
    </div>
  );
}
