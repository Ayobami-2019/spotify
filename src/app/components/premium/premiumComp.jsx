import React from 'react'
import {playOptions} from './data.js'
import style from './style.module.css'


export const PlayOptions=()=>{
    
    return(
        <div className={style.optionsList}>
            {playOptions.map((playOptions)=>(
                <div>
                    <img className={style.image} src={playOptions.image} alt="" />
                    <h6 className='h6-bold'>{playOptions.title}</h6>
                    <p className='p-sixteen'>{playOptions.description}</p>
                </div>
            ))}
        </div>
       
    )
}