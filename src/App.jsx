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
    <div className="w-full h-full">
      {showSplash ? <SplashScreen /> : <UserForm />}
    </div>
  );
}

export default App;
