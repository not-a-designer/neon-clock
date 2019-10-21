import React, { useState, useEffect } from 'react';
import TimeReadout from './components/TimeReadout/TimeReadout';
import styles from './App.module.css';



const getNow = () => {
  const now = new Date(Date.now());
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const display = now.toLocaleString();

  return {
    hour,
    minute,
    second,
    display
  };
}

const useClock = () => {
  const [ timer, setTimer ] = useState(null);
  const [ time, setTime ] = useState(getNow());
  useEffect(() => {
    if (!timer) initTimer();
    return (() => (timer && window.clearInterval(timer) && setTimer(null)));
  }, [timer]);

  const initTimer = () => {
    const now = Date.now();
    const nextSec = (Math.floor(now / 1000) + 1) * 1000;
    const timeLeft = nextSec - now;
  
    window.setTimeout(() => {
      const interval = window.setInterval(() => setTime(getNow(), 1000));
      setTimer(interval);
    }, timeLeft)
  }
  return time;
}

const App = () => {
  const time = useClock();

  return (
    <div className={styles.Clock}>
      {/**<StandardClock time={time} />*/}
      <TimeReadout time={time} />
    </div>
  );
}

export default App;
