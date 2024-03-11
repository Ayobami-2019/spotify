import style from './style.module.css'
import { PaymentMethods, Plans } from './PickPremiumComp'
import { HeroButton } from '../hero/HeroComp'

export const PickPremium=()=>{
    return(
        <section className={style.pickPremium}>
            <div className={style.pickPremiumIntro}>
                <h3 className='section-title'>Pick your Premium</h3>
                <p className='p-sixteen'>Listen without limits on your phone, speaker, and other devices.</p>
                <PaymentMethods/>
            </div>
            <Plans/>
            <div className={style.planFooter}>
                <h3>Special discount for eligible students in university</h3>
                <HeroButton type='secondary' title='LEARN MORE'/>
            </div>
        </section>
    )
}