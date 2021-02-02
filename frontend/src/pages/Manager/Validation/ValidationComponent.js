import React from 'react'
import classes from './Validation.module.scss'

const ValidationComponent = ({ data }) => {
  return (
    
    <tr>
        <td className={classes.pbTableCell}>{data.email}</td>
        <td className={classes.pbTableCell}>{data.tipo}</td>
        <td>
          <img href="#" className={classes.pbTableIcon} src="/assets/verify.svg"></img> 
          <img href="#" className={classes.pbTableIcon} src="/assets/delete.svg"></img>
        </td>
    </tr>
  )
}

export default ValidationComponent