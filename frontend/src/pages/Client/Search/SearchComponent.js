import React from 'react'
import classes from './Search.module.scss'

const SearchComponent = ({ data }) => {
  return (
    <tr>
        <td className={classes.pbTableCell}>{data.latitude}</td>
        <td className={classes.pbTableCell}>{data.longitude}</td>
        <td className={classes.pbTableCell}>{data.tipo}</td>
        <td className={classes.pbTableCell}>{data.estado}</td>
    </tr>
  )
}

export default SearchComponent