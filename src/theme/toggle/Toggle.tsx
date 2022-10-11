// import { Alert, Stack } from '@mui/material'
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
      {/* <div style={{ width: '500%', marginLeft: '150%', marginTop: '-30px' }}>
        <AlertWindow value={value} />
      </div> */}
    </label>
  )

}

export default Toggle
