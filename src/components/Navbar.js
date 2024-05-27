import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = () => {
    
  return (
    <div>
        <header>
        <h1>Dummy</h1>
        <div className='links'>
        <Link to='/' className='list-item'>Home</Link>
        <Link to='/products' className='list-item'>products</Link>
        </div>
      </header>
    </div>
  )
}

export default Navbar