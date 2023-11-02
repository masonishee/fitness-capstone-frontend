export function ExercisesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateExercise(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Exercise</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Description: <input name="description" type="text" />
        </div>
        <div>
          Image: <input name="image_url" type="url" />
        </div>
        <div>
          Video: <input name="video_url" type="url" />
        </div>
        <button type="submit">Create exercise</button>
      </form>
    </div>
  );
}
