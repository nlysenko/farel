/**
 *
 * Circle
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  circle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    height: 35,
    minWidth: 35,
    borderRadius: '50%',
    margin: 9,
    border: {
      width: 1,
      style: 'solid',
    },
    borderColor: ({ theme }) => theme.togglerLangBgColor,
    fontSize: 23,
    color: ({ theme }) => theme.togglerLangBgColor,
  },
})

const Circle = ({ number }) => {
  const theme = useTheme()

  const classes = useStyles({ theme })
  return <span className={classes.circle}>{number}</span>
}

export default Circle
