import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import logo from './logo.svg'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route
          element={
            <header className='App-header'>
              <img alt='logo' className='App-logo' src={logo} />
              <Link
                className='App-link'
                to='/about'
              >
                <p>{'Go To About Page'}</p>
              </Link>
            </header>
          }
          path='/'
        ></Route>
        <Route
          element={
            <header className='App-header'>
              <div style={{fontSize: '40px', fontWeight: 700}}>{'About'}</div>
              <Link
                className='App-link'
                to='/'
              >
                <p>{'Go Home'}</p>
              </Link>
            </header>
          }
          path='/about'
        ></Route>
      </Routes>
    </div>
  )
}

export default App
