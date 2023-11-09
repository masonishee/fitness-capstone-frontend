/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

export function DropdownMenu({ exercises, workouts }) {
  return (
    <div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="workout_id">
          Choose a workout:
        </label>
        <select
          name="workout_id"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Choose an exercise</option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.name}
            </option>
          ))}
        </select>
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
    // eslint-disable-next-line react/prop-types
    props.onCreateRoutine(params, () => event.target.reset());
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="text-3xl text-center font-bold mb-8">New Routine</h1>
      <DropdownMenu exercises={exercises} workouts={workouts} />

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="reps">
          Reps:
        </label>
        <input
          name="reps"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create routine
      </button>
    </form>
  );
}

export default DropdownMenu;
