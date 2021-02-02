import React from 'react'
import classes from './YourArea.module.scss'

const YourAreaComponent = ({ data }) => {
  return (
    <tr>
        <td className={classes.pbTableCell}>{data.latitude}</td>
        <td className={classes.pbTableCell}>{data.longitude}</td>
        <td className={classes.pbTableCell}>{data.tipo}</td>
        <td className={classes.pbTableCell}>{data.estado}</td>
    </tr>
  )
}

export default YourAreaComponent