import style from './style.module.css'
import Check from '../../assets/images/check.png'
import { Terms } from '../hero/HeroComp'
import { HeroButton } from '../hero/HeroComp'

import {ReactComponent as Lipi} from '../../assets/images/lip.svg'
import {ReactComponent as Paytm} from '../../assets/images/paytm.svg'
import {ReactComponent as Visa} from '../../assets/images/visa.svg'
import {ReactComponent as Mastercard} from '../../assets/images/mastercard.svg'
import {ReactComponent as Amex} from '../../assets/images/amex.svg'
import {ReactComponent as Dinnersclub} from '../../assets/images/dinnersclub.svg'


export const PaymentMethods=()=>{
    return(
        <div className={style.paymentMethods}>
            <Lipi/>
            <Paytm/>
            <Visa/>
            <Mastercard/>
            <Amex/>
            <Dinnersclub/>
        </div>
    )
}
// const plans={
//     info:{
//         info:"hello"
//     },
//     [{
//         features:{
//             featuresInfo:{
//                 info1: "Ad-free music listening on mobile",
//                 info2: "Group Session",
//                 info3: "Download 30 songs on 1 mobile device"
//             },
//             terms: <Terms type='black' className='just-be'/>
//         },
//         features:{
//             featuresInfo:{
//                 info1: "Ad-free music listening",
//                 info2: "Group Session",
//                 info3: "Download 10k songs/device on 5 devices"
//             },
//             terms: <Terms type='black'/>
//         },
//         features:{
//             featuresInfo:{
//                 info1: "For couples who live together",
//                 info2: "Ad-free music listening",
//                 info3: "Group Session",
//                 info4: "Download 10k songs/device, on 5 devices per account"
//             },
//             terms: <Terms type='black'/>
//         },
//         features:{
//             featuresInfo:{
//                 info1: "Download 10k songs/device, on 5 devices per account",
//                 info2: "Block explicit music",
//                 info3: "Ad-free music listening",
//                 info4: "Group Session",
//                 info5: "Download 10k songs/device on 5 devices"
//             },
//             terms: <Terms type='black'/>
//         }
//     }]
// }
const plans=[
    
    {
       info1: "Ad-free music listening on mobile",
       info2: "Group Session",
       info3: "Download 30 songs on 1 mobile device",
       terms: <Terms type='black' className='just-be'/>
    },
    {
       info1: "Ad-free music listening",
       info2: "Group Session",
       info3: "Download 10k songs/device on 5 devices",
       terms: <Terms type='black'/>
    },
    {
       info1: "For couples who live together",
       info2: "Ad-free music listening",
       info3: "Group Session",
       info4: "Download 10k songs/device, on 5 devices per account",
       terms: <Terms type='black'/>
    },
    {
       info1: "Download 10k songs/device, on 5 devices per account",
       info2: "Block explicit music",
       info3: "Ad-free music listening",
       info4: "Group Session",
       info5: "Download 10k songs/device on 5 devices",
       terms: <Terms type='black'/>
    }
]

export const Plans=()=>{
    return(
        <div className={style.premiumOptions}>
            {plans.map((plan)=>(
                <div className={style.planOption}>
                    <div className={style.intro}>
                        <button></button>
                        <h1></h1>
                        <p></p>
                        <p></p>
                    </div>
                    <div className={style.features}>
                        <div className={style.featuresDiv}>
                            <div className={style.feature}>
                                <img className={style.image} src={Check} alt="" />
                                <p className='p-sixteen'>{plan.info1}</p>
                            </div>
                            <div className={style.feature}>
                                <img className={style.image} src={Check} alt="" />
                                <p className='p-sixteen'>{plan.info2}</p>
                            </div>
                            <div className={style.feature}>
                                <img className={style.image} src={Check} alt="" />
                                <p className='p-sixteen'>{plan.info3}</p>
                            </div>
                        </div>
                        <HeroButton type='primary' title='VIEW PLANS'/>
                    </div>
                    
                    <p className={style.terms}>{plan.terms}</p>
                </div>
            ))}
        </div>
       
    )
}