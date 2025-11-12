import React from 'react';

const Shimmer = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg flex flex-col sm:flex-row p-4 w-full animate-pulse">
      {/* Left Section Shimmer */}
      <div className="bg-gray-300 p-4 rounded-lg w-full sm:w-2/3 relative">
        <div className="h-6 bg-gray-400 rounded mb-2"></div>
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
        
        <div className="absolute bottom-2 right-2 bg-gray-400 text-xs px-2 py-1 rounded w-16 h-4"></div>
        
        <div className="absolute bottom-4 left-4">
          <div className="h-10 w-10 bg-gray-400 rounded opacity-25"></div>
        </div>
      </div>

      {/* Right Section Shimmer */}
      <div className="flex flex-col items-start justify-between w-full sm:w-1/3 pl-0 sm:pl-4 mt-4 sm:mt-0">
        <div className="w-full h-10 bg-gray-300 rounded-md mb-4"></div>
        
        <div className="flex items-center space-x-2 mb-2">
          <div className="h-6 w-6 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="h-6 w-6 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
