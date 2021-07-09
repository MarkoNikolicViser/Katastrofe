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
        <h1>Odabir Procene</h1>
        <div className="izbor-procene">
            <button onClick={Procena} ref={DrustvoRef} value="drustvo">Privredno Drustvo</button>
            <button onClick={Procena} ref={OpstinaRef} value="opstina">Opstina</button>
        </div>
        </div>
    )
}
export default IzborProcene;