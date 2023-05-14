/* eslint-disable no-undef */
/* eslint-disable camelcase */
import './public-path'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {createRoot} from 'react-dom/client'

import App from './App'
import './index.css'

const rootComponent = (pathname) => (
  <Router basename={pathname}>
    <App />
  </Router>
)

let root

function retrieveContainer (props) {
  const {container} = props
  return container ? container.querySelector('#root') : document.querySelector('#root')
}

function render (props) {
  const {pathname} = new URL(
    document.querySelector('qiankun-head base')?.href ?? document.baseURI,
    window.document.baseURI
  )
  root = root || createRoot(retrieveContainer(props))
  root.render(rootComponent(pathname))
}

export async function mount (props) {
  render(props)
}

export async function unmount () {
  root && root.unmount()
  root = undefined
}

export async function bootstrap () {

}

if (!window.__POWERED_BY_QIANKUN__) {
  render({})
}
