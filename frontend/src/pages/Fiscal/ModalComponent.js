import React from 'react'
import classes from './Dashboard.module.scss'

const valores = [
    {
      id: 131,
      nome: 'Zona 1',
      tipo: 'Zona',
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
                        <span>Multar</span>
                    </div>
                </div>
                <div className={classes.pbModalBody}>
                    <form className={classes.pbModalForm}>
                        <label>Matrícula</label>
                        <input className={classes.pbInput} value={valores.precoMinuto} disabled="disabled" id="id" placeholder="ID"></input> <br/>
                        <label>Valor</label>
                        <input className={classes.pbInput} value={valores.tempo} type="number" id="nome" placeholder="Nome"></input>
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