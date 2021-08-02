import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';
import './index.css'
import {Provider} from 'react-redux' 
import configureStore from './store/configureStore'
import { addUser, deleteUser, userStatus } from './action/userAction';

const store = configureStore()
//console.log(store)
//console.log(store.getState())
 store.subscribe(()=>{
    console.log(store.getState())
 })
// store.dispatch(userStatus(1624521899914))
//  store.dispatch(userStatus(1624521730086))
//  store.dispatch(addUser({username:'bf'}))
  store.dispatch(deleteUser(1624622549108))

ReactDOM.render(<Provider store={store}><App/></Provider> ,document.getElementById('root'))
