import React from 'react'
import classes from './Listing.module.scss'

const ListingComponent = ({ data }) => {
  return (
    
    <tr>
        <td className={classes.pbTableCell}>{data.id}</td>
        <td className={classes.pbTableCell}>{data.rua}</td>
        <td className={classes.pbTableCell}>{data.estado}</td>
    </tr>
  )
}

export default ListingComponent