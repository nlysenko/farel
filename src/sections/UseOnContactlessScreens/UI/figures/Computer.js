/**
 *
 * Computer
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  bloc: {
    width: 20,
    height: 50,
    position: 'absolute',
    top: ({ top }) => `${top}px` || 0,
    left: ({ left }) => `${left}px` || 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.mainBlueColor,
  },

  dvd: {
    display: 'block',
    width: 16,
    height: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.mainBlueColor,
    margin: {
      top: 2,
      left: 'auto',
      right: 'auto',
    },
  },

  usb: {
    display: 'block',
    width: 8,
    height: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.mainBlueColor,
    margin: {
      top: 11,
      left: 'auto',
      right: 'auto',
    },
  },

  powerBtn: {
    display: 'block',
    width: 8,
    height: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: '50%',
    borderColor: ({ theme }) => theme.mainBlueColor,
    margin: {
      top: 9,
      left: 'auto',
      right: 'auto',
    },
  },
})

const Computer = ({ top, left }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, top, left })

  return (
    <div className={classes.bloc}>
      <i className={classes.dvd} />
      <i className={classes.usb} />
      <i className={classes.powerBtn} />
    </div>
  )
}

export default Computer
