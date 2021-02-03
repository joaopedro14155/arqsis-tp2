import React, { useState, useEffect } from 'react'
import classes from './Listing.module.scss'
import ListingComponent from './ListingComponent.js'
import apiService from '../../../utils/apiService'
import { history } from '../../../utils/history.js'

// MOCKS
// const valores = [
//     {
//       precoMinuto: 0.41,
//       tempo: 5,
//       multa: 2,
//     }
// ]

const Listing = (props) => {

    const [prices, setPrices] = useState([])

    const [isPick, setIsPick] = useState(false)

    const handleButton = () => {
        apiService.getPrices(setPrices, isPick)
    }
    
    useEffect(() => {
        
      }, [])

  return (
    <div className={classes.alignedCenter}>
        <form className={classes.pbForm}>
            <div className={classes.searchInputs}>
                <input type="radio" onClick={setIsPick(1)} id="1" value="1" name="tipo"></input>
                <label>Zona 1</label>
                <input type="radio" id="2" value="2" name="tipo"></input>
                <label>Zona 2</label>
                <input type="radio" id="3" value="3" name="tipo"></input>
                <label>Parque 1</label>
            </div>
            <input className={classes.pbButton} onClick={handleButton()} type="submit" value="Mostrar Preços"/>
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
                        prices.map((item) => (<ListingComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Listing