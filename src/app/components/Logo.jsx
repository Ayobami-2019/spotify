import spotifywhite from '../assets/images/spotify-white.png'
import spotifyblack from '../assets/images/spotify-black.png'
import {ReactComponent} from '../assets/images/Frame.svg'  //anoter name other than ReactComponenr will not work

export const Logo= (props)=>{
    if(props.useWhite){
        return(
            <a href="#dashboard">
                <img src={spotifywhite} />
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