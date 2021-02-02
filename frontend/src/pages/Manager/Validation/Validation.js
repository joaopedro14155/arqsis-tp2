import React from 'react'
import classes from './Validation.module.scss'
import ValidationComponent from './ValidationComponent.js'

// MOCKS
const multas = [
    {
      email: "joaopedro@gmail.com",
      tipo: "Cliente"
    }
]

const Validation = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <div className={classes.pbTable}>
            <table>
                <thead>
                    <tr className={classes.pbTableHeader}>
                        <th className={classes.pbTableHeaderCell}>E-mail User</th>
                        <th className={classes.pbTableHeaderCell}>Tipo</th>
                        <th className={classes.pbTableHeaderCell}>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        multas.map((item) => (<ValidationComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Validation