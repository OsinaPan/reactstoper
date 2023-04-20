import React, { useState, useEffect } from 'react';
import Button from '../Buttons/Buttons';
import formatTime from '../TimeConverter/TimeConverter';
import styles from './Stopwatch.module.scss';

const Timer = () => {
  
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timeGo;

    if (isRunning) {
      timeGo = setInterval(() => setTime((prevValue) => prevValue + 10), 10);
    }
    return () => clearInterval(timeGo);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => { 
    setTime(0);
  };

  return (
    <div>
      <div className={styles.time}>{formatTime(time)}</div>
      <Button action={handleStart}>Start</Button>
      <Button action={handleStop}>Stop</Button>
      <Button action={handleReset}>Reset</Button>
    </div>
  );
};

export default Timer;