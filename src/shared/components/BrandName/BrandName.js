/**
 *
 * BrandName
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Logo from 'assets/img/logo-farel.webp'

const useStyles = createUseStyles({
  brand: {
    position: 'relative',
    margin: [84, 'auto', 0, 'auto'],
    maxWidth: 532,

    '@media (max-width: 790px)': {
      maxWidth: 448,
    },
  },

  logoBrand: {
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
    borderTopLeftRadius: ({ theme }) => theme.brRadius,

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
    borderTopRightRadius: ({ theme }) => theme.brRadius,

    '@media (max-width: 790px)': {
      right: 65,
    },
  },

  bottomRightCorner: {
    extend: 'corner',
    bottom: 22,
    right: 101,
    borderLeftStyle: 'none',
    borderTopStyle: 'none',
    borderColor: ({ theme }) => theme.cornerColor,
    borderBottomRightRadius: ({ theme }) => theme.brRadius,

    '@media (max-width: 790px)': {
      right: 65,
    },
  },

  bottomLeftCorner: {
    extend: 'corner',
    bottom: 22,
    left: 91,
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderColor: ({ theme }) => theme.cornerColor,
    borderBottomLeftRadius: ({ theme }) => theme.brRadius,

    '@media (max-width: 790px)': {
      left: 12,
    },
  },
})

const BrandName = () => {
  const theme = useTheme()

  const classes = useStyles({ theme })
  return (
    <div className={classes.brand}>
      <i className={classes.topLeftCorner} />
      <i className={classes.topRightCorner} />
      <i className={classes.bottomLeftCorner} />
      <i className={classes.bottomRightCorner} />

      <img src={Logo} className={classes.logoBrand} alt="logo-farel" />
    </div>
  )
}

export default BrandName
