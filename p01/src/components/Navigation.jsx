import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div>
      <nav>

        <div className="logo">
          <img src="src\assets\brand_logo.png" alt="brand logo" />
        </div>

        <ul>
          <li>MENUE</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <button>Login</button>

      </nav>
    </div>
  )
}

export default Navigation
