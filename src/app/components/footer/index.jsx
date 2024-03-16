import { Logo } from '../Logo/Logo'
import style from './style.module.css'
import {Navigation, SocialLinks, Footerfooter} from './footerComp'
import {navList} from './data.js'

export const Footer=()=>{
    return(
        <footer className={style.footer}>
            <div className={style.footer1}>
                <Logo useWhite={true}/>
                {/* <Navigation/> */}
                <div className={style.navDiv}>
                    {navList.map((lists)=>{
                        return <Navigation {...lists}/>
                    })
                    }
                </div>
                <SocialLinks/>
            </div>
            <div>
                <Footerfooter/>
            </div>
        </footer>
    )
}


// import React from "react";

// export const getCurrentHash = () => {
//     return window.location.hash.replace('#', '')
// }

// export const navigate = (path) => {
//     window.location.hash = '#/'+path
// }

// export const useNavigation = () => {
//     const [url, setState] = React.useState(getCurrentHash())
//     window.addEventListener('hashchange', function (e) {
//         const path = getCurrentHash()
//         setState(path)
//     });
//     return {url, navigate}
// }