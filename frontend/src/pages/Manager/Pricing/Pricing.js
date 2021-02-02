import React, { useState } from 'react'
import classes from './Pricing.module.scss'
import PricingComponent from './PricingComponent.js'
import ModalComponent from './ModalComponent.js'

// MOCKS
const valores = [
    {
      precoMinuto: 0.41,
      tempo: 5,
      multa: 2,
    }
]

const Pricing = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <form className={classes.pbForm}>
            <div className={classes.searchInputs}>
                <input type="radio" id="zona1" value="zona1" name="tipo"></input>
                <label>Zona 1</label>
                <input type="radio" id="zona1" value="zona2" name="tipo"></input>
                <label>Zona 2</label>
                <input type="radio" id="parque1" value="parque1" name="tipo"></input>
                <label>Parque 1</label>
            </div>
            <input className={classes.pbButton} type="submit" value="Mostrar Preços"/>
        </form>
        <div className={classes.pbTable}>
            <table>
                <thead>
                    <tr className={classes.pbTableHeader}>
                        <th className={classes.pbTableHeaderCell}>€/Min</th>
                        <th className={classes.pbTableHeaderCell}>Tempo</th>
                        <th className={classes.pbTableHeaderCell}>Total</th>
                        <th className={classes.pbTableHeaderCell}>Multa</th>
                        <th className={classes.pbTableHeaderCell}>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        valores.map((item) => (<PricingComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Pricing