import React, { useState, useEffect } from 'react';
import SiteBar from './Home/Navbar';
import Auth from './Auth/Auth';

function App() {

  const [sessionToken, setSessionToken] = useState(''); //1

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token2'));
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken)
  }

  useEffect(() => {
    document.title = 'Workout Log Client'
  }, [])

  return (
    <div>
      <SiteBar />
      <Auth updateToken={updateToken} />
    </div>
  );
}

export default App;
