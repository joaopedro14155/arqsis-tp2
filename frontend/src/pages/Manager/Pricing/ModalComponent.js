import React from 'react'
import classes from './Pricing.module.scss'

const valores = [
    {
      precoMinuto: 0.41,
      tempo: 5,
      multa: 2,
    }
]

const ModalComponent = props => {
    if (!props.show) {
        return null
    }

    return ( 
        <div className={classes.pbModal}>
            <div className={classes.pbModalContent}>
                <div className={classes.pbModalHeader}>
                    <div className={classes.pbModalTitle}>
                        <span>Configurar Preços</span>
                    </div>
                </div>
                <div className={classes.pbModalBody}>
                    <form className={classes.pbModalForm}>
                        <label>€/Min</label>
                        <input className={classes.pbInput} value={valores.precoMinuto} type="number" id="precoMinuto" placeholder="€/Min"></input> <br/>
                        <label>Tempo</label>
                        <input className={classes.pbInput} value={valores.tempo} type="number" id="tempo" placeholder="Tempo"></input><br/>
                        <label>Total</label>
                        <input className={classes.pbInput} value={valores.precoMinuto} type="number" disabled="disabled" id="total" placeholder="Total"></input><br/>
                        <label>Multa</label>
                        <input className={classes.pbInput} value={valores.multa} type="number" id="multa" placeholder="Multa"></input>
                    </form>
                </div>
                <div className={classes.pbModalFooter}>
                    <button onClick={props.onSubmit} className={classes.pbButton}>Guardar e Sair</button>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent