import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {

  const [inputSearch,setInputSearch]= useState ("")
  return (
    <div className='header'>
        
     <div className='header-left'>
      <MenuIcon/>
      <Link to="/">
      <img className="header-logo" src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='no text found'/>
      </Link>
      </div>

      <div className="header-middle">
      <input onChange={e=> setInputSearch(e.target.value)} value={inputSearch} type="text" placeholder="Search" input/>
     <Link to={`/search/${inputSearch}`}>
     <SearchIcon className='header-input'/>
     </Link>
     </div>

     <div className='header-right'>
     <VideoCallIcon className="header-icon"/>
     <AppsIcon className="header-icon"/>
     <NotificationsIcon className="header-icon"/>
     <AccountCircleIcon className="header-icon"/>
     </div> 
   
    </div>
  )
}

export default Header
