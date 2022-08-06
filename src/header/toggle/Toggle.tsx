import { Alert, AlertTitle, Collapse, Stack } from '@mui/material'
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
      <div style={{ width: '500%', marginLeft: '150%' }}>

        <AlertWindow value={value} />
      </div>
    </label>
  )

}

type AlertPropsType = {
  value: boolean
}

const AlertWindow: React.FC<AlertPropsType> = ({ value }) => {

  const [open, setOpen] = React.useState(true);

  if (value === true) return <Stack sx={{ width: '100%' }} spacing={2}>
    <Collapse in={open}>
      <Alert onClose={() => { setOpen(false) }} severity="warning">
        <strong>Не Доработано!</strong>
      </Alert>
    </Collapse>
  </Stack>
  else return <></>

}
export default Toggle
