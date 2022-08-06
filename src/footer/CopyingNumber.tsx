import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import styles from './CopyingNumber.module.scss';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { FaArrowCircleDown, FaPhoneAlt } from "react-icons/fa";
import { useClipboard } from 'use-clipboard-copy';
import { Button } from '@mui/material';



const oneNumber = '+7(918) 199-58-10'
const twoNumber = '+7(918) 119-53-66'



export const CopyingNumber = () => {

  const [number, setNumber] = useState('')
  const clipboard = useClipboard();

  const copyNumber = () => {
    clipboard.copy(oneNumber)
    setNumber(oneNumber)
  }
  const copyToNumber = () => {
    clipboard.copy(twoNumber)
    setNumber(twoNumber)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState: any) => (
        <div>
          <Button style={{ marginTop: '25px', backgroundColor: '#252527' }} variant="contained" {...bindTrigger(popupState)}>
            <div className={styles.copyNumber} > Copy on click <FaArrowCircleDown style={{ float: 'inline-end' }} />
              <div style={{ cursor: 'pointer' }} onClick={copyNumber}  > <FaPhoneAlt /> {oneNumber} </div>
              <br />
              <div style={{ cursor: 'pointer' }} onClick={copyToNumber}  > <FaPhoneAlt /> {twoNumber} </div>
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
              p: 2, color: '#fff',
              backgroundColor: '#1f1f20',
              border: '1px solid #1f1f20',
              opacity: '0.9',
            }}>The number {number} is copied</Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}