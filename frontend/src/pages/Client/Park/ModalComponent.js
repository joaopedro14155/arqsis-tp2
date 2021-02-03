import React from 'react'
import classes from './Park.module.scss'

const valores = [
    {
      precoMinuto: 0.41,
      tempo: 5
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
                        <label>Matrícula</label>
                        <input className={classes.pbInput} value={valores.precoMinuto} type="text" id="matricula" placeholder="Matrícula"></input> <br/>
                        <label>Tempo</label>
                        <input className={classes.pbInput} value={valores.tempo} type="number" id="tempo" placeholder="Tempo"></input><br/>
                        <label>Total: </label>
                    </form>
                </div>
                <div className={classes.pbModalFooter}>
                    <button onClick={props.onSubmit} className={classes.pbButton}>Reservar</button>
                    <button onClick={props.onClose} className={classes.pbButton}>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalComponent