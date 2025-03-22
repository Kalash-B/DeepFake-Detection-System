import React from "react";

const DeepFakeFinder = () => {
  return (
    <div className="bg-gray-900 flex items-center justify-center min-h-screen w-full">
      <div className="text-center w-1/2">
        <h1 className="text-white text-3xl font-playfair mb-8">Find DeepFake</h1>
        <div className="bg-white rounded-lg p-10 shadow-lg">
          <button className="bg-black text-white py-2 px-6 rounded-full text-lg mb-4 w-1/2 h-1/2">
            Upload Image
          </button>
          <p className="text-gray-700">
            or drop a file,
            <br />
            paste image or URL
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeepFakeFinder;