/**
 *
 * Using
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Logo from 'assets/img/logo-farel.webp'

const useStyles = createUseStyles({
  container: {
    maxWidth: 930,
    padding: [0, 15],
    margin: [0, 'auto'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  brandNameWrapper: {
    position: 'relative',
    margin: [84, 'auto', 0, 'auto'],
  },

  brandNameImg: {
    maxWidth: '100%',
    height: 'auto',
    marginLeft: 80,

    '@media (max-width: 790px)': {
      marginLeft: 0,
    },
  },

  corner: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
  },

  topLeftCorner: {
    extend: 'corner',
    top: 10,
    left: 91,
    borderRightStyle: 'none',
    borderBottomStyle: 'none',
    borderColor: ({ theme }) => theme.cornerColor,

    '@media (max-width: 790px)': {
      left: 12,
    },
  },

  topRightCorner: {
    extend: 'corner',
    top: 10,
    right: 101,
    borderLeftStyle: 'none',
    borderBottomStyle: 'none',
    borderColor: ({ theme }) => theme.cornerColor,

    '@media (max-width: 790px)': {
      right: 12,
    },
  },

  bottomRightCorner: {
    extend: 'corner',
    bottom: 22,
    right: 101,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderColor: ({ theme }) => theme.cornerColor,

    '@media (max-width: 790px)': {
      right: 12,
    },
  },

  bottomLeftCorner: {
    extend: 'corner',
    bottom: 22,
    left: 91,
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderColor: ({ theme }) => theme.cornerColor,

    '@media (max-width: 790px)': {
      left: 12,
    },
  },
})

const Using = () => {
  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <section id="using">
      <div className={classes.container}>
        <div className={classes.brandNameWrapper}>
          <i className={classes.topLeftCorner} />
          <i className={classes.topRightCorner} />
          <i className={classes.bottomLeftCorner} />
          <i className={classes.bottomRightCorner} />

          <img src={Logo} className={classes.brandNameImg} alt="logo-farel" />
        </div>
      </div>
    </section>
  )
}

export default Using
