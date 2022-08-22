import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/service">Service</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>
    </div>
  )
}

export default Header