import React, { useState } from 'react'
import styles from './Counter.module.scss'

const Counter = () => {
  const [value, setValue] = useState(0)

  const increment = () => {
    setValue(prev => prev += 1)
  }

  return (
    <div>
      <div className={styles.count}>{value}</div>
      <button
        onClick={increment}
      >increase</button>
    </div>
  );
};

export default Counter
