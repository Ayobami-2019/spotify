import {combinedClasses} from '../../../utilis/format'

export const MyButton=(props)=>{
    const classNames={
        primary: "fill",
        outline: "nofill",
        secondary: "nofill black"
    }
    const className=classNames[props.type] || classNames.primary
    const combineClass=combinedClasses(className, props.className)
    // const className1="green"
    return(
        // props.onClick ? <button className={className}>{props.title}</button> 
        // : 
        // <a href='#' className={className}>{props.title}</a>
        // )
       <button className={combineClass}>{props.title || props.children}</button> 
        )
}