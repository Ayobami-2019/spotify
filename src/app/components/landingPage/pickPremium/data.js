import {ReactComponent as Lipi} from '../../../assets/images/lip.svg'
import {ReactComponent as Paytm} from '../../../assets/images/paytm.svg'
import {ReactComponent as Visa} from '../../../assets/images/visa.svg'
import {ReactComponent as Mastercard} from '../../../assets/images/mastercard.svg'
import {ReactComponent as Amex} from '../../../assets/images/amex.svg'
import {ReactComponent as Dinnersclub} from '../../../assets/images/dinnersclub.svg'
import { Terms } from '../../terms'
import style from "./style.module.css" 

export const paymentMethods=[
    {
        icon: <Lipi/>
    },
    {
        icon: <Paytm/>
    },
    {
        icon: <Visa/>
    },
    {
        icon: <Mastercard/>
    },
    {
        icon: <Amex/>
    },
    {
        icon: <Dinnersclub/>
    }
]

export const pricingList=[
    {   
        free: null,
        planName: "Mini",
        price: "From ₹7/day",
        account: "1 account on mobile only",
        features: [
            "Ad-free music listening on mobile",
            "Group Session",
            "Download 30 songs on 1 mobile device",
            // <Terms type='black' className='just-be'/>
        ],
        terms: <Terms type='black' className={style.noCondition}/>
    },
    {
        free: " month free",
        planName: "Individual",
        price: "₹119/month after offer period",
        account: "1 account",
        features: [
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices",
            // <Terms type='black'/>
       ],
       terms: <Terms type='black' className=""/>
    },
    {
        free: "1 month free",
        planName: "Duo",
        price: "₹149/month after offer period",
        account: "2 accounts",
        features: [
            "For couples who live together",
            "Ad-free music listening",
             "Group Session",
            "Download 10k songs/device, on 5 devices per account",
            // <Terms type='black'/>
       ],
       terms: <Terms type='black'/>
    },
    {
        free: "1 month free",
        planName: "Family",
        price: "₹179/month after offer period",
        account: "Up to 6 accounts",
        features: [
            "Download 10k songs/device, on 5 devices per account",
            "Block explicit music",
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices",
            // <Terms type='black'/>
        ],
        terms: <Terms type='black'/>
    }
]