import React,{useState,useContext,useEffect,useRef} from 'react'
import {TContext} from "./context"

const IzborScenarija=()=>{

    const{scenario}=useContext(TContext);
    const[scenarioValue,setScenarioValue]=scenario;
    const NajverovatnijiRef=useRef(null);
    const NezeljeniRef=useRef(null);

    const Izaberi=(e)=>{
        setScenarioValue(e.target.value)
    }
useEffect(() => {
    if(scenarioValue==="najverovatniji"){
        NajverovatnijiRef.current.style.backgroundColor="gray";
        NezeljeniRef.current.style.backgroundColor="white"
    }
        else{
            NajverovatnijiRef.current.style.backgroundColor="white";
            NezeljeniRef.current.style.backgroundColor="gray"
        }
}, [scenarioValue])


    return(
        <div className="izbor-scenarija">
            <button onClick={Izaberi} ref={NajverovatnijiRef} value="najverovatniji">Највероватнији нежељени догађај</button>
            <button onClick={Izaberi} ref={NezeljeniRef} value="nezeljeni">Нежељени догађај са најтежим могућим последицама</button>
        </div>
    )
}
export default IzborScenarija;