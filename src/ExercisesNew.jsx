export function ExercisesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    // eslint-disable-next-line react/prop-types
    props.onCreateExercise(params, () => event.target.reset());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="max-w-md w-full space-y-8 p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-100">New Exercise</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-100" htmlFor="name">
              Name:
            </label>
            <input name="name" type="text" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-100" htmlFor="description">
              Description:
            </label>
            <input name="description" type="text" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-100" htmlFor="image_url">
              Image URL:
            </label>
            <input name="image_url" type="url" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-100" htmlFor="video_url">
              Video URL:
            </label>
            <input name="video_url" type="url" className="mt-1 p-3 block w-full border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="w-full bg-purple-400 text-white p-3 rounded-md hover:bg-pink-500">
            Create exercise
          </button>
        </form>
      </div>
    </div>
  );
}
