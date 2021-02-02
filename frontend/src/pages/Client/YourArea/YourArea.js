import React from 'react'
import classes from './YourArea.module.scss'
import YourAreaComponent from './YourAreaComponent.js'

// MOCKS
const lugares = [
    {
      latitude: '41,131',
      longitude: '6,1231',
      tipo: 'Elétrico',
      estado: 'Vago'
    },
    {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      },
      {
        latitude: '41,131',
        longitude: '6,1231',
        tipo: 'Elétrico',
        estado: 'Vago'
      }
  ]

const YourArea = (props) => {
  return (
    <div className={classes.alignedCenter}>
        <form className={classes.pbForm}>
            <div className={classes.yourAreaInputs}>
                <input className={classes.pbInput} type="number" id="lat" placeholder="Inserir Latitude"></input>
                <input className={classes.pbInput} type="number" id="lon" placeholder="Inserir Longitude"></input>
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
                        lugares.map((item) => (<YourAreaComponent data={item} />))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default YourArea