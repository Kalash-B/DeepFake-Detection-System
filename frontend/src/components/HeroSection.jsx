import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-900">
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mt-8">Advanced DeepFake</h1>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500">
        Detection<span className="text-white">Platform</span>
      </h2>
      <p className="text-white mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl ">
        Protect yourself against digital deception with our AI-powered deepfake detection system.
        Real-time analysis to identify manipulated media with industry-leading accuracy.
      </p>
      <button className="mt-8 bg-white text-indigo-900 px-6 py-3 rounded text-lg">Start Now</button>
    </main>
  );
};

export default HeroSection;
