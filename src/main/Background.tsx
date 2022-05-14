
import React from 'react'
import styles from './Background.module.scss';

function Background() {
  return (
    <div className={styles.container} >
      <div className={styles.stars} ></div>
      <div className={styles.star2} ></div>
      <div className={styles.star3} ></div>
    </div>
  )
}

export default Background