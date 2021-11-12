import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './fb';
import './App.css';
import LoginPage from './login';

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
  return (
    <div className="App">
    {user ? <>asd</>:
    <LoginPage />}
  </div>
  );
}

export default App;