import React from 'react'
import classes from './Listing.module.scss'



const ListingComponent = ({ data }) => {
  return (
    
    <tr>
        <td className={classes.pbTableCell}>{data.precoMinuto}</td>
        <td className={classes.pbTableCell}>{data.tempo}</td>
        <td className={classes.pbTableCell}> </td>
        <td className={classes.pbTableCell}>{data.multa}</td>
    </tr>
  )
}

export default ListingComponent