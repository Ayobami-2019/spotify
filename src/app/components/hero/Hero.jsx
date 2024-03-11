import style from'./style.module.css'
import { HeroIntro, HeroButton, Terms} from './HeroComp'
// import  Terms from './terms'

export const Hero=()=>{
    return(
        <section className={style.paymentPlan}>
            <HeroIntro/>
            <div className={style['pricingButtons']}>
                <HeroButton type='primary' title='GET STARTED'/>
                <HeroButton type='outline' title='SEE OTHER PLANS'/>
            </div>
            <Terms type='white'/>
        </section>
    )
}