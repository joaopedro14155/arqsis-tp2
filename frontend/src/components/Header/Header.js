import React from 'react'
import { history } from '../../utils/history.js'
import classes from './Header.module.scss'

const Header = (props) => {
  return (
    <div className={classes.header}>
      <a href='/'><img className={classes.appLogo} src='/assets/parking-barcelos.png' alt='PB' /></a>
      
      {/* <li><a href='/convert' className={history.location.pathname.includes('/convert') ? classes.active : null}>Converter</a></li>
      <li><a href='/search' className={history.location.pathname.includes('/search') ? classes.active : null}>Procurar</a></li> */}
      <div className={classes.icons}>
        {/* CLIENTE */}
        <a href='/client/yourarea' className={history.location.pathname.includes('/client/yourarea') ? classes.active : null}>Lugares Livres</a>
        <a href='/client/search' className={history.location.pathname.includes('/client/search') ? classes.active : null}>Procura Lugares</a>
        <a href='/client/listing' className={history.location.pathname.includes('/client/listing') ? classes.active : null}>Preçário</a>
        <a href='/client/park' className={history.location.pathname.includes('/client/park') ? classes.active : null}>Parques</a>
        <a href='/client/zone' className={history.location.pathname.includes('/client/zone') ? classes.active : null}>Zonas</a>
        {/* GESTOR */}
        <a href='/manager/listing' className={history.location.pathname.includes('/manager/listing') ? classes.active : null}>Listagem Lugares</a>
        <a href='/manager/history' className={history.location.pathname.includes('/manager/history') ? classes.active : null}>Histórico Lugares</a>
        <a href='/manager/validation' className={history.location.pathname.includes('/manager/validation') ? classes.active : null}>Validação Contas</a>
        <a href='/manager/pricing' className={history.location.pathname.includes('/manager/pricing') ? classes.active : null}>Tabela de Preços</a>
        <a href='/manager/configuration' className={history.location.pathname.includes('/manager/configuration') ? classes.active : null}>Configurações</a>

        {/* FISCAL */}  
        <a href='/fiscal/dashboard' className={history.location.pathname.includes('/fiscal/dashboard') ? classes.active : null}>Fiscal Dashboard</a>
       
        <a href='/about' className={history.location.pathname.includes('/about') ? classes.active : null}>Acerca de</a>
      </div>
      <div className={classes.loginButton}>
        <a href="/login" className={history.location.pathname.includes('/login') ? classes.active : null}>Log In</a>
      </div>
    </div>
  )
}

export default Header