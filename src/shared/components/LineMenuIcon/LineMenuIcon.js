/**
 *
 * LineMenuIcon
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import colors from 'styles/colors'

const { lightGrayColor } = colors

const useStyles = createUseStyles({
  icon: {
    display: 'none',
    width: 30,
    height: 25,
    cursor: 'pointer',
    transition: '0.5s',

    '&:hover>span': {
      backgroundColor: lightGrayColor,
    },

    '@media (max-width: 790px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  active: {
    transform: 'rotate(90deg)',
    transition: '0.5s',
  },

  line: {
    display: 'block',
    width: '100%',
    height: 5,
    backgroundColor: ({ theme }) => theme.mainTextColor,
    borderRadius: ({ theme }) => theme.brRadius,

    '&:nth-child(2)': {
      margin: [5, 0],
    },
  },
})

const LineMenuIcon = (props) => {
  const { toggleMobileMenu } = props

  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <i className={classes.icon} onClick={toggleMobileMenu}>
      <span className={classes.line} />
      <span className={classes.line} />
      <span className={classes.line} />
    </i>
  )
}

export default LineMenuIcon
