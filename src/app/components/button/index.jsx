import {combinedClasses} from '../../../utilis/format'
import style from './style.module.css'

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
        props.onClick ?
        <button {...props} className={combineClass} >{props.title || props.children}</button> :

       <button className={combineClass}>{props.title || props.children}</button> 
        )
}