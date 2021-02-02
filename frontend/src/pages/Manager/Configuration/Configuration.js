import React, { useState } from 'react'
import classes from './Configuration.module.scss'
import ConfigurationComponent from './ConfigurationComponent.js'
import ModalComponent from './ModalComponent.js'

// MOCKS
const valores = [
    {
      id: 121,
      nome: "Rua dos Amores",
      tipo: "Rua"
    }
]

const Configuration = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <form className={classes.pbForm}>
            <div className={classes.searchInputs}>
                <input type="radio" id="lugares" value="lugares" name="tipo"></input>
                <label>Lugares</label>
                <input type="radio" id="ruas" value="ruas" name="tipo"></input>
                <label>Ruas</label>
                <input type="radio" id="zonas" value="zonas" name="tipo"></input>
                <label>Zonas</label>
                <input type="radio" id="parques" value="parques" name="tipo"></input>
                <label>Parques</label>
            </div>
            <input className={classes.pbButton} type="submit" value="Listar"/>
        </form>
        <div className={classes.pbTable}>
            <table>
                <thead>
                    <tr className={classes.pbTableHeader}>
                        <th className={classes.pbTableHeaderCell}>ID</th>
                        <th className={classes.pbTableHeaderCell}>Nome</th>
                        <th className={classes.pbTableHeaderCell}>Tipo</th>
                        <th className={classes.pbTableHeaderCell}>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        valores.map((item) => (<ConfigurationComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Configuration