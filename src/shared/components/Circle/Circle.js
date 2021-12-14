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
    margin: ({ margin }) => `${margin}px`,
    border: {
      width: 1,
      style: 'solid',
    },
    borderColor: ({ theme }) => theme.togglerLangBgColor,
    fontSize: 23,
    fontStyle: 'normal',
    color: ({ theme }) => theme.togglerLangBgColor,
  },
})

const Circle = ({ number, margin }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, margin })

  return <i className={classes.circle}>{number}</i>
}

export default Circle
