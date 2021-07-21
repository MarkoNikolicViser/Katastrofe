import React, { useState, useContext, useEffect, useRef } from 'react'
import { TContext } from "../context"

const Slika=()=>{
    const { opasnost } = useContext(TContext)
    const [opasnostValue, setOpasnostValue] = opasnost;


    const odabranaOpasnost=opasnostValue+'.png'

    const link="https://www.almaks.rs/get-image/"+odabranaOpasnost

    return(
        <>
        {opasnostValue&&
        <div>
           <img width='26px' height='26px' src={link} alt="" />
        </div>
        }
        </>
    )
}
export default Slika