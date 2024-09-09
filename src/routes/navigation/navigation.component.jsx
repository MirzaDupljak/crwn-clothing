import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'
const Navigation= () => {
  return (
    <>
      <div className='navigation'>
            <Link className='logo' to='/'>
                <div className='logo-container'>
                    <CrwnLogo className='logo' />
                </div>
            </Link>
            
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'> 
                    SHOP
                </Link>
            </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation