/**
 *
 * TargetField
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  field: {
    width: 80,
    height: 45,
    position: 'absolute',
    top: ({ top }) => `${top}px` || 0,
    left: ({ left }) => `${left}px` || 0,
  },

  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },

  bottomLeftCorner: {
    '&:before': {
      content: "''",
      display: 'block',
      width: 17,
      height: 2,
      position: 'absolute',
      top: 41,
      borderTopLeftRadius: 1,
      borderBottomLeftRadius: 1,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },

    '&:after': {
      content: "''",
      display: 'block',
      width: 14,
      height: 2,
      position: 'absolute',
      top: 34,
      left: -4,
      transform: 'rotate(105deg)',
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },
  },

  bottomRightCorner: {
    '&:before': {
      content: "''",
      display: 'block',
      width: 17,
      height: 2,
      position: 'absolute',
      top: 41,
      left: 58,

      borderTopRightRadius: 1,
      borderBottomRightRadius: 1,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },

    '&:after': {
      content: "''",
      display: 'block',
      width: 14,
      height: 2,
      position: 'absolute',
      top: 35,
      left: 65,
      transform: 'rotate(70deg)',
      borderTopRightRadius: 1,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },
  },

  topRightCorner: {
    '&:before': {
      content: "''",
      display: 'block',
      width: 12,
      height: 2,
      position: 'absolute',
      top: 0,
      left: 50,
      borderTopRightRadius: 1,
      borderBottomRightRadius: 1,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },

    '&:after': {
      content: "''",
      display: 'block',
      width: 9,
      height: 2,
      position: 'absolute',
      top: 4,
      left: 58,
      transform: 'rotate(70deg)',
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },
  },

  topLeftCorner: {
    '&:before': {
      content: "''",
      display: 'block',
      width: 12,
      height: 2,
      position: 'absolute',
      top: 0,
      left: 12,
      borderTopLeftRadius: 1,
      borderBottomLeftRadius: 1,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },

    '&:after': {
      content: "''",
      display: 'block',
      width: 9,
      height: 2,
      position: 'absolute',
      top: 4,
      left: 7,
      transform: 'rotate(105deg)',
      borderBottomLeftRadius: 1,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },
  },

  plus: {
    '&:before': {
      content: "''",
      display: 'block',
      width: 27,
      height: 2,
      position: 'absolute',
      top: 16,
      left: 24,
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },

    '&:after': {
      content: "''",
      display: 'block',
      width: 20,
      height: 2,
      position: 'absolute',
      top: 17,
      left: 27,
      transform: 'rotate(90deg)',
      backgroundColor: ({ theme }) => theme.mainBlueColor,
    },
  },
})

const TargetField = ({ top, left }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, top, left })

  return (
    <div className={classes.field}>
      <div className={classes.wrapper}>
        <i className={classes.topLeftCorner}></i>
        <i className={classes.topRightCorner}></i>
        <i className={classes.bottomLeftCorner}></i>
        <i className={classes.bottomRightCorner}></i>

        <i className={classes.plus}></i>
      </div>
    </div>
  )
}

export default TargetField
