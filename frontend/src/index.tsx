import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import PubSub from 'pubsub-js'

(window as any).PubSub = PubSub as any

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)