/* eslint-disable react/prop-types */
export function ExercisesShow(props) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Exercise Information</h1>
      <p className="text-lg text-gray-800">Name: {props.exercise.name}</p>
      <p className="text-base text-gray-600">Description: {props.exercise.description}</p>
    </div>
  );
}
