import React, { useState } from 'react';
import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return ()=>(window.onscroll = null);
    };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
            <img src="netflix_logo.png" alt="" />
            <Link to="/" className='link'>
              <span>Homepage</span>
            </Link>
            <Link to="/series" className='link'>
              <span>Series</span>
            </Link>
            <Link to="/movies" className='link'>
              <span>Movies</span>
            </Link>
            
            <span>New and Popular</span>
            <span>My List</span>
        </div>
        <div className="right">
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>
            <img src="myimage.jpg" alt="" />
            <div className="profile">
                <ArrowDropDown className='icon'/>
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
