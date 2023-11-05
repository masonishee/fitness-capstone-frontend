/* eslint-disable react/prop-types */
export function WorkoutsIndex(props) {
  return (
    <div>
      <h1>All Workouts</h1>
      {props.workouts.map((workout) => (
        <div key={workout.id}>
          <h2>
            {workout.user.name}'s {workout.name} Workout
          </h2>
        </div>
      ))}
    </div>
  );
}
