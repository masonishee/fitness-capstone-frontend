export function RoutinesShow(props) {
  return (
    <div>
      <h1>Routine Information</h1>
      <p>Exercise Description: {props.routine.exercise.description}</p>
      <p>{props.routine.exercise.image_url}</p>
      <p>{props.routine.exercise.video_url}</p>
    </div>
  );
}
