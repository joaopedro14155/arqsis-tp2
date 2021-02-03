import React, { useState } from 'react'
import classes from './Park.module.scss'
import ModalComponent from './ModalComponent.js'

const ParkComponent = ({ data }) => {
  const [show, setShow] = useState(false)

  return (
    
    <tr>
        <td className={classes.pbTableCell}>{data.id}</td>
        <td className={classes.pbTableCell}>{data.rua}</td>
        <td>
          <img onClick={() => setShow(true)} className={classes.pbTableIcon} src="/assets/verify.svg"></img> 
        </td>
        <ModalComponent onSubmit={() => setShow(false)} show={show} onCancel={() => setShow(false)} show={show}/>
        
    </tr>
  )
}

export default ParkComponent