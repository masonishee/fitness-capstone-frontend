export function RoutinesShow(props) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Routine Information</h1>
      <p className="text-lg text-gray-800">Exercise Description: {props.routine.exercise.description}</p>
      <p className="text-base text-gray-600">{props.routine.exercise.image_url}</p>
      <p className="text-base text-gray-600">{props.routine.exercise.video_url}</p>
    </div>
  );
}
