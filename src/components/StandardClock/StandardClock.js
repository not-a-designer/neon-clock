import React from 'react';
import styles from './StandardClock.module.css';

const StandardClock = ({ time }) => {
    const clockMarks = [ 'XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    const hourAngle = ((time.hour % 12) * 60 + time.minute) / 2;
    const minuteAngle = (time.minute * 60 + time.second) / 60;
    const secondAngle = time.second * 6;
  
    return (
      <div className={styles.StandardClock}>
        <div>
          {clockMarks.map(mark => <span className={styles.Mark}>{mark}</span>)}
        </div>
        <div>
          {Array(60).fill(1).map(tick => <span className={styles.Tick} />)}
        </div>
        <div className={styles.InnerCircle} />
        <div className={styles.InnerCircle2} />
        <div className={styles.HourHand} style={{ transform: `rotate(${hourAngle}deg)`}} />
        <div className={styles.MinuteHand} style={{ transform: `rotate(${minuteAngle}deg)`}} />
        <div className={styles.SecondHand} style={{ transform: `rotate(${secondAngle}deg)`}} />
        <div className={styles.Center} />
      </div>
    )
  }

  export default StandardClock;