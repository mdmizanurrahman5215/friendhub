import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-7xl font-bold text-[#244D3F]">404</h1>

      <h2 className="text-2xl font-semibold mt-4 text-gray-700">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-lg hover:bg-[#1d3b31] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}