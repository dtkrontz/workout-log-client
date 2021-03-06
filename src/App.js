import React, { useState, useEffect } from 'react';
import SiteBar from './Home/Navbar';
import Auth from './Auth/Auth';
import WorkoutIndex from './Workouts/WorkoutIndex';

function App() {
  const [sessionToken, setSessionToken] = useState(''); //1

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

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

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken} /> : <Auth updateToken={updateToken} />)
  }

  return (
    <div>
      <SiteBar clearToken={clearToken} />
      {protectedViews()}
    </div>
  );
}

export default App;