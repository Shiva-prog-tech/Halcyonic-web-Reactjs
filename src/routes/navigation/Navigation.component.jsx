import React from 'react';
import {Outlet, Link } from 'react-router-dom';


import './navigation.styles.scss'

const Navigation= () => {
  return (
    <div>
    <div className='navigation-bar'>
        <div className='logo'>
        <Link to='/'>
        <h1>Halcyonic</h1>
        </Link>
            
        </div>
        <div className='links-list'>
            <ul className='links'>
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/about">About</Link></li>
                <li><Link className="link" to="/career">Career</Link></li>
                <li><Link className="link" to="/contact">Contact</Link></li>
                
            </ul>
        </div>
        
    </div>
    <Outlet/>
    </div>
  );
}

export default Navigation;
