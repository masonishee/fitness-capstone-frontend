/* eslint-disable react/prop-types */
export function RoutinesIndex(props) {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <h1 className="text-3xl text-center font-bold mb-8">All routines</h1>
          {props.routines.map((routine) => (
            <div key={routine.id} className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-2">{routine.exercise.name}</h2>
              <p className="text-gray-600 mb-4">Reps: {routine.reps}</p>
              <button
                onClick={() => props.onShowRoutine(routine)}
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
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
