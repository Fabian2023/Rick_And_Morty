import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(       // 1 ejercicio, envolver app en BrowserRouter
  <BrowserRouter>
  <App />
  </BrowserRouter>,

  document.getElementById('root')
)
