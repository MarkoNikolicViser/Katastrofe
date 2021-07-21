import React,{useState,useContext,useEffect,useRef} from 'react'
import {TContext} from "./context"

const IzborProcene=()=>{

    const{procena}=useContext(TContext);
    const[procenaValue,setProcenaValue]=procena;
    const DrustvoRef=useRef(null);
    const OpstinaRef=useRef(null);

    const Procena=(e)=>{
        setProcenaValue(e.target.value)
    }
useEffect(() => {
    if(procenaValue==="drustvo"){
        DrustvoRef.current.style.backgroundColor="gray";
        OpstinaRef.current.style.backgroundColor="white"
    }
        else{
            DrustvoRef.current.style.backgroundColor="white";
            OpstinaRef.current.style.backgroundColor="gray"
        }
}, [procenaValue])


    return(
        <div className="procena">
        <h1>Одабир процене</h1>
        <div className="izbor-procene">
            <button onClick={Procena} ref={DrustvoRef} value="drustvo">Привредно друштво</button>
            <button onClick={Procena} ref={OpstinaRef} value="opstina">Општина</button>
        </div>
        </div>
    )
}
export default IzborProcene;