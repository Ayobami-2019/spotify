import { LoginHero } from './LoginComp'
import { Logo } from '../Logo/Logo'
import style from './style.module.css'

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

