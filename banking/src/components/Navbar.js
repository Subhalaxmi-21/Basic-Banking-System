  import React from 'react'
  import { NavLink } from 'react-router-dom'
  import './nav.css'
  function Navbar() {

      return (
          <nav>
              <NavLink to="/" exact className="links ">
                <b style={{color: '#2E038C', fontSize:'1.5rem'}}>TSF Bank</b>
              </NavLink>
              <span>

              <NavLink to="/" exact className={isActive =>  isActive.isActive ? "navActive" : "links" }>
                Home 
              </NavLink>
              <NavLink to="/customer" exact  className={isActive => isActive.isActive ? "navActive" : "links" }>
              Customers
              </NavLink>
              <NavLink exact  className={isActive => isActive.isActive ? "navActive" : "links" }  to="/transaction"  >
              Transactions
              </NavLink>
              </span>

              {/* <h1>TSF bank</h1>
              <div>
              <h2>
              <NavLink to="/" className="links">
                Home
              </NavLink>
              </h2>
              <h2>
              <NavLink to="/customer" className="links" >
              Customer
              </NavLink>
              </h2>
              <h2>
              <NavLink to="/transaction" className="links">
              Transactions
              </NavLink>
              
              </h2>
              </div> */}
          </nav>
      )
  }

  export default Navbar
