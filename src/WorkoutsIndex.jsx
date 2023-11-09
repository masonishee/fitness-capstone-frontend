/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

export function WorkoutsIndex(props) {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-gradient-to-r from-purple-300 via-pink-400 to-red-400 bg-opacity-70 mx-8 md:mx-0 shadow-lg rounded-3xl sm:p-10">
          <h1 className="text-3xl text-center font-bold mb-8 text-gray-800">All Workouts</h1>
          {props.workouts.map((workout, index) => (
            <div
              key={workout.id}
              className={`mb-6 p-6 bg-gradient-to-r from-purple-200 via-pink-300 to-red-300 rounded-lg shadow-md ${
                index > 0 ? "mt-6" : ""
              }`}
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {workout.user.name}'s {workout.name} Workout
              </h2>
              {workout.routines.map((routine, index) => (
                <div
                  key={routine.id}
                  className={`mb-6 p-6 bg-gradient-to-r from-purple-100 via-pink-200 to-red-200 rounded-lg shadow-md ${
                    index > 0 ? "mt-6" : ""
                  }`}
                >
                  <p className="text-lg font-bold mb-2 text-gray-800">
                    Exercise: {routine.exercise ? routine.exercise.name : "no name"}
                  </p>
                  <p className="text-base text-gray-700 mb-2">Reps: {routine.reps}</p>
                  <p className="text-base text-gray-700 mb-4">Description: {routine.exercise.description}</p>
                  <div className="aspect-w-16 aspect-h-9">
                    <ReactPlayer url={routine.exercise.video_url} width="100%" height="100%" controls />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
