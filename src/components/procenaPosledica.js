import React,{useState,useEffect,useRef,useContext} from 'react';
import {TContext} from './context'



const ProcenaPosledica=()=>{

const{procPosledica,budzet}=useContext(TContext)
const[procPosledicaValue,setProcPosledicaValue]=useState(procPosledica)
const[budzetValue,setBudzetValue]=budzet

const[zivotNiz,setZivotNiz]=useState(["<5","5-20","21-50","51-150",">150"])
const[ekonomijaNiz,setEkonomijaNiz]=useState(["Od 0.1 - 1%","Od 1.1 - 1%","3.1 - 7%","Od 7.1 - 10%","Ciji iznos prelazi 10%"])
const[infroNiz,setInfroNiz]=useState(["<0.5 %","0.5 - 1%","1 - 3%","3-5%",">5 %"])

const[zivotInfo,setZivotInfo]=useState()
const[ekonomijaInfo,setEkonomijaInfo]=useState()
const[infroInfo,setInfroInfo]=useState()
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
setEkonomijaInfo((broj/budzetValue)*100);
setUnosSteta(e.target.value)
}
const ProracunProcetaSteta=(e)=>{
let broj=budzetValue-e.target.value;
setInfroInfo((broj/budzetValue)*100);
setUnosStetaInfra(e.target.value)  
}

const OdabirPosledica=(e)=>{
    const zivot=procPosledicaValue[0].zivot
    const ekonomiju=procPosledicaValue[0].ekonomiju
    const infra=procPosledicaValue[0].infra
    setProcPosledicaValue([{zivot:zivot,ekonomiju:false,infra:infra}])

if(e.target.value==="zivot"&&procPosledicaValue[0].zivot===true)
setProcPosledicaValue([{zivot:false,ekonomiju:ekonomiju,infra:infra}])
else if(e.target.value==="zivot"&&procPosledicaValue[0].zivot===false)
setProcPosledicaValue([{zivot:true,ekonomiju:ekonomiju,infra:infra}])
else if(e.target.value==="ekonomija"&&procPosledicaValue[0].ekonomiju===true)
setProcPosledicaValue([{zivot:zivot,ekonomiju:false,infra:infra}])
else if(e.target.value==="ekonomija"&&procPosledicaValue[0].ekonomiju===false)
setProcPosledicaValue([{zivot:zivot,ekonomiju:true,infra:infra}])
else if(e.target.value==="infra"&&procPosledicaValue[0].infra===true)
setProcPosledicaValue([{zivot:zivot,ekonomiju:ekonomiju,infra:false}])
else if(e.target.value==="infra"&&procPosledicaValue[0].infra===false)
setProcPosledicaValue([{zivot:zivot,ekonomiju:ekonomiju,infra:true}])
}
const IzborZdravlje=(e)=>{
    setZivotInfo(e.target.value)
    if(e.target.value<5&&e.target.value>0){
        VrednostVerovatnoceRef.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
    }
        else if(e.target.value>=5&&e.target.value<20){
            VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[1].style.backgroundColor="gray";
            VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
            }
            else if(e.target.value>=20&&e.target.value<=50){
                VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[2].style.backgroundColor="gray";
                VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                }
                else if(e.target.value>50&&e.target.value<150){
                    VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[3].style.backgroundColor="gray";
                    VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                    }
                    else if(e.target.value>=150){
                        VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[4].style.backgroundColor="gray";
                    }
                        else if(e.target.value===0||e.target.value=='')
                        {
                            VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                        }
}
const IzborEkonomijaProcenat=(e)=>{
    setEkonomijaInfo(e.target.value)
    setUnosEkonomija(e.target.value)
}
useEffect(() => {
    if(ekonomijaInfo>0&&ekonomijaInfo<1){
        VrednostVerovatnoceRef2.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[4].style.backgroundColor="white";
        }
            else if(ekonomijaInfo>=1&&ekonomijaInfo<3){
                VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[1].style.backgroundColor="gray";
                VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
            }
                else if(ekonomijaInfo>=3&&ekonomijaInfo<7){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="gray";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                }
                else if(ekonomijaInfo>=7&&ekonomijaInfo<10){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="gray";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                }
                else if(ekonomijaInfo>=10){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="gray"; 
                }
                    else if(ekonomijaInfo===0||ekonomijaInfo=='')
                    {
                        VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[4].style.backgroundColor="white";
                    }
}, [ekonomijaInfo]);
const IzborInfroProcenat=(e)=>{
setUnosProcInfra(e.target.value)
setInfroInfo(e.target.value)
}
useEffect(() => {
    if(infroInfo<0.5&&infroInfo>0){
        VrednostVerovatnoceRef3.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
        }
        else if(infroInfo>=0.5&&infroInfo<1){
            VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[1].style.backgroundColor="gray";
            VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[4].style.backgroundColor="white"; 
        }
            else if(infroInfo>=1&&infroInfo<3){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="gray";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
            }
            else if(infroInfo>=3&&infroInfo<5){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="gray";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="white"; 
            }
            else if(infroInfo>=5){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="gray"; 
            }
                else if(infroInfo===0||infroInfo=='')
                {
                    VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
                }
}, [infroInfo]);
useEffect(() => {
if(procPosledicaValue[0].zivot===true)
ZivotRef.current.style.backgroundColor="gray"
else{
    ZivotRef.current.style.backgroundColor="white"
}
if(procPosledicaValue[0].ekonomiju===true)
EkonomijaRef.current.style.backgroundColor="gray"
else{
    EkonomijaRef.current.style.backgroundColor="white"
}
if(procPosledicaValue[0].infra===true)
InfraRef.current.style.backgroundColor="gray"
else{
    InfraRef.current.style.backgroundColor="white"
}
}, [procPosledicaValue]);
    return(
        <div className="posledice">
            <h3>Izaberi uticaj na sticene vrednosti</h3>
            <div className="posledica-izbor">
            <button ref={ZivotRef} onClick={OdabirPosledica} value="zivot">Posledice po zivot i zdravlje ljudi</button>
            <button ref={EkonomijaRef} onClick={OdabirPosledica} value="ekonomija">Posledice po ekonomiju</button>
            <button ref={InfraRef} onClick={OdabirPosledica} value="infra">posledice po kriticnu infrastrukturu</button>
            </div>
            <div className="posledice-nizovi">
    {/* ///////////////////////////////////////////////////////////// */}
           {procPosledicaValue[0].zivot&&
            <div className="procene-niz">
                <label htmlFor="zdravlje">Uneti broj ljudi</label>
                <div className="inputi-posledice">
                <input onWheel={(e) => e.target.blur()} required onChange={IzborZdravlje} type="number" name="zdravlje" id="" />
                </div>
                <h2>Kriterijum</h2>
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
                {procPosledicaValue[0].ekonomiju&&
            <div className="procene-niz"> 
            <label htmlFor="ekonomija">Uneti procenat ili iznos stete</label>
            <div className="inputi-posledice">
                {!unosSteta&& <input onWheel={(e) => e.target.blur()} onChange={IzborEkonomijaProcenat} type="number" placeholder="procenat" name="ekonomija" id="" />}
                {!unosEkonomija&&<input onWheel={(e) => e.target.blur()} onChange={ProracunProcenta} type="number" placeholder="iznos stete" name="ekonomija" id="" />}
                </div>
                <h2>Kriterijum</h2>
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

              {procPosledicaValue[0].infra&&  
            <div className="procene-niz"> 
            <label htmlFor="infro">Uneti procenat ili iznos stete</label>
            <div className="inputi-posledice">
                {!unosStetaInfra&&<input onWheel={(e) => e.target.blur()} onChange={IzborInfroProcenat} type="number" placeholder="procenat" name="infro" id="" />}
                {!unosProcInfra&&<input onWheel={(e) => e.target.blur()} onChange={ProracunProcetaSteta} type="number" placeholder="iznos stete" name="infro" id="" />}
           </div>
                <h2>Kriterijum</h2>
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