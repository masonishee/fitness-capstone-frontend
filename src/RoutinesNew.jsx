/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

export function DropdownMenu({ exercises, workouts }) {
  return (
    <div className="bg-gradient-to-r from-fuchsia-500 to-purple-500 p-8 rounded-lg shadow-lg mb-8">
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workout_id">
          Choose a workout:
        </label>
        <select
          name="workout_id"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r from-fuchsia-300 to-purple-300"
        >
          <option value="">Choose a workout</option>
          {workouts.map((workout) => (
            <option key={workout.id} value={workout.id}>
              {workout.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="exercise_id">
          Choose an exercise:
        </label>
        <select
          name="exercise_id"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r from-fuchsia-300 to-purple-300"
        >
          <option value="">Choose an exercise</option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reps">
          Reps:
        </label>
        <input
          name="reps"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r from-fuchsia-300 to-purple-300"
        />
      </div>
    </div>
  );
}

export function RoutinesNew(props) {
  const [exercises, setExercises] = useState([]);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/exercises.json")
      .then((response) => setExercises(response.data))
      .catch((error) => console.error(error));

    axios
      .get("http://localhost:3000/workouts.json")
      .then((response) => setWorkouts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-purple-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full space-y-8 p-8 bg-gradient-to-r from-fuchsia-300 to-purple-300 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold text-center text-gray-700">New Routine</h1>
        <DropdownMenu exercises={exercises} workouts={workouts} />

        <div className="mb-6">{/* Additional form content here */}</div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white p-3 rounded-md hover:bg-pink-600"
        >
          Create routine
        </button>
      </form>
    </div>
  );
}

export default DropdownMenu;
