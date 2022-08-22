import React from 'react'
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div>
      <nav className='flex justify-end gap-2'>
        <Link to="#admin" className='mr-auto'>Admin</Link>
        <Link to="#Website" >Website</Link>
        <Link to="/">Logout</Link>
      </nav>
    </div>
  )
}

export default DashboardHeader