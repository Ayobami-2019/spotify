import './PaymentPlan.css'
import { PaymentPlanIntro, Buttons,  Terms} from './PaymentPlanComp'

export const PaymentPlan=()=>{
    return(
        <div className='paymentPlan'>
            <PaymentPlanIntro/>
            <Buttons/>
            <Terms/>
        </div>
    )
}