export function RoutinesIndex(props) {
  return (
    <div>
      <h1>All routines</h1>
      {props.routines.map((routine) => (
        <div key={routine.id}>
          <h2>{routine.user.name}</h2>
          <p>{routine.exercise.name}</p>
          <p>Reps: {routine.reps}</p>
        </div>
      ))}
    </div>
  );
}
