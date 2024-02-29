import './LandingPageHeader.css'
import { Logo } from './Logo'
// import React from 'react' class LandingPageHeaderComponent extends React.Component or import {Component} from 'react'  //used when class is to be used
//named component with arrow function (Arrow method)
export const LandingPageHeader=()=>{
    return (
        <header className="header">
            <div className="logo">
                <Logo useWhite={true}/>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#premium">Premium</a>
                    </li>
                    <li>
                        <a href="#support">Support</a>
                    </li>
                    <li>
                        <a href="#download">Download</a>
                    </li>
                    <li>
                        <a href="#">|</a>
                    </li>
                    <li className='sign'>
                        <a href="#singup">Sign Up</a>
                    </li>
                    <li className='sign'>
                        <a href="#login">Login</a>
                    </li>
                </ul>
                
            </div>
        </header>
    )
}

/* // if it were to be a class instead of function for named component
export class LandingPageHeader extends Component{
    //note render is now a method as in method in class
    //if this keyword will be used then constructor will be reeclared, thus the use of constructor and super(fundamental of class)
    render(){
        return(
            <header className="header">
                <div className="logo">Logo</div>
                <div className="menu"></div>
            </header>
        )
    }
} */