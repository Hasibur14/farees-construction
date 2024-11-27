

const LoadingSpinner = () => {
  return (
    <div className="text-center py-10">
      <div className="flex items-center justify-center space-x-2 mt-4">
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-500"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-500"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-rose-500"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
