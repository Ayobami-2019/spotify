import React from 'react';
import style from './style.module.css'
import { MyButton} from '../button'
import {FaRegEyeSlash, FaRegEye} from "react-icons/fa";

export const MyForm=()=>{
    return(
        <div className={style.formDiv}>
            <form action="">
                <CustomInput type="email" placeholder="Email address or username" label={"Email address or username"}/>
                <CustomInput type="password" placeholder="Password" label={"Password" } className={style.passwordDiv}/>
                <a href="#" className='underline'> Forgot your password?</a>
                <div className={style.continue}>
                    <div className={style.remember}>
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </div>
                    <MyButton className={style.loginBtn} title='LOG IN'/>
                </div> 
            </form>
            <div className={style.divider}></div>
            <div className={style.formFooter}>
                <h3>Don't have an account yet?</h3>
                <MyButton className={style.google} title='SIGN UP FOR SPOTIFY'/>
            </div>
            
        </div>
    )
}

export const CustomInput=({...props})=>{
    const [show, setShow]=React.useState(false)
    let label=props.label
    let type=props.type

    if (props.type ==='password'){
        type=!show ? 'password' : 'text'
    }
    const handleIconToggle=()=>{
        setShow(!show)
    }
    // const hideShowToggle=()=}{

    // }
    // <div className={style.inputDiv}>
    //         <label>{label}</label>
    //         <div className={style.inputFieldDiv}></div>
    return(
        <div className={style.inputDiv}>
            <label>{label}</label>
            <div className={style.inputFieldDiv}>
                <input {...props} type={type} />
                {
                    props.type === 'password' && 
                        <div onClick={handleIconToggle} className={style.viewIcon}>
                            {
                                !show ?
                                <FaRegEyeSlash/> :
                                <FaRegEye/>
                            }
                        </div>
                }
            </div>           
        </div>
    )
}