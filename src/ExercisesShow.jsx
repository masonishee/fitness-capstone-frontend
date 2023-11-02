/* eslint-disable react/prop-types */
export function ExercisesShow(props) {
  return (
    <div>
      <h1>Exercise Information</h1>
      <p>Name: {props.exercise.name}</p>
      <p>Description: {props.exercise.description}</p>
    </div>
  );
}
