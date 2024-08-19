import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
    <div className="navbar">
        
  <div className="nav_logo border">
            <div className="logo"></div>
       </div>
       
  <div className="nav-address border">
          <p className="add-first">Deliver to</p>
          <div className="address-icon">
            <i className="fa-solid fa-location-dot"></i>
            <p className="add-second">Pakistan</p>
        </div>
      </div>

  <div className="nav-search">
            <select className="select-search">
             <option>All</option>
            </select>
            <input type="text" placeholder="Search Amazon" className="search-input"/>
           <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
      </div>
        </div>
        <div className="nav-signin border">
          <p><span>Hello, Sign in</span></p>
          <p className="nav-second">Account & Lists</p>
        </div>

        <div className="return border">
          <p><span>Returns</span></p>
          <p className="nav-second">& Orders</p>
        </div>
           
          <div className="nav-cart border">
            <i className="fa-solid fa-cart-shopping"></i>
            Cart
          </div>

    </div>
  </header>
  );
}

export default Header;
