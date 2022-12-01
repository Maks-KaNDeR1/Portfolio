import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import styles from './CopyingNumber.module.scss'
import Popover from '@mui/material/Popover'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { FaArrowCircleDown, FaPhoneAlt } from 'react-icons/fa'
import { useClipboard } from 'use-clipboard-copy'
import { Button } from '@mui/material'


const oneNumber = '+7(918) 199-58-10'
const twoNumber = '+7(918) 119-53-66'

type PropsType = {
  theme?: string
  lang?: string
}

export const CopyingNumber: React.FC<PropsType> = ({ theme, lang }) => {

  const [number, setNumber] = useState('')
  const clipboard = useClipboard()

  const copyNumber = () => {
    clipboard.copy(oneNumber)
    setNumber(oneNumber)
  }
  const copyToNumber = () => {
    clipboard.copy(twoNumber)
    setNumber(twoNumber)
  }


  const buttonStyle: React.CSSProperties = {
    marginTop: '25px',
    backgroundColor: theme === 'dark' ? '#b0b6bca7' : '#252527',
    color: theme === 'dark' ? '#032845' : '#fff'
  }


  return (
    <PopupState variant='popover' popupId='demo-popup-popover'>
      {(popupState: any) => (
        <div>
          <Button style={buttonStyle} variant='contained' {...bindTrigger(popupState)}>
            <div className={styles.copyNumber} >
              {
                lang === 'en'
                  ? 'Copy on click'
                  : 'Копировать по клику'
              }
              <FaArrowCircleDown style={{ position: 'absolute', float: 'inline-end', top: '11px', marginLeft: '2px' }} />
              <FaArrowCircleDown style={{ opacity: '0' }} />
              <div style={{ cursor: 'pointer' }} onClick={copyNumber}> <FaPhoneAlt /> {oneNumber} </div>
              <br />
              <div style={{ cursor: 'pointer' }} onClick={copyToNumber}> <FaPhoneAlt /> {twoNumber} </div>
            </div>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',

            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography sx={{
              p: 2,
              color: '#fff',
              backgroundColor: '#1f1f20',
              border: '1px solid #1f1f20',
              opacity: '0.9',
            }}>
              {
                lang === 'en'
                  ? `The number ${number} is copied`
                  : `Номер ${number} скопирован`
              }
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  )
}

