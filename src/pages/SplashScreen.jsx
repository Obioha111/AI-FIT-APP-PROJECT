import React from 'react';
import logo from '../assets/logo.png';

const SplashScreen = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
      <div className="text-center animate-fadeInUp">
        <img src={logo} alt="App Logo" className="w-24 h-24 mx-auto mb-4 animate-pulse drop-shadow-lg" />
        <h1 className="text-white text-4xl font-bold mb-2 tracking-wide">AI Fitness & Diet App</h1>
        <p className="text-white text-lg font-light tracking-wide">
          Personalized recommendations just for you
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
