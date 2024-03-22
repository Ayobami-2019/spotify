import style from'./style.module.css';
import { HeroIntro} from './HeroComp';
import {MyButton} from '../../button';
import { Terms } from '../../terms';
// import  Terms from './terms'
export const Hero=()=>{
    return(
        <section className={style.paymentPlan}>
            <HeroIntro/>
            <div className={style['pricingButtons']}>
                <MyButton type='primary' title='GET STARTED'/>
                <MyButton type='outline' title='SEE OTHER PLANS'/>
            </div>
            <Terms type='white'/>
        </section>
    )
}