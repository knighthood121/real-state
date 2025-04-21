import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Project from './pages/Project'
import Services from './pages/Services'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Project/>
        <Services/>
        <About/>
        <Footer />
      </div>
    </Router>
  )
}

export default App