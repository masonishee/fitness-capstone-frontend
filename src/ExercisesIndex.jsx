/* eslint-disable react/prop-types */
export function ExercisesIndex(props) {
  return (
    <div>
      <h1>All Exercises</h1>
      {props.exercises.map((exercise) => (
        <div key={exercise.id}>
          <h2>{exercise.name}</h2>
          <p>{exercise.image_url}</p>
          <p>{exercise.video_url}</p>
          <button onClick={() => props.onShowExercise(exercise)}>More info</button>
        </div>
      ))}
    </div>
  );
}
