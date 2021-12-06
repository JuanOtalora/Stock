import './TopNavigation.css';
import logo from '../../constants/img/logoRobinW.svg';
import { Slant as Hamburger } from 'hamburger-react'
import React, { useState } from 'react';

function TopNavigation() {

    const [isOpen, setOpen] = useState(false)
    
  return (
    <div className="Header">
        <div style={{display:'flex', marginLeft: '30px'}}>
            <text style={{fontWeight: 'regular',  fontSize: '22px', marginRight: '8px'}}>Rominhood</text>
            <img src={logo} height='25'></img>
        </div>
        <div style={{marginRight: '30px'}}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    </div>
  );
}

export default TopNavigation;