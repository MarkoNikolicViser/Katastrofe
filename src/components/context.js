import React, {createContext, useState, useEffect} from 'react'

export const TContext=createContext();



export const TProvider=(props)=>{
    const[admin,setAdmin]=useState(false)
    const[unosLogin,setUnosLogin]=useState("")
    const[unosPw,setUnosPw]=useState("")
    const[procena,setProcena]=useState("drustvo")               
    const[opasnost,setOpasnost]=useState("")
    const[scenario,setScenario]=useState("najverovatniji")
    const[budzet,setBudzet]=useState(0)
    const[procBudzet,setProcBudzet]=useState()
    const[procVerovatnoce,setProcVerovatnoce]=useState({
        verovatnoca:false,
        ucestalost:false,
        strucna:true
    })
    const[procPosledica,setProcPosledica]=useState({
        zivot:true,
        ekonomiju:true,
        infra:true
    })
    const[odabranaVerovatnoca,setOdabranaVerovatnoca]=useState()
    const[odabranaVrednostVer,setOdabranaVrednostVer]=useState()
    const[zivotInfo,setZivotInfo]=useState()
    const[ekonomijaInfo,setEkonomijaInfo]=useState()
    const[infroInfo,setInfroInfo]=useState()
    const[verKolona,setVerKolona]=useState()


    return(
        <TContext.Provider value={{procena:[procena,setProcena],
            opasnost:[opasnost,setOpasnost],
            scenario:[scenario,setScenario],
            budzet:[budzet,setBudzet],
            procBudzet:[procBudzet,setProcBudzet],
            procVerovatnoce:[procVerovatnoce,setProcVerovatnoce],
            procPosledica:[procPosledica,setProcPosledica],
            odabranaVerovatnoca:[odabranaVerovatnoca,setOdabranaVerovatnoca],
            odabranaVrednostVer:[odabranaVrednostVer,setOdabranaVrednostVer],
            zivotInfo:[zivotInfo,setZivotInfo],
            ekonomijaInfo:[ekonomijaInfo,setEkonomijaInfo],
            infroInfo:[infroInfo,setInfroInfo],
            verKolona:[verKolona,setVerKolona]
         }}>
            {props.children}
        </TContext.Provider>
    )
}