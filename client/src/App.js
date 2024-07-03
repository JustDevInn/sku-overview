// App.js
import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import Home from './components/Home';  // Updated to use Home
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {!loggedIn ? <LoginPage onLoginSuccess={() => setLoggedIn(true)} /> : <Home />}
    </div>
  );
}

export default App;
