// src/pages/Home.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My React App</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a simple and clean homepage built with React, TypeScript, and Tailwind CSS.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Home;
