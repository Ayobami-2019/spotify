import { PlayOptions } from "./premiumComp"
import style from "./style.module.css"


export const Premium=()=>{
    return(
        <section className={style.premium}>
            <h3 className="section-title">The power of Premium</h3>
            <PlayOptions/>
        </section>
    )
}