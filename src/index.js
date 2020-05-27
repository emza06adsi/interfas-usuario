import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './pages/layout';
import App from './pages/layout'
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/index';
import reduxThunk from 'redux-thunk'

// let data=[]
// data.push(45) 
// sessionStorage.setItem("datos",JSON.stringify(data))
// // let a = JSON.parse()
// console.log(sessionStorage.key(0))

const store=createStore(
  reducers,//todos los reducers
    {},//estado inicial
    applyMiddleware(reduxThunk)
);
ReactDOM.render(
  <React.StrictMode>
<Provider store={ store }>
<App />
</Provider>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
