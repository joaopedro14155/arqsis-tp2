import React from 'react'
import classes from './Dashboard.module.scss'
import DashboardComponent from './DashboardComponent.js'

// MOCKS
const multas = [
    {
      utilizador: 123,
      lugar: 1423
    }
]

const Dashboard = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <div className={classes.pbTable}>
            <table>
                <thead>
                    <tr className={classes.pbTableHeader}>
                        <th className={classes.pbTableHeaderCell}>Utilizador</th>
                        <th className={classes.pbTableHeaderCell}>Lugar</th>
                        <th className={classes.pbTableHeaderCell}>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        multas.map((item) => (<DashboardComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Dashboard