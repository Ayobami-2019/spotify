import { combinedClasses } from "../../../utilis/format"

export const Terms=(props)=>{
    const classNames={
        white: "white",
        black: "black"
    }
    const className=classNames[props.type] || classNames.white
    const combined=combinedClasses(className, props.className)
    return(
        props.className ?   
        <p className='terms'>
            <a className={combined}>Terms and conditions apply. </a>  
        </p>
        : 
        <p className='terms'>
            <a className={combined}>Terms and conditions apply.
            <span> 1 month free not available for users who have already tried Premium.</span> </a>  
        </p>
    )
        
}
