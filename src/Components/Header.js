import { React, ComponentElement, useState,useContext } from 'react';
import {LogoIcon, MoonIcon, SunIcon} from '../assets/icons';
import { ThemeContext } from '../App';


const Header = () => {

  const {isDark, setIsDark}=useContext(ThemeContext)
  return (
    <header className='header'> 
        <div className='logo-wrapper'>
          <LogoIcon />
          <button onClick={()=>setIsDark(!isDark)}className='icon'>{isDark? <MoonIcon/> : <SunIcon/>}</button>
        </div>
    </header>
  )
}

export default Header