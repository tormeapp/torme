import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './fb';
import './App.css';

// import components
import LoginPage from './login';
import Navbar from './containers/navbar';

function App() {

  const [user, setUser] = useState(false);
  useEffect(() => {
      if (user) {
        // get data from db

      }
      
  },[user])

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(true);
    }
  })

  const getApp = () => {
    if (!user) {
      return <LoginPage />
    }
    else {
      return (
        <div>
          <Navbar />
        </div>
      )
    }
  }

  return (
    <div className="App">
      <div>
          {getApp()}
      </div>
  </div>
  );
}

export default App;