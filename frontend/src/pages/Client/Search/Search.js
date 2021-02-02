import React from 'react'
import classes from './Search.module.scss'
import SearchComponent from './SearchComponent.js'

// MOCKS
const lugares = [
    {
      latitude: '41,131',
      longitude: '6,1231',
      tipo: 'Elétrico',
      estado: 'Vago'
    }
  ]

const Search = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <form className={classes.pbForm}>
            <div className={classes.searchInputs}>
                <input className={classes.pbInput} type="search" id="rua" placeholder="Nome da Rua"></input>
                <input className={classes.pbInput} type="number" id="kms" placeholder="Raio de Procura"></input>
            </div>
            <div className={classes.searchInputs}>
                <input type="radio" id="normal" value="normal" name="tipo"></input>
                <label>Normal</label>
                <input type="radio" id="eletrico" value="eletrico" name="tipo"></input>
                <label>Elétrico</label>
                <input type="radio" id="deficientes" value="deficientes" name="tipo"></input>
                <label>Deficientes</label>
            </div>
            <input className={classes.pbButton} type="submit" value="Descobrir Lugares"/>
        </form>
        <div className={classes.pbTable}>
            <table>
                <thead>
                    <tr className={classes.pbTableHeader}>
                        <th className={classes.pbTableHeaderCell}>Latitude</th>
                        <th className={classes.pbTableHeaderCell}>Longitude</th>
                        <th className={classes.pbTableHeaderCell}>Tipo</th>
                        <th className={classes.pbTableHeaderCell}>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lugares.map((item) => (<SearchComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Search