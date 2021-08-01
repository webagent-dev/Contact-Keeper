import React from 'react'
import ReactDOM from 'react-dom'
import App from './comps/Contact'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Contact from './comps/Contact'
import Navbar from './comps/Navbar'
import Form from './comps/Form'
import Edit from './comps/Edit'
import './App.css'
import store from './app/store'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
<Router>
    <Navbar />
    <Switch>
        <Route exact path='/' component={Contact}/>
        <Route path='/form' component={Form}/>
        <Route path='/edit/:id' component={Edit}/>

    </Switch>
</Router>
</Provider>,
document.getElementById('root')
)