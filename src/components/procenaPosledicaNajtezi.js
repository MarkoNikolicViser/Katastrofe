import React,{useState,useEffect,useRef,useContext} from 'react';
import {TContext} from './context'



const ProcenaPosledica=()=>{

const{procPosledicaN,budzet,zivotInfoN,ekonomijaInfoN,infroInfoN,zivotIdRedN,ekonomijaIdRedN,infraIdRedN}=useContext(TContext)
const[procPosledicaNValue,setprocPosledicaNValue]=useState(procPosledicaN)
const[budzetValue,setBudzetValue]=budzet

const[zivotNiz,setZivotNiz]=useState(["<5","5-20","21-50","51-150",">150"])
const[ekonomijaNiz,setEkonomijaNiz]=useState(["Od 0.1 - 1%","Od 1.1 - 3%","3.1 - 7%","Od 7.1 - 10%","Ciji iznos prelazi 10%"])
const[infroNiz,setInfroNiz]=useState(["< 0.5 %","0.5 - 1 %","1 - 3%","3 - 5% ","> 5 %"])

const[zivotInfoNValue,setzivotInfoNValue]=zivotInfoN
const[ekonomijaInfoNValue,setekonomijaInfoNValue]=ekonomijaInfoN
const[infroInfoNValue,setinfroInfoNValue]=infroInfoN
const[zivotIdRedNValue,setzivotIdRedNValue]=zivotIdRedN
const[ekonomijaIdRedNValue,setekonomijaIdRedNValue]=ekonomijaIdRedN
const[infraIdRedNValue,setinfraIdRedNValue]=infraIdRedN
const[unosEkonomija,setUnosEkonomija]=useState()
const[unosSteta,setUnosSteta]=useState()

const[unosProcInfra,setUnosProcInfra]=useState()
const[unosStetaInfra,setUnosStetaInfra]=useState()


const ZivotRef=useRef(null)
const EkonomijaRef=useRef(null)
const InfraRef=useRef(null)
const VrednostVerovatnoceRef=useRef([])
const VrednostVerovatnoceRef2=useRef([])
const VrednostVerovatnoceRef3=useRef([])

const ProracunProcenta=(e)=>{
let broj=budzetValue-e.target.value;
setekonomijaInfoNValue((broj/budzetValue)*100);
setUnosSteta(e.target.value)
}
const ProracunProcetaSteta=(e)=>{
let broj=budzetValue-e.target.value;
setinfroInfoNValue((broj/budzetValue)*100);
setUnosStetaInfra(e.target.value)  
}

const OdabirPosledica=(e)=>{
    const zivot=procPosledicaNValue[0].zivot
    const ekonomiju=procPosledicaNValue[0].ekonomiju
    const infra=procPosledicaNValue[0].infra
    setprocPosledicaNValue([{zivot:zivot,ekonomiju:false,infra:infra}])

if(e.target.value==="zivot"&&procPosledicaNValue[0].zivot===true)
setprocPosledicaNValue([{zivot:false,ekonomiju:ekonomiju,infra:infra}])
else if(e.target.value==="zivot"&&procPosledicaNValue[0].zivot===false)
setprocPosledicaNValue([{zivot:true,ekonomiju:ekonomiju,infra:infra}])
else if(e.target.value==="ekonomija"&&procPosledicaNValue[0].ekonomiju===true)
setprocPosledicaNValue([{zivot:zivot,ekonomiju:false,infra:infra}])
else if(e.target.value==="ekonomija"&&procPosledicaNValue[0].ekonomiju===false)
setprocPosledicaNValue([{zivot:zivot,ekonomiju:true,infra:infra}])
else if(e.target.value==="infra"&&procPosledicaNValue[0].infra===true)
setprocPosledicaNValue([{zivot:zivot,ekonomiju:ekonomiju,infra:false}])
else if(e.target.value==="infra"&&procPosledicaNValue[0].infra===false)
setprocPosledicaNValue([{zivot:zivot,ekonomiju:ekonomiju,infra:true}])
}

const IzborZdravlje=(e)=>{
    setzivotInfoNValue(e.target.value)
}
useEffect(() => {
    if(zivotInfoNValue<5&&zivotInfoNValue>0){
        VrednostVerovatnoceRef.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
        setzivotIdRedNValue(1)   
    }
        else if(zivotInfoNValue>=5&&zivotInfoNValue<=20){
            VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[1].style.backgroundColor="gray";
            VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
            setzivotIdRedNValue(2)   

        }
            else if(zivotInfoNValue>20&&zivotInfoNValue<=50){
                VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[2].style.backgroundColor="gray";
                VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                setzivotIdRedNValue(3)   
            }
                else if(zivotInfoNValue>50&&zivotInfoNValue<=150){
                    VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[3].style.backgroundColor="gray";
                    VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                    setzivotIdRedNValue(4)
                }
                    else if(zivotInfoNValue>150){
                        VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[4].style.backgroundColor="gray";
                        setzivotIdRedNValue(5)
                    }
                        else if(zivotInfoNValue===0||e.target.value=='')
                        {
                            VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                        }
}, [zivotInfoNValue]);
const IzborEkonomijaProcenat=(e)=>{
    setekonomijaInfoNValue(e.target.value)
    setUnosEkonomija(e.target.value)
}
useEffect(() => {
    if(ekonomijaInfoNValue>0&&ekonomijaInfoNValue<1){
        VrednostVerovatnoceRef2.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[4].style.backgroundColor="white";
        setekonomijaIdRedNValue(1)
        }
            else if(ekonomijaInfoNValue>=1&&ekonomijaInfoNValue<=3){
                VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[1].style.backgroundColor="gray";
                VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                setekonomijaIdRedNValue(2)
            }
                else if(ekonomijaInfoNValue>3&&ekonomijaInfoNValue<=7){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="gray";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                    setekonomijaIdRedNValue(3)
                }
                else if(ekonomijaInfoNValue>7&&ekonomijaInfoNValue<=10){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="gray";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                    setekonomijaIdRedNValue(4)
                }
                else if(ekonomijaInfoNValue>10){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="gray"; 
                    setekonomijaIdRedNValue(5)
                }
                    else if(ekonomijaInfoNValue===0||ekonomijaInfoNValue=='')
                    {
                        VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[4].style.backgroundColor="white";
                    }
}, [ekonomijaInfoNValue]);
const IzborInfroProcenat=(e)=>{
setUnosProcInfra(e.target.value)
setinfroInfoNValue(e.target.value)
}
useEffect(() => {
    if(infroInfoNValue<0.5&&infroInfoNValue>0){
        VrednostVerovatnoceRef3.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
        setinfraIdRedNValue(1)
        }
        else if(infroInfoNValue>=0.5&&infroInfoNValue<1){
            VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[1].style.backgroundColor="gray";
            VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[4].style.backgroundColor="white"; 
            setinfraIdRedNValue(2)
        }
            else if(infroInfoNValue>=1&&infroInfoNValue<3){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="gray";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
                setinfraIdRedNValue(3)
            }
            else if(infroInfoNValue>=3&&infroInfoNValue<=5){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="gray";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="white"; 
                setinfraIdRedNValue(4)
            }
            else if(infroInfoNValue>5){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="gray"; 
                setinfraIdRedNValue(5)
            }
                else if(infroInfoNValue===0||infroInfoNValue=='')
                {
                    VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
                }
}, [infroInfoNValue]);

useEffect(() => {
if(procPosledicaNValue[0].zivot===true)
ZivotRef.current.style.backgroundColor="gray"
else{
    ZivotRef.current.style.backgroundColor="white"
}
if(procPosledicaNValue[0].ekonomiju===true)
EkonomijaRef.current.style.backgroundColor="gray"
else{
    EkonomijaRef.current.style.backgroundColor="white"
}
if(procPosledicaNValue[0].infra===true)
InfraRef.current.style.backgroundColor="gray"
else{
    InfraRef.current.style.backgroundColor="white"
}
}, [procPosledicaNValue]);
    return(
        <div className="posledice">
            <h3>Изабери утицај на штићене вредности</h3>
            <div className="posledica-izbor">
            <button ref={ZivotRef} onClick={OdabirPosledica} value="zivot">Последице по живот и здравље људи</button>
            <button ref={EkonomijaRef} onClick={OdabirPosledica} value="ekonomija">Последице по економију/екологију</button>
            <button ref={InfraRef} onClick={OdabirPosledica} value="infra">Последице по критичну инфраструктуру</button>
            </div>
            <div className="posledice-nizovi">
    {/* ///////////////////////////////////////////////////////////// */}
           {procPosledicaNValue[0].zivot&&
            <div className="procene-niz">
                <label htmlFor="zdravlje">Унети бр људи</label>
                <div className="inputi-posledice">
                <input onWheel={(e) => e.target.blur()} required onChange={IzborZdravlje} type="number" name="zdravlje" id="" />
                </div>
                <h2>Критеријум</h2>
                {zivotNiz.map((m,index)=>{
                    return [
                    <div key={index}>
                        <label htmlFor={m}>{index+1}</label>
                    <button ref={el => VrednostVerovatnoceRef.current[index] = el} value={index} name={m}>{m}</button>
                    </div>
                    ]
                })}
            </div>
            }
     {/* ///////////////////////////////////////////////////////////// */}
                {procPosledicaNValue[0].ekonomiju&&
            <div className="procene-niz"> 
            <label htmlFor="ekonomija">Унети проценат или износ штете</label>
            <div className="inputi-posledice">
                {!unosSteta&& <input onWheel={(e) => e.target.blur()} onChange={IzborEkonomijaProcenat} type="number" placeholder="procenat" name="ekonomija" id="" />}
                {!unosEkonomija&&<input onWheel={(e) => e.target.blur()} onChange={ProracunProcenta} type="number" placeholder="iznos stete" name="ekonomija" id="" />}
                {unosSteta&&<h4>{ekonomijaInfoNValue} %</h4> }
                </div>
                <h2>Критеријум</h2>
                {ekonomijaNiz.map((m,index)=>{
                    return [
                    <div key={index}>
                        <label htmlFor={m}>{index+1}</label>
                    <button ref={el => VrednostVerovatnoceRef2.current[index] = el} value={index} name={m}>{m}</button>
                    </div>
                    ]
                })}
            </div>
            }
      {/* ///////////////////////////////////////////////////////////// */}

              {procPosledicaNValue[0].infra&&  
            <div className="procene-niz"> 
            <label htmlFor="infro">Унети проценат или износ штете</label>
            <div className="inputi-posledice">
                {!unosStetaInfra&&<input onWheel={(e) => e.target.blur()} onChange={IzborInfroProcenat} type="number" placeholder="procenat" name="infro" id="" />}
                {!unosProcInfra&&<input onWheel={(e) => e.target.blur()} onChange={ProracunProcetaSteta} type="number" placeholder="iznos stete" name="infro" id="" />}
                {unosStetaInfra&&<h4>{infroInfoNValue} %</h4> }

           </div>
                <h2>Критеријум</h2>
                {infroNiz.map((m,index)=>{
                    return [
                    <div key={index}>
                        <label htmlFor={m}>{index+1}</label>
                    <button ref={el => VrednostVerovatnoceRef3.current[index] = el} value={index} name={m}>{m}</button>
                    </div>
                    ]
                })}
            </div>
            }
            </div>
        </div>

    )
}
export default ProcenaPosledica