import React from 'react'
import classes from './Register.module.scss'

const Register = (props) => {
  return (
    <div className={classes.alignedCenter}>
      <form className={classes.pbForm}>
        <input className={classes.pbInput} type="name" id="name" placeholder="Insira o Seu Nome"/>
        <input className={classes.pbInput} type="email" id="email" placeholder="Inserir Email"/>
        <input className={classes.pbInput} type="password" id="password" placeholder="Inserir Palavra-Passe"/>
        <input className={classes.pbButton} type="submit" value="Registar"/>
      </form>
      <a href="/login"><span>Já tem conta? <b>Login.</b></span></a>
    </div>
  )
}

export default Register