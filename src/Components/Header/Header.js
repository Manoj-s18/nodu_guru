import React from 'react'
import {Link} from 'react-router-dom'
import user from './../../images/user2.png'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
      <div className='logo'>Nodu Guru</div>
      </Link>
      <div className='user'>
        <img src={user} alt='user'/>
      </div>
    </div>
  )
}

export default Header;