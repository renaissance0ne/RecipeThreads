export default function Loading() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        <p className="text-light-2 mt-4">Loading your feed...</p>
      </div>
    );
  }