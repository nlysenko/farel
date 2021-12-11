/**
 *
 * TShapedLines
 *
 */

import React from 'react'
import { createUseStyles } from 'react-jss'

import Line from './Line'

const useStyles = createUseStyles({
  tShapedLines: {
    position: 'relative',
    width: '100%',
    height: 53,
  },
})

const horizontalLine = {
  top: 38,
  left: 10,
  width: 30,
  height: 1,
  tiltAngle: '0deg',
}
const verticalLine = {
  top: 18,
  left: 4,
  width: 41,
  height: 1,
  tiltAngle: '90deg',
}

const TShapedLines = () => {
  const classes = useStyles()

  return (
    <div className={classes.tShapedLines}>
      <Line stylization={verticalLine} />

      <Line stylization={horizontalLine} />
    </div>
  )
}

export default TShapedLines
