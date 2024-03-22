import {MyForm} from './LoginComp'
import { Logo } from '../Logo/Logo'
import style from './style.module.css'
import { MyButton} from '../button'
import { FaFacebook, FaApple} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Login=()=>{
    return(
        <div className={style.login}> 
            <header>
                <div className={style.header}>
                    <Logo className={style.loginLogo}/>
                </div>
            </header>
            <div><LoginHero/></div>
        </div> 
        )
}




export const LoginHero=()=>{
    return(
        <div className={style.container}>
            {/* <NavButtons/> */}
            <div className={style.buttonsDiv}>
                <MyButton className={style.bluebg}>
                    <FaFacebook className={style.icon}/> 
                    &nbsp; CONTINUE WITH FACEBOOK
                </MyButton>
                <MyButton className={style.apple}>
                    <FaApple className={style.icon}/>
                    &nbsp; CONTINUE WITH APPLE
                </MyButton>
                <MyButton className={style.google}>
                    
                    <FcGoogle className={style.icon}/>
                    &nbsp; CONTINUE WITH GOOGLE
                </MyButton>
            </div>
            <div className={style.divider}><span>OR</span></div>
            <MyForm/>
            
        </div>
    )
}