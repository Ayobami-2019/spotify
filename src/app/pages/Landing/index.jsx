import {LandingPageHeader} from '../../components/landingPage/landingPageHeader/LandingPageHeader'
import { Hero } from '../../components/landingPage/hero/Hero';
import { Premium } from '../../components/landingPage/premium';
import { PickPremium } from '../../components/landingPage/pickPremium';
import { Footer} from '../../components/landingPage/footer';
export const LandingPage=()=>{
    return(
        <section>
            <LandingPageHeader/>
            <Hero/>
            <Premium/>
            <PickPremium/>
            <Footer/>
        </section>
    )
}