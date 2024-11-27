

const LoadingSpinner = () => {
  return (
    <div className="text-center py-10">
      <div className="flex items-center justify-center space-x-2 mt-4">
        <span className="loading loading-bars loading-xs text-rose-500"></span>
        <span className="loading loading-bars loading-sm text-rose-500"></span>
        <span className="loading loading-bars loading-md text-rose-500"></span>
        <span className="loading loading-bars loading-lg text-rose-500"></span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
