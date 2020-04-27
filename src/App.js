import React from 'react';
import Navigation from './components/Navigation'
import NavigationMobile from './components-mobile/Navigation'
import NavigationTablet from './components-tablet/Navigation'

import Users from './pages/Users'
import UserDetails from './pages/UserDetails'
import TransactionsAdmin from './pages/TransactionsAdmin'
import PropertiesBoughtAdmin from './pages/PropertiesBought'
import PropertiesSoldAdmin from './pages/PropertiesSold'
import PendingPurchasesAdmin from './pages/PendingPurchases'
import ListOfProperties from './pages/ListOfProperties'
import PropertiesOwned from './pages/PropertiesOwned'
import PropertiesDetails from './pages/PropertiesDetails'
import EditProperties from './pages/EditProperties'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation className="navDesktop" />
        <NavigationMobile className="navMobile" />
        <NavigationTablet className="navTablet" />
        
        <Route exact path='/' component={TransactionsAdmin} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/user-details' component={UserDetails} />
        <Route exact path='/transactions/bought' component={PropertiesBoughtAdmin} />
        <Route exact path='/transactions/sold' component={PropertiesSoldAdmin} />
        <Route exact path='/transactions/pending' component={PendingPurchasesAdmin} />
        <Route exact path='/transactions/owned' component={PropertiesOwned} />
        <Route exact path='/properties' component={ListOfProperties} />
        <Route exact path='/properties/details' component={PropertiesDetails} />
        <Route exact path='/properties/modify' component={EditProperties} />
      </Router>
    </div>
  );
}

export default App;
