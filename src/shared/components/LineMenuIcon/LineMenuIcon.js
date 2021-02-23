/**
 *
 * LineMenuIcon
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import colors from 'styles/colors'

const { colorWhite, lightGrayColor } = colors

const useStyles = createUseStyles({
  icon: {
    display: 'none',
    width: 30,
    height: 25,
    cursor: 'pointer',
    transition: '0.5s',

    '&:hover>span': {
      background: lightGrayColor,
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
    background: colorWhite,
    borderRadius: 3,

    '&:nth-child(2)': {
      margin: [5, 0],
    },
  },
})

const LineMenuIcon = () => {
  const classes = useStyles()

  return (
    <i className={classes.icon}>
      <span className={classes.line} />
      <span className={classes.line} />
      <span className={classes.line} />
    </i>
  )
}

export default LineMenuIcon
