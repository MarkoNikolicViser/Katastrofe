import React, { useState,useContext,useRef, useEffect } from 'react';
import {TContext} from './context'

const Procenaverovatnoce=()=>{

const{procVerovatnoceN,odabranaVerovatnocaN,odabranaVrednostVerN}=useContext(TContext)
const[procVerovatnoceNValue,setProcVerovatnoceNValue]=useState(procVerovatnoceN);
const[odabranaVerovatnocaNValue,setOdabranaVerovatnocaNValue]=odabranaVerovatnocaN
const[odabranaVrednostVerNValue,setOdabranaVrednostVerNValue]=odabranaVrednostVerN


const VerovatnocaRef=useRef(null)
const UcestalostRef=useRef(null)
const StrucnaRef=useRef(null)
const VrednostVerovatnoceRef=useRef([])

const[verovatnocaNiz,setVerovatnocaNiz]=useState(["< 1 %","1 - 5 %","6 - 50 %","51 - 98 %","> 98 %"])
const[ucestanostNiz,setUncestanostNiz]=useState(["1 догађај у 100 година и ређе","1 догађај у 20 до 100 година","1 догађај у 2 до 20 година","1 догађај у 1 до 2 године","1 догађај годишње и чешће"])
const[strucnaProcena,setStrucnaProcena]=useState(["Занемарљива","Мала","Средња","Велика","Изразито велика"])

const PromenaVerovatnoce=(e)=>{
if(e.target.value==="verovatnoca"){
    StrucnaRef.current.style.backgroundColor="white";
    VerovatnocaRef.current.style.backgroundColor="gray";
    UcestalostRef.current.style.backgroundColor="white"; 
    setProcVerovatnoceNValue({verovatnoca:true,ucestalost:false,strucna:false})   
    setOdabranaVerovatnocaNValue(e.target.value)
}
    else if(e.target.value==="ucestalost"){
        StrucnaRef.current.style.backgroundColor="white";
        VerovatnocaRef.current.style.backgroundColor="white";
        UcestalostRef.current.style.backgroundColor="gray";
        setProcVerovatnoceNValue({verovatnoca:false,ucestalost:true,strucna:false})           
        setOdabranaVerovatnocaNValue(e.target.value)
    }
        else if(e.target.value==="strucna"){
            StrucnaRef.current.style.backgroundColor="gray";
            VerovatnocaRef.current.style.backgroundColor="white";
            UcestalostRef.current.style.backgroundColor="white";
            setProcVerovatnoceNValue({verovatnoca:false,ucestalost:false,strucna:true})        
            setOdabranaVerovatnocaNValue(e.target.value)  
        }
}


const OdabirVredostiVerovatnoce=(e)=>{
            let niz=['0','1','2','3','4']
            const index=niz.indexOf(`${e.target.value}`)
            niz.splice(index,1)
             VrednostVerovatnoceRef.current[e.target.value].style.backgroundColor="gray"
            niz.map(m=>{
                VrednostVerovatnoceRef.current[m].style.backgroundColor="white"     
            })
            setOdabranaVrednostVerNValue(e.target.id)
        }
        
        useEffect(() => {
            if(procVerovatnoceNValue.ucestalost)
            UcestalostRef.current.style.backgroundColor="grey";
           else if(procVerovatnoceNValue.verovatnoca)
           VerovatnocaRef.current.style.backgroundColor="grey";
           else if(procVerovatnoceNValue.strucna)
           StrucnaRef.current.style.value.backgroundColor="grey";
        }, []);

    return(
        <div className="verovatnoce">
            <h3>Изабери вероватноће</h3>
                <div className="izborVerovatnoce">
                    <button onClick={PromenaVerovatnoce} ref={VerovatnocaRef} value="verovatnoca">Вероватноћа</button>
                    <button onClick={PromenaVerovatnoce} ref={UcestalostRef} value="ucestalost">Учсеталост</button>
                    <button onClick={PromenaVerovatnoce} ref={StrucnaRef} value="strucna">Стручна процена</button>
                </div>
                <div className="procene-nizovi">
        {/* ////////////////////////////////////////////////////// */}
        {procVerovatnoceNValue.verovatnoca&&
                <div className="procene-niz">  
                    {
                        verovatnocaNiz.map((m,index)=>{
                            return [
                                <div key={index}>
                            <label htmlFor={m}>{index+1}</label>
                            <button id={m} onClick={OdabirVredostiVerovatnoce} ref={el => VrednostVerovatnoceRef.current[index] = el} value={index} name={m}>{m}</button>
                            </div>
                            ]
                        })
                    }
            </div>
        }
                    {/* ////////////////////////////////////////////////////// */}
                    {procVerovatnoceNValue.ucestalost&&
                    <div className="procene-niz">  
                        {
                            ucestanostNiz.map((m,index)=>{
                                return [
                                    <div key={index}>
                                <label htmlFor={m}>{index+1}</label>
                                <button id={m} onClick={OdabirVredostiVerovatnoce} ref={el => VrednostVerovatnoceRef.current[index] = el} value={index} name={m}>{m}</button>
                                </div>
                                ]
                            })
                        }
                  </div>
        }          
                    {/* ////////////////////////////////////////////////////// */}
                    {procVerovatnoceNValue.strucna&&
                        <div className="procene-niz">  
                            {
                                strucnaProcena.map((m,index)=>{
                                    return [
                                        <div key={index}>
                                    <label htmlFor={m}>{index+1}</label>
                                    <button id={m} value={index} onClick={OdabirVredostiVerovatnoce} ref={el => VrednostVerovatnoceRef.current[index] = el} name={m}>{m}</button>
                                    </div>
                                    ]
                                })
                            }
                    </div>
                    }
                    {/* ////////////////////////////////////////////////////// */}
                    </div>
        </div>
    )
}
export default Procenaverovatnoce;