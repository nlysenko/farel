/**
 *
 * StepItem
 *
 */

import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

import Circle from '../UI/icons/Circle'

const useStyles = createUseStyles({
  step: {
    display: 'flex',
    flexDirection: ({ flexDirection }) => flexDirection,
    alignItems: 'center',
  },

  stepName: {
    fontSize: 15,
    color: ({ theme }) => theme.mainTextColor,
    lineHeight: 1.2,
    textAlign: 'center',
  },
})

const StepItem = ({ options, stylization }) => {
  const { flexDirection, margin } = stylization
  const { name, num } = options
  const theme = useTheme()
  const classes = useStyles({ theme, flexDirection })

  return (
    <div className={classes.step}>
      <p className={classes.stepName}>{name}</p>

      <Circle number={num} margin={margin} />
    </div>
  )
}

export default StepItem
