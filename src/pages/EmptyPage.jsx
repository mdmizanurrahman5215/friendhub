export default function EmptyPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 border border-gray-200">
      <div className="container mx-auto max-w-[90%] flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold text-[#244D3F]">Nothing Here 😶</h1>

        <p className="text-gray-500 mt-3 max-w-md text-center">
          This page is empty. There is currently no content available.
        </p>
      </div>
    </div>
  );
}
