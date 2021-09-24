import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd"}}>
       
  <div className="container">
    <Link className="navbar-brand" href="#" to="/">CRUD APP</Link>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto mb-2 mb-lg-0">
        <NavLink className="nav-link" exact to="/">Home</NavLink>
        <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
        <NavLink className="nav-link" exact to="/about">About</NavLink>
      </div>
      <Link className="btn btn-outline-primary ml-2" to="/users/add"
      >Add User</Link>
    </div>
  </div>
</nav>
    )
}

export default Nav