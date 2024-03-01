export const PaymentPlanIntro=()=>{
    return(
        <div className='paymentPlanIntro'>
            <h1>Get Premium free for 1 month</h1>
            <p>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
        </div>
    )
}

export const Buttons=()=>{
    return(
        <div className="pricingButtons">
            <button className='pricing fill'>
                <a href="#startprice">GET STARTED</a>
            </button>
            <button className='pricing no-fill'>
                <a href="#otherplan">SEE OTHER PLANS</a>
            </button>
        </div>
    )
}

export const Terms=()=>{
    return(
        <p className="terms">
            <a>Terms and conditions apply.</a> 
            <span>1 month free not available for users who have already tried Premium.</span>
        </p>
    )
}