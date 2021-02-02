import React from 'react'
import classes from './Login.module.scss'

const Login = (props) => {
  return (
    <div className={classes.alignedCenter}>
      <form className={classes.pbForm}>
        <input className={classes.pbInput} type="email" id="email" placeholder="Inserir Email"/>
        <input className={classes.pbInput} type="password" id="password" placeholder="Inserir Palavra-Passe"/>
        <input className={classes.pbButton} type="submit" value="Login"/>
      </form>
      <a href="/register"><span>Não tem conta? <b>Registar.</b></span></a>
    </div>
  )
}

export default Login