/**
 *
 * Phone
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  phone: {
    backgroundColor: ({ theme }) => theme.mainBlueColor,
    width: 50,
    height: 100,
    borderRadius: 11,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  din: {
    width: 14,
    height: 2,
    backgroundColor: ({ theme }) => theme.mainColor,
    marginTop: 3,
    borderRadius: 1,
  },

  display: {
    width: 44,
    height: 75,
    marginTop: 6,
    backgroundColor: ({ theme }) => theme.mainColor,
    position: 'relative',
    overflow: 'hidden',
  },

  mic: {
    width: 14,
    height: 4,
    backgroundColor: ({ theme }) => theme.mainColor,
    marginTop: 7,
    borderRadius: 2,
  },
})

const Phone = ({ children }) => {
  const theme = useTheme()
  const classes = useStyles({ theme })

  return (
    <div className={classes.phone}>
      <div className={classes.din} />

      <div className={classes.display}>{children}</div>

      <div className={classes.mic} />
    </div>
  )
}

export default Phone
