import React, { useState } from 'react'
import classes from './Pricing.module.scss'
import ModalComponent from './ModalComponent.js'

const PricingComponent = ({ data }) => {
  const [show, setShow] = useState(false)

  return (  
    <tr>
        <td className={classes.pbTableCell}>{data.precoMinuto}</td>
        <td className={classes.pbTableCell}>{data.tempo}</td>
        <td className={classes.pbTableCell}></td>
        <td className={classes.pbTableCell}>{data.multa}</td>
        <td>
          <img onClick={() => setShow(true)} className={classes.pbTableIcon} src="/assets/edit.svg"></img> 
          <img href="#" className={classes.pbTableIcon} src="/assets/delete.svg"></img>
        </td>
        <ModalComponent onSubmit={() => setShow(false)} show={show}/>
    </tr>
  )
}

export default PricingComponent