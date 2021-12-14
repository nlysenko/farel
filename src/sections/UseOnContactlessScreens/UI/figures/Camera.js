/**
 *
 * Camera
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles({
  camera: {
    width: 45,
    height: 15,
    position: 'absolute',
    top: ({ top }) => `${top}px` || 0,
    left: ({ left }) => `${left}px` || 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  cameraKinect: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.mainBlueColor,
  },

  lens: {
    display: 'block',
    width: 4,
    height: 4,
    borderRadius: '50%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.mainBlueColor,

    '&:first-child': {
      marginLeft: 6,
    },

    '&:nth-child(2)': {
      marginLeft: 7,
    },

    '&:last-child': {
      marginLeft: 1,
    },
  },

  points: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 6,
  },

  point: {
    display: 'block',
    width: 2,
    height: 2,
    borderRadius: '50%',
    backgroundColor: ({ theme }) => theme.mainBlueColor,
  },

  stand: {
    display: 'block',
    width: 12,
    height: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: ({ theme }) => theme.mainBlueColor,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
})

const Camera = ({ top, left }) => {
  const theme = useTheme()
  const classes = useStyles({ theme, top, left })

  return (
    <div className={classes.camera}>
      <i className={classes.cameraKinect}>
        <span className={classes.lens}></span>
        <span className={classes.lens}></span>
        <span className={classes.lens}></span>
      </i>

      <i className={classes.points}>
        <span className={classes.point}></span>
        <span className={classes.point}></span>
      </i>

      <i className={classes.stand} />
    </div>
  )
}

export default Camera
