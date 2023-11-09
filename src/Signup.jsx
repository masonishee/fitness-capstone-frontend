import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div
      id="signup"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
    >
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h1 className="text-3xl font-bold text-center text-gray-800">Signup</h1>
          <ul className="text-red-500">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input name="name" type="text" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input name="email" type="email" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              name="password"
              type="password"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">
              Password confirmation:
            </label>
            <input
              name="password_confirmation"
              type="password"
              className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white p-3 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
