import style from'./style.module.css'

export const HeroIntro=()=>{
    return(
        <div className={style.paymentPlanIntro}>
            <h1>Get Premium free for 1 month</h1>
            <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
        </div>
    )
}

export const HeroButton=(props)=>{
    const classNames={
        primary: "fill",
        outline: "nofill",
        secondary: "nofill black"
    }
    const minee=classNames[props.type] || classNames.primary
    // const className1="green"
    return(
        // props.onClick ? <button className={className}>{props.title}</button> 
        // : 
        // <a href='#' className={className}>{props.title}</a>
        // )
       <button className={minee}>{props.title}</button> 
        )
    
}

export const Terms=(props)=>{
    const classNames={
        white: "white",
        black: "black"
    }
    const className=classNames[props.type] || classNames.white
    return(
        props.className ?   
        <p className='terms'>
            <a className={className}>Terms and conditions apply. </a>  
        </p>
        : 
        <p className='terms'>
            <a className={className}>Terms and conditions apply.
            <span> 1 month free not available for users who have already tried Premium.</span> </a>  
        </p>
    )
        
}
