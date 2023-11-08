import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between max-w-4xl mx-auto p-4">
        <div className="flex items-center">
          <Link to="/" className="mr-4 text-lg font-semibold hover:text-gray-300">
            Home
          </Link>
          <Link to="/signup" className="mr-4 text-lg font-semibold hover:text-gray-300">
            Signup
          </Link>
          <Link to="/login" className="mr-4 text-lg font-semibold hover:text-gray-300">
            Login
          </Link>
          <Link to="/logout" className="mr-4 text-lg font-semibold hover:text-gray-300">
            Logout
          </Link>
          <Link to="/exercisenew" className="mr-4 text-lg font-semibold hover:text-gray-300">
            New Exercise
          </Link>
          <Link to="/exerciseindex" className="mr-4 text-lg font-semibold hover:text-gray-300">
            All Exercises
          </Link>
          <Link to="/workoutsindex" className="mr-4 text-lg font-semibold hover:text-gray-300">
            All Workouts
          </Link>
        </div>
      </nav>
    </header>
  );
}
