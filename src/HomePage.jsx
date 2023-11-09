import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to the MuscleMentor Fitness App</h1>
        <p className="text-center text-gray-600">Get started with your fitness journey today!</p>
        <div className="flex flex-col space-y-4">
          <Link to="/login" className="w-full bg-blue-500 text-white p-3 rounded-md text-center hover:bg-blue-700">
            Login
          </Link>
          <Link to="/signup" className="w-full bg-green-500 text-white p-3 rounded-md text-center hover:bg-green-700">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
