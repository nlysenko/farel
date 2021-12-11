/**
 *
 * Line
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  line: {
    position: 'absolute',
    borderRadius: 1,
    display: 'block',
    width: ({ stylization }) => stylization.width || 10,
    height: ({ stylization }) => stylization.height || 1,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
    transform: ({ stylization }) => `rotate(${stylization.tiltAngle || 45})`,
    top: ({ stylization }) => stylization.top || 0,
    left: ({ stylization }) => stylization.left || 0,
  },
})

const Line = ({ stylization }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, stylization })

  return <span className={classes.line}></span>
}

export default Line
