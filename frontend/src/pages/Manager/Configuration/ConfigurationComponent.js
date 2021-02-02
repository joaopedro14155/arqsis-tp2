import React, { useState } from 'react'
import classes from './Configuration.module.scss'
import ModalComponent from './ModalComponent.js'

const ConfigurationComponent = ({ data }) => {
  const [show, setShow] = useState(false)

  return (  
    <tr>
        <td className={classes.pbTableCell}>{data.id}</td>
        <td className={classes.pbTableCell}>{data.nome}</td>
        <td className={classes.pbTableCell}>{data.tipo}</td>
        <td>
          <img onClick={() => setShow(true)} className={classes.pbTableIcon} src="/assets/edit.svg"></img> 
          <img href="#" className={classes.pbTableIcon} src="/assets/delete.svg"></img>
        </td>
        <ModalComponent onSubmit={() => setShow(false)} show={show}/>
    </tr>
  )
}

export default ConfigurationComponent