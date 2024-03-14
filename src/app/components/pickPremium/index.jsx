import style from './style.module.css'
import { PaymentMethods, PricingCardItem} from './PickPremiumComp'
import { HeroButton } from '../hero/HeroComp'
import {pricingList} from './data'

export const PickPremium=()=>{
    return(
        <section className={style.pickPremium}>
            <div className={style.pickPremiumIntro}>
                <h3 className='section-title'>Pick your Premium</h3>
                <p className='p-sixteen'>Listen without limits on your phone, speaker, and other devices.</p>
                <PaymentMethods/>
                {/* {renderPaymentMethod(PaymentMethods[0])} */}
                
            </div>
            {/* <Plans/> */}
            <div className={style.premiumOptions}>
                {/* <PricingCardItem planName="Mini" price="From ₹7/day" account="1 account on mobile only" features=""/>
                <PricingCardItem free="true" planName="Individual" price="₹149" account="1 account"/>
                <PricingCardItem free="true" planName="Duo" price="₹179" account="2 accounts"/> */}
                {
                pricingList.map((plans)=>{
                    return <PricingCardItem {...plans}/>
                })
                }
                
            </div>
            
            <div className={style.planFooter}>
                <h3>Special discount for eligible students in university</h3>
                <HeroButton type='secondary' title='LEARN MORE'/>
            </div>
        </section>
    )
}