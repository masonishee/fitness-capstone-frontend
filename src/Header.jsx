import { Link } from "react-router-dom";

export function Header() {
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.href = "/login";
  };

  return (
    <header className="bg-gray-800 text-white">
      <nav className="flex items-center justify-between max-w-4xl mx-auto p-4">
        <div className="flex items-center">
          <Link to="/HomePage" className="mr-4 text-lg font-semibold hover:text-gray-300">
            Home
          </Link>
          <Link to="/signup" className="mr-4 text-lg font-semibold hover:text-gray-300">
            Signup
          </Link>
          <Link to="/login" className="mr-4 text-lg font-semibold hover:text-gray-300">
            Login
          </Link>
          <a
            onClick={handleLogout}
            className="mr-4 text-lg font-semibold hover:text-gray-300"
            style={{ cursor: "pointer" }}
          >
            Logout
          </a>
          <Link to="/exercisenew" className="mr-4 text-lg font-semibold hover:text-gray-300">
            New Exercise
          </Link>
          <Link to="/routinesnew" className="mr-4 text-lg font-semibold hover:text-gray-300">
            New Routine
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
