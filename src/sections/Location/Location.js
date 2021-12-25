/**
 *
 * Location
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import GoogleMapComponent from 'shared/components/GoogleMapComponent/GoogleMapComponent'

const useStyles = createUseStyles({
  location: {
    height: '35vh',
  },
})

const Location = () => {
  const classes = useStyles()

  return (
    <section className={classes.location}>
      <GoogleMapComponent isMarkerShown />
    </section>
  )
}

export default Location
