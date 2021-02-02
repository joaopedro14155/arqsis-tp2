import React, { useState } from 'react'
import classes from './Dashboard.module.scss'
import ModalComponent from './ModalComponent.js'

const DashboardComponent = ({ data }) => {
  const [show, setShow] = useState(false)

  return (
    
    <tr>
        <td className={classes.pbTableCell}>{data.utilizador}</td>
        <td className={classes.pbTableCell}>{data.lugar}</td>
        <td>
          <img onClick={() => setShow(true)} className={classes.pbTableIcon} src="/assets/multa.svg"></img> 
          <img href="#" className={classes.pbTableIcon} src="/assets/delete.svg"></img>
        </td>
        <ModalComponent onSubmit={() => setShow(false)} show={show}/>
    </tr>
  )
}

export default DashboardComponent