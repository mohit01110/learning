import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <div className="header">
        {/* Netflix logo and navigation links can be added here */}
        <img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt="Netflix Logo" />
        <nav>
          <a href="#">Home</a>
          <a href="#">TV Shows</a>
          <a href="#">Movies</a>
          <a href="#">New & Popular</a>
          <a href="#">My List</a>
          <a href="#">Login</a>
        </nav>
      </div>
  )
}

export default Header