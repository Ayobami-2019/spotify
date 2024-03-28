import React from "react"



export const Menu=(props)=>{
    return(
            <ul className={props.className}>
                <li>
                    <a href="#premium">Premium</a>
                </li>
                <li>
                    <a href="#support">Support</a>
                </li>
                <li>
                    <a href="#download">Download</a>
                </li>
                <li className="hidden">|</li>
                <li className='sign'>
                    <a href="#singup">Sign Up</a>
                </li>
                <li className='sign'>
                    <a href="/login">Login</a>
                </li>
            </ul>
    )
}