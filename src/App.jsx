import React, { useState } from 'react'
import LandrosImg from './assets/LandrosEntreprise.png'
import SparkImg from './assets/Spark.png'
import LandrosSmallLogo from './assets/LandrosSmallLogo.png'
import './App.css'

function App() {
  const [showBrands, setShowBrands] = useState(false)

  const handleBrandsClick = () => {
    console.log('Clicked! showBrands:', !showBrands)
    setShowBrands(!showBrands)
  }

  return (
    <div>
      <div className="header-container">
        {/* Header */}
        <header className="header">
          <div 
            className="header-left"
            onClick={handleBrandsClick}
          >
            Our Family of Brands
          </div>
          <div className="header-right">
            <span className="header-link">Careers</span>
            <span className="header-link">Contact</span>
            <span className="header-link">Landros's Select Club Log In</span>
          </div>
        </header>

        {/* Brands Section - Shows when clicked - Overlays main header */}
        {showBrands && (
          <div className="brands-overlay">
            {/* Navigation Bar */}
            <nav className="nav-bar">
              <div className="nav-items">
                <span className="nav-item">Featured Brands</span>
              </div>
            </nav>

            {/* Brands Grid */}
            <div className="brands-container">
              <div className="brand-card">
                <div className="brand-logo-box">
                  <img 
                    src={SparkImg} 
                    alt="Spark.ai" 
                    className="brand-logo"
                  />
                </div>
                <p className="brand-name">Spark.ai</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Second Header */}
      <div className="main-header">
        <div className="main-header-left">
          <span className="location-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
              <path d="M8 8.5C8.82843 8.5 9.5 7.82843 9.5 7C9.5 6.17157 8.82843 5.5 8 5.5C7.17157 5.5 6.5 6.17157 6.5 7C6.5 7.82843 7.17157 8.5 8 8.5Z" stroke="#000000" strokeWidth="1.5"/>
              <path d="M8 1C5.51472 1 3.5 3.01472 3.5 5.5C3.5 8.5 8 15 8 15C8 15 12.5 8.5 12.5 5.5C12.5 3.01472 10.4853 1 8 1Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Find offices
          </span>
        </div>
        <div className="main-header-center">
          <img 
            src={LandrosSmallLogo} 
            alt="Landros LDS Enterprises" 
            className="main-logo"
          />
        </div>
        <div className="main-header-right">
          <span className="search-link">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '0.5rem' }}>
              <path d="M11.5 10.5L15 14M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Search
          </span>
        </div>
      </div>
      <div className="header-separator"></div>

      {/* Main Content - Always visible */}
      <div className="main-content">
        <img 
          src={LandrosImg} 
          alt="Entreprises Landros" 
          className="company-image"
        />
        <h1>Entreprises Landros</h1>
      </div>
    </div>
  )
}

export default App

