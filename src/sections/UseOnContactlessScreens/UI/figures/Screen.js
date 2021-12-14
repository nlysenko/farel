/**
 *
 * Screen
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  screen: {
    width: 80,
    height: 133,
    position: 'absolute',
    top: ({ top }) => `${top}px` || 0,
    left: ({ left }) => `${left}px` || 0,
    borderWidth: [4, 4, 13],
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.mainBlueColor,
  },
})

const Screen = ({ top, left, children }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, top, left })

  return <div className={classes.screen}>{children}</div>
}

export default Screen
