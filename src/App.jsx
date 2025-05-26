import React, { useState, useEffect } from 'react';
import SplashScreen from './pages/SplashScreen';
import UserForm from './pages/UserForm';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light flex justify-center items-start py-6 sm:py-12 px-4">
      {showSplash ? <SplashScreen /> : <UserForm />}
    </div>
  );
}

export default App;
