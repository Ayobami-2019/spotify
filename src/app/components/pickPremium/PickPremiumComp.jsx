import style from './style.module.css'
import Check from '../../assets/images/check.png'
import { Terms } from '../hero/HeroComp'
import { HeroButton } from '../hero/HeroComp'
import { paymentMethods} from './data'

// export const PaymentMethods=()=>{
//     return(
//         <div className={style.paymentMethods}>
//             <Lipi/>
//             <Paytm/>
//             <Visa/>
//             <Mastercard/>
//             <Amex/>
//             <Dinnersclub/>
//         </div>
//     )
// }

export const PaymentMethods=()=>{
    const renderPaymentMethod=(method)=>{
        if (method.icon) return
        <PaymentMethods.icon/>
        return null
    }
    return(
        <div>
            {
                paymentMethods.map(renderPaymentMethod)
            }
        </div>
    )
}

export const PricingCardItem=(props)=>{
    return(
        
            <div className={style.planOption}>
                <div className={style.intro}>
                    {props.free && <span className={style.free}>1 month free</span>}
                    <span className={style['one-time']}>One-time plans available</span>
                    <h3>{props.planName}</h3>
                    <p className='p-sixteen'>{props.price}</p>
                    <p className='p-sixteen'>{props.account}</p>
                </div>
            
                <div className={style.features}>
                    <ul className={style.featuresDiv}>
                        {
                            props.features.map((feature)=>
                                <li className={style.feature}>
                                    <img className={style.image} src={Check} alt="" />
                                    <p className='p-sixteen'>{feature}</p>
                                </li>
                            )
                        }
                    </ul>
                    <div className={style.Button}>
                        <HeroButton type='primary' title='VIEW PLANS'/>
                    </div>
                </div>
                <p className={style.terms}>
                    <Terms type='black'/>
                </p>
            </div>
)}