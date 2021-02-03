import React, { Component } from 'react'
import { history } from './utils/history.js'
import Header from './components/Header/Header.js'

import About from './pages/About/About.js'
import Register from './pages/Register/Register.js'
import Login from './pages/Login/Login.js'

import ClientYourArea from './pages/Client/YourArea/YourArea.js'
import ClientSearch from './pages/Client/Search/Search.js'
import ClientListing from './pages/Client/Listing/Listing.js'
import ClientPark from './pages/Client/Park/Park.js'

import ManagerListing from './pages/Manager/Listing/Listing.js'
import ManagerHistory from './pages/Manager/History/History.js'
import ManagerValidation from './pages/Manager/Validation/Validation.js'
import ManagerPricing from './pages/Manager/Pricing/Pricing.js'
import ManagerConfiguration from './pages/Manager/Configuration/Configuration.js'

import FiscalDashboard from './pages/Fiscal/Dashboard.js'

// import ReactNotification from 'react-notifications-component'
// import 'react-notifications-component/dist/theme.css'

import { Router, Switch, Route, Redirect } from 'react-router-dom'
import classes from './App.module.scss'

const NotFound = (props) => {
  return (
    <div className={classes.alignedCenter}><b>404.</b><br/>Parece que nem todos os caminhos vão dar a Roma.</div>
  )
}

class App extends Component {
  render () {
    return (<>
      {/* <ReactNotification /> */}
      <div className={classes.app}>
        <Router history={history}>
          <div className={classes.wapper}>
            <Header />
            <div className={classes.body}>
              <Switch>
                {/* Páginas Globais */}
                <Route path='/about' component={About} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />

                {/* Páginas para os Clientes */}
                <Route path='/client/yourarea' component={ClientYourArea} />
                <Route path='/client/search' component={ClientSearch} />
                <Route path='/client/listing' component={ClientListing} />
                <Route path='/client/park' component={ClientPark} />

                {/* Páginas para os Gestores */}
                <Route path='/manager/listing' component={ManagerListing} />
                <Route path='/manager/history' component={ManagerHistory} />
                <Route path='/manager/validation' component={ManagerValidation} />
                <Route path='/manager/pricing' component={ManagerPricing} />
                <Route path='/manager/configuration' component={ManagerConfiguration} />

                {/* Páginas para os Fiscais */}
                <Route path='/fiscal/dashboard' component={FiscalDashboard} />

                {/* Página Default */}
                <Redirect to='/client/yourarea'/>
                <Route path='/:subId' component={NotFound} />
              </Switch>
            </div>
            <div className={classes.footer} />
          </div>
        </Router>
      </div>
            </>
    )
  }
}

export default App