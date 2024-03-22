import style from './style.module.css'
import { FaInstagram, FaEarthAfrica, FaFacebookF, FaTwitter} from "react-icons/fa6";


export const Navigation=(props)=>{
    return(
        <div className={style.nav}>
            <p className={style.navTitle}>{props.navTitle} </p>
            <ul className={style.navList}>
                {props.navs.map((nav)=>
                    <li className='p-sixteen'>{nav}</li>   
                )}
            </ul>
        </div>
    )
}

export const SocialLinks=()=>{
    return(
        <div className={style.socials}>
            <div><FaInstagram className={style.logo}/></div>
            <div><FaTwitter className={style.logo}/></div>
            <div><FaFacebookF className={style.logo}/></div>
        </div>
    )
}

export const Footerfooter=()=>{
    return(
        <div  className={style.footer2}>
            <ul className={style.footerlist}>
                <li>Privacy Center</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
            </ul>
            <div className={style.owner}>
                    <p ><FaEarthAfrica/> India (English)</p>
                    <p > &#169; Spotify AB</p>
            </div>
        </div>
        
    )
}