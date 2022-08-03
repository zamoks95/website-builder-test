import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import WebSiteBuilder from './pages/WebSiteBuilder'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WebSiteBuilder />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
