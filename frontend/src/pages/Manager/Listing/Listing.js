import React from 'react'
import classes from './Listing.module.scss'
import ListingComponent from './ListingComponent.js'

// MOCKS
const valores = [
    {
      id: 1241,
      rua: "Rua Doutor Matos Graça",
      estado: "Ocupado",
    }
]

const Listing = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <div className={classes.pbTable}>
            <table>
                <thead>
                    <tr className={classes.pbTableHeader}>
                        <th className={classes.pbTableHeaderCell}>Lugar</th>
                        <th className={classes.pbTableHeaderCell}>Rua</th>
                        <th className={classes.pbTableHeaderCell}>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        valores.map((item) => (<ListingComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Listing