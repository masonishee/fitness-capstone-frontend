export function ExercisesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onCreateExercise(params, () => event.target.reset());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">New Exercise</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name:
            </label>
            <input name="name" type="text" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">
              Description:
            </label>
            <input name="description" type="text" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="image_url">
              Image:
            </label>
            <input name="image_url" type="url" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="video_url">
              Video:
            </label>
            <input name="video_url" type="url" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700">
            Create exercise
          </button>
        </form>
      </div>
    </div>
  );
}
