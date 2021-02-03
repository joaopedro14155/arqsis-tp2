import React from 'react'
import classes from './Park.module.scss'
import ParkComponent from './ParkComponent.js'

// MOCKS
const valores = [
    {
      id: 0.41,
      rua: 5,
    }
]

const Park = (props) => {
    return (
        <div className={classes.alignedCenter}>
            <a href="/client/park" className={classes.pbButton} >Verifica os teus <b>Check-Ins.</b></a>
            
            <div className={classes.pbTable}>
                <table>
                    <thead>
                        <tr className={classes.pbTableHeader}>
                            <th className={classes.pbTableHeaderCell}>ID</th>
                            <th className={classes.pbTableHeaderCell}>Rua</th>
                            <th className={classes.pbTableHeaderCell}>Reservar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            valores.map((item) => (<ParkComponent data={item} />))
                        }
                    </tbody>
                </table>
            </div>
        </div>
      )
}

export default Park