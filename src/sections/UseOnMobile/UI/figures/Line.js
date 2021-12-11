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
    width: ({ stylization }) => stylization.width,
    height: ({ stylization }) => stylization.height,
    backgroundColor: ({ theme }) => theme.togglerLangBgColor,
    transform: ({ stylization }) => `rotate(${stylization.tiltAngle})`,
    top: ({ stylization }) => stylization.top,
    left: ({ stylization }) => stylization.left,
  },
})

const Line = ({ stylization }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, stylization })

  return <span className={classes.line}></span>
}

export default Line
