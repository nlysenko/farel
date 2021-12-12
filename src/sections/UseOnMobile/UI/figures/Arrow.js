/**
 *
 * Arrow
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  arrow: {
    display: 'block',
    width: 30,
    height: 2,
    position: 'absolute',
    backgroundColor: ({ theme }) => theme.mainBlueColor,
    transform: ({ stylization }) => `rotate(${stylization.tiltAngle})`,
    top: ({ stylization }) => stylization.top,
    left: ({ stylization }) => stylization.left,

    '&:after': {
      content: '""',
      width: 10,
      height: 2,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
      display: 'block',
      position: 'absolute',
      left: 21,
      top: -4,
      borderRadius: 1,
      transform: 'rotate(45deg)',
    },

    '&:before': {
      content: '""',
      width: 10,
      height: 2,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
      display: 'block',
      position: 'absolute',
      top: 4,
      left: 21,
      borderRadius: 1,
      transform: 'rotate(315deg)',
    },
  },
})

const Arrow = ({ stylization }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, stylization })

  return <span className={classes.arrow}></span>
}

export default Arrow
