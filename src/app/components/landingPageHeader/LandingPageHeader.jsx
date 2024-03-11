
import React from 'react'
import './LandingPageHeader.css'
import {Menu } from './LandingHeaderComp'
import { Logo } from '../Logo/Logo'
import {ReactComponent as MenuIcon} from '../../assets/icons/menu.svg'

export const LandingPageHeader=()=>{
    const [showMenu, setMenu] =React.useState(false)
    const toggleMenu=()=>{
        setMenu(showMenu===false)
    }
    return (
        <header className="header">
            <div className="logo">
                <Logo useWhite={true}/>
            </div>
            
            
            <div className="menu" >
                <MenuIcon fill='#ffffff' onClick={toggleMenu} className='menuIcon'/> 
                <Menu className={showMenu ? "mobile" : ""}/>
            </div>
        </header>
    )
}

