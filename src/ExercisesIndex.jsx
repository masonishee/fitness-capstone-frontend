/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

export function ExercisesIndex(props) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gradient-to-r from-fuchsia-200 via-purple-200 to-indigo-200 bg-opacity-70 mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
          <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">Exercises</h1>
          {props.exercises.map((exercise, index) => (
            <div
              key={exercise.id}
              className={`mb-8 p-8 bg-gradient-to-r from-fuchsia-300 via-purple-300 to-indigo-300 bg-opacity-80 rounded-lg shadow-lg ${
                index > 0 ? "mt-8" : ""
              }`}
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-800">{exercise.name}</h2>
              <div className="mb-4">
                <img src={exercise.image_url} alt={exercise.name} className="max-w-full" />
              </div>
              <div className="mb-6">
                <ReactPlayer url={exercise.video_url} width="100%" height="400px" controls />
              </div>
              <button
                onClick={() => props.onShowExercise(exercise)}
                className="w-full bg-gradient-to-r from-fuchsia-400 to-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600"
              >
                More info
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
