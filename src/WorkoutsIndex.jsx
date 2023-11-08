/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";

export function WorkoutsIndex(props) {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <h1 className="text-3xl text-center font-bold mb-8">All Workouts</h1>
          {props.workouts.map((workout) => (
            <div key={workout.id} className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">
                {workout.user.name}'s {workout.name} Workout
              </h2>
              {workout.routines.map((routine) => (
                <div key={routine.id} className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
                  <p className="text-lg font-bold mb-2">
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
