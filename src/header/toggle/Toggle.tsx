import React from 'react'
import styles from './Toggle.module.scss'

type PropsType = {
  value: boolean
  onChange: () => void
}

const Toggle: React.FC<PropsType> = ({ value, onChange }) => {

  return (
    <label className={styles.root} htmlFor="toggler">
      <input
        id="toggler"
        type="checkbox"
        onClick={onChange}
        checked={value}
        readOnly
      />
      <span className={styles.slider} />
      <span className={styles.wave} />
    </label>
  )

}
export default Toggle
