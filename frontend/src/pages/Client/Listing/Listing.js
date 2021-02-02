import React from 'react'
import classes from './Listing.module.scss'
import ListingComponent from './ListingComponent.js'

// MOCKS
const valores = [
    {
      precoMinuto: 0.41,
      tempo: 5,
      multa: 2,
    }
]

const Listing = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <form className={classes.pbForm}>
            <div className={classes.searchInputs}>
                <input type="radio" id="normal" value="normal" name="tipo"></input>
                <label>Zona 1</label>
                <input type="radio" id="eletrico" value="eletrico" name="tipo"></input>
                <label>Zona 2</label>
                <input type="radio" id="deficientes" value="deficientes" name="tipo"></input>
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