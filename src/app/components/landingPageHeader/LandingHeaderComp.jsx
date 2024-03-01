import spotifywhite from '../../assets/images/spotify-white.png'
import spotifyblack from '../../assets/images/spotify-black.png'
import {ReactComponent} from '../../assets/images/Frame.svg'  //anoter name other than ReactComponenr will not work

export const Logo= (props)=>{
    if(props.useWhite){
        return(
            <a href="#dashboard">
                {/* <img src={spotifywhite} /> */}
                <ReactComponent />
            </a>
            
            
        )
    } else{
        return(
            <a href="#dashboard">
                <img src={spotifyblack} />
            </a>
        )
    }
}

export const Menu=()=>{
    return(
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
    )
}