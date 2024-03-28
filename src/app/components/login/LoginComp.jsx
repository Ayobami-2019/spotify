import React from 'react';
import style from './style.module.css'
import { MyButton } from '../button'
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
// import { toast } from 'react-toastify';
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigation } from '../../hooks/useNavigation';
import { isUserLogin } from '../../../utilis/user';
import { routes } from '../../../utilis/routes';

export const LoginHero = () => {
    const { navigate } = useNavigation()
    return (
        <div className={style.container}>
            {/* <NavButtons/> */}
            <div className={style.buttonsDiv}>
                <MyButton className={style.bluebg} onClick={() => navigate('playlist')}>
                    <FaFacebook className={style.icon} />
                    &nbsp; CONTINUE WITH FACEBOOK
                </MyButton>
                <MyButton className={style.apple} onClick={() => navigate('playlist')}>
                    <FaApple className={style.icon} />
                    &nbsp; CONTINUE WITH APPLE
                </MyButton>
                <MyButton className={style.google} onClick={() => navigate('playlist')}>

                    <FcGoogle className={style.icon} />
                    &nbsp; CONTINUE WITH GOOGLE
                </MyButton>
            </div>
            <div className={style.divider}><span>OR</span></div>
            <MyForm />

        </div>
    )
}


export const MyForm = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRemeberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)


    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleRememberCheckbox = (event) => {
        setRemeberMe(event.target.checked)
    }
    const handleLogin = async () => {
        setIsSubmitting(true)
        const payload = {
            username: email,
            password: password,
            rememberMe
        }
        console.log({ payload }, "I'm inside")
        //Login user and get token
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
            //note that payload is defined already, the object details can be used directly here
        })

        /*    .then(response => response.json())
            .then(async (response)=>{
               if (response.status !==200){ 
                const data =await response.json()
                throw data
            }
        })
            .then(async(response)=>{
                if (response.status >= 400){
                    const data= await  response.json()
                    throw data
                }
            }) */
    /*    const data = await response.json();
        if (response.status >= 400) {
            toast.error(error.message)
            setError(error.message)
        } else {
            console.log('Success', response)
            localStorage.setItem('user', JSON.stringify(response))
            window.location.href = routes.dashboard()
        }
        setIsSubmitting(false)
        

        .then((response) => {
            return new Promise((resolve, reject) => {
                if (response.status >= 400) {
                    reject(response.json())
                    return
                }
                resolve(response.json())
            })
        }) */

    .then((response) => {
        console.log('Success', response)
        localStorage.setItem('user', JSON.stringify(response))
        window.location.href = routes.dashboard()
    })
    .catch((error) => {
        console.log("Failed", error.message)
        toast(error.message)
        setError(error.message)
    })
    .finally(() => {
        setIsSubmitting(false)
    })
    .then(console.log);
    }
useEffect(() => {
    const user = isUserLogin()
    if (user) {
        window.location.href = routes.dashboard()
    }
}, [])
return (
    <div className={style.formDiv}>
        <form action="">
            {error && <div className={style.error}>{error}</div>}
            <CustomInput onChange={handleEmail} type="email" placeholder="Email address or username" label={"Email address or username"} />
            <CustomInput onChange={handlePassword} type="password" placeholder="Password" label={"Password"} className={style.passwordDiv} />
            <a href="#" className='underline'> Forgot your password?</a>
            <div className={style.continue}>
                <div className={style.remember}>
                    <input onChange={handleRememberCheckbox} id="remember" type="checkbox" />
                    <label htmlFor='remember'>Remember me</label>
                </div>
                <MyButton className={style.loginBtn} title='LOG IN'
                    onClick={handleLogin}
                    disabled={isSubmitting} />
            </div>
        </form>

        <div className={style.divider}></div>
        <div className={style.formFooter}>
            <h3>Don't have an account yet?</h3>
            <MyButton className={style.google} title='SIGN UP FOR SPOTIFY' />
        </div>

    </div>
)
}

export const CustomInput = ({ ...props }) => {
    const [show, setShow] = React.useState(false)
    let label = props.label
    let type = props.type

    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    }
    const handleIconToggle = () => {
        setShow(!show)
    }
    // const hideShowToggle=()=}{

    // }
    // <div className={style.inputDiv}>
    //         <label>{label}</label>
    //         <div className={style.inputFieldDiv}></div>
    return (
        <div className={style.inputDiv}>
            <label>{label}</label>
            <div className={style.inputFieldDiv}>
                <input {...props} type={type} />
                {
                    props.type === 'password' &&
                    <div onClick={handleIconToggle} className={style.viewIcon}>
                        {
                            !show ?
                                <FaRegEyeSlash /> :
                                <FaRegEye />
                        }
                    </div>
                }
            </div>
        </div>
    )
}