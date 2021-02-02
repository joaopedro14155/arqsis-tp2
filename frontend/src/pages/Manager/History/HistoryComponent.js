import React from 'react'
import classes from './History.module.scss'

const HistoryComponent = ({ data }) => {
  return (
    
    <tr>
        <td className={classes.pbTableCell}>{data.id}</td>
        <td className={classes.pbTableCell}>{data.matricula}</td>
        <td className={classes.pbTableCell}>{data.data}</td>
    </tr>
  )
}

export default HistoryComponent