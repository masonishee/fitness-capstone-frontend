import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/exercisenew">New Exercise</Link>
        <Link to="/exerciseindex">All Exercises</Link>
        <Link to="/routinesindex">All Routines</Link>
      </nav>
    </header>
  );
}
