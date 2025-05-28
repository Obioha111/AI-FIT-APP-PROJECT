import React from 'react';
import logo from '../assets/logo.png';

const SplashScreen = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
      <div className="text-center animate-fadeInUp">
        <img
          src={logo}
          alt="App Logo"
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 animate-pulse drop-shadow-lg"
        />
        <h1 className="text-green-800 text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
          AI Fitness & Diet App
        </h1>
        <p className="text-green-700 text-lg md:text-xl font-medium tracking-wide">
          Personalized recommendations just for you
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
