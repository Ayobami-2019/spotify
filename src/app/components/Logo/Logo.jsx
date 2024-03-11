import spotifywhite from '../../assets/images/spotify-white.png'
import spotifyblack from '../../assets/images/spotify-black.png'
//change the above to svg
// import {ReactComponent as Spotifywhite} from '../../assets/images/whitelogo.svg'  //anoter name other than ReactComponenr will not work
// import {ReactComponent as Spotifyblack} from '../../assets/images/blacklogo.svg' //spotify\src\app\assets\images\blacklogo.svg
import style from './style.module.css'



export const Logo= (props)=>{
    
    // if(props.useWhite){
    //     return(
    //         <a href="#dashboard">
    //             <img src={Spotifywhite} />
                
    //         </a>
            
            
    //     )
    // } else{
    //     return(
    //         <a href="#dashboard">
    //             <img src={Spotifyblack} />
                
    //         </a>
    //     )
    // }

    let myImage=props.useWhite ? spotifywhite:spotifyblack
    return(
        <a href="#dashboard" className={style.logo}>
            <img src={myImage} />
       </a>
    )
}
