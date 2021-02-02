import React from 'react'
import classes from './History.module.scss'
import HistoryComponent from './HistoryComponent.js'

// MOCKS
const valores = [
    {
      id: 1241,
      matricula: "14-FE-52",
      data: "22/01/2021",
    }
]

const History = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <div className={classes.pbTable}>
            <table>
                <thead>
                    <tr className={classes.pbTableHeader}>
                        <th className={classes.pbTableHeaderCell}>Lugar</th>
                        <th className={classes.pbTableHeaderCell}>Matrícula</th>
                        <th className={classes.pbTableHeaderCell}>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        valores.map((item) => (<HistoryComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default History