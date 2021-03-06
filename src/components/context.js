import React, { createContext, useState } from 'react'

export const TContext = createContext();



export const TProvider = (props) => {
    const [admin, setAdmin] = useState(false)
    const [unosLogin, setUnosLogin] = useState("")
    const [unosPw, setUnosPw] = useState("")
    const [procena, setProcena] = useState("drustvo")
    const [opasnost, setOpasnost] = useState()
    const [scenario, setScenario] = useState("najverovatniji")
    const [budzet, setBudzet] = useState("")
    const [procenat, setProcenat] = useState("")

    const [procBudzet, setProcBudzet] = useState()
    const [procVerovatnoce, setProcVerovatnoce] = useState({
        verovatnoca: false,
        ucestalost: false,
        strucna: false
    })
    const [procPosledica, setProcPosledica] = useState({
        zivot: true,
        ekonomiju: true,
        infra: true
    })
    const [odabranaVerovatnoca, setOdabranaVerovatnoca] = useState()
    const [odabranaVrednostVer, setOdabranaVrednostVer] = useState()
    const [zivotInfo, setZivotInfo] = useState('')
    const [ekonomijaInfo, setEkonomijaInfo] = useState('')
    const [infroInfo, setInfroInfo] = useState('')
    const [zivotIdRed, setZivotIdRed] = useState(0)
    const [ekonomijaIdRed, setEkonomijaIdRed] = useState(0)
    const [infraIdRed, setInfraIdRed] = useState(0)
    const [opasnostTabela, setOpasnostTabela] = useState()
    const [verovatnocaIndex, setVerovatnocaIndex] = useState()
    const [unosEkonomija, setUnosEkonomija] = useState('')
    const [unosSteta, setUnosSteta] = useState('')
    const [unosProcInfra, setUnosProcInfra] = useState('')
    const [unosStetaInfra, setUnosStetaInfra] = useState('')
    //state za najtezim mogucim posledicama////////////////////////

    const [procVerovatnoceN, setProcVerovatnoceN] = useState({
        verovatnoca: false,
        ucestalost: false,
        strucna: false
    })
    const [procPosledicaN, setProcPosledicaN] = useState({
        zivot: true,
        ekonomiju: true,
        infra: true
    })
    const [odabranaVerovatnocaN, setOdabranaVerovatnocaN] = useState()
    const [odabranaVrednostVerN, setOdabranaVrednostVerN] = useState()
    const [zivotInfoN, setZivotInfoN] = useState('')
    const [ekonomijaInfoN, setEkonomijaInfoN] = useState('')
    const [infroInfoN, setInfroInfoN] = useState('')
    const [zivotIdRedN, setZivotIdRedN] = useState(0)
    const [ekonomijaIdRedN, setEkonomijaIdRedN] = useState(0)
    const [infraIdRedN, setInfraIdRedN] = useState(0)
    const [opasnostTabelaN, setOpasnostTabelaN] = useState()
    const [verovatnocaIndexN, setVerovatnocaIndexN] = useState()
    const [unosEkonomijaN, setUnosEkonomijaN] = useState('')
    const [unosStetaN, setUnosStetaN] = useState('')
    const [unosProcInfraN, setUnosProcInfraN] = useState('')
    const [unosStetaInfraN, setUnosStetaInfraN] = useState('')

    ///////////////////////////////////////////////////////////////

    return (
        <TContext.Provider value={{
            procena: [procena, setProcena],
            opasnost: [opasnost, setOpasnost],
            scenario: [scenario, setScenario],
            budzet: [budzet, setBudzet],
            procenat: [procenat, setProcenat],
            procBudzet: [procBudzet, setProcBudzet],
            procVerovatnoce: [procVerovatnoce, setProcVerovatnoce],
            procPosledica: [procPosledica, setProcPosledica],
            odabranaVerovatnoca: [odabranaVerovatnoca, setOdabranaVerovatnoca],
            odabranaVrednostVer: [odabranaVrednostVer, setOdabranaVrednostVer],
            zivotInfo: [zivotInfo, setZivotInfo],
            ekonomijaInfo: [ekonomijaInfo, setEkonomijaInfo],
            infroInfo: [infroInfo, setInfroInfo],
            zivotIdRed: [zivotIdRed, setZivotIdRed],
            ekonomijaIdRed: [ekonomijaIdRed, setEkonomijaIdRed],
            infraIdRed: [infraIdRed, setInfraIdRed],
            opasnostTabela: [opasnostTabela, setOpasnostTabela],
            verovatnocaIndex: [verovatnocaIndex, setVerovatnocaIndex],
            unosEkonomija: [unosEkonomija, setUnosEkonomija],
            unosSteta: [unosSteta, setUnosSteta],
            unosProcInfra:[unosProcInfra,setUnosProcInfra],
            unosStetaInfra:[unosStetaInfra,setUnosStetaInfra],
            //-------------------importovanje state-a za najteze posledice---------------------------
            procPosledicaN: [procPosledicaN, setProcPosledicaN],
            zivotInfoN: [zivotInfoN, setZivotInfoN],
            ekonomijaInfoN: [ekonomijaInfoN, setEkonomijaInfoN],
            infroInfoN: [infroInfoN, setInfroInfoN],
            zivotIdRedN: [zivotIdRedN, setZivotIdRedN],
            ekonomijaIdRedN: [ekonomijaIdRedN, setEkonomijaIdRedN],
            infraIdRedN: [infraIdRedN, setInfraIdRedN],
            procVerovatnoceN: [procVerovatnoceN, setProcVerovatnoceN],
            odabranaVerovatnocaN: [odabranaVerovatnocaN, setOdabranaVerovatnocaN],
            odabranaVrednostVerN: [odabranaVrednostVerN, setOdabranaVrednostVerN],
            unosStetaN: [unosStetaN, setUnosStetaN],
            unosStetaInfraN:[unosStetaInfraN,setUnosStetaInfraN],
            unosEkonomijaN: [unosEkonomijaN, setUnosEkonomijaN],
            opasnostTabelaN: [opasnostTabelaN, setOpasnostTabelaN],
            verovatnocaIndexN: [verovatnocaIndexN, setVerovatnocaIndexN],
            unosProcInfraN:[unosProcInfraN,setUnosProcInfraN],

        }}>
            {props.children}
        </TContext.Provider>
    )
}