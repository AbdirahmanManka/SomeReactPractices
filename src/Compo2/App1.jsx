// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuBar from './MenuBar'
import Protected from './Protected'
import Dashboard from './Dashboard'
import Products from './Products'
import Home from './Home'

export default function App1() {
  const [isSignedIn, setIsSignedIn] = useState(null)
  const signin = () => {
    setIsSignedIn(true)
  }
  const signout = () => {
    setIsSignedIn(false)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-5 text-center">React Protected Routes Example</h2>
    
        <MenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Dashboard />
              </Protected>
            }
          />
          <Route
            path="/products"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Products />
              </Protected>
            }
          />
        </Routes>
        {isSignedIn ? (
          <div className="d-grid mt-5">
            <button className="btn-danger" onClick={signout}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="d-grid mt-5">
            <button className="btn-dark" onClick={signin}>
              Sign in
            </button>
          </div>
        )}
    
    </div>
  )
}