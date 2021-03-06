import React,{useState,useEffect,useRef,useContext} from 'react';
import {TContext} from './context'



const ProcenaPosledica=()=>{

const{procPosledicaN,budzet,zivotInfoN,ekonomijaInfoN,infroInfoN,zivotIdRedN,ekonomijaIdRedN,infraIdRedN,unosEkonomijaN,unosStetaN,unosProcInfraN,unosStetaInfraN}=useContext(TContext)
const[procPosledicaValue,setProcPosledicaValue]=useState(procPosledicaN)
const[budzetValue,setBudzetValue]=budzet

const[zivotNiz,setZivotNiz]=useState(["<5","5-20","21-50","51-150",">150"])
const[ekonomijaNiz,setEkonomijaNiz]=useState(["Od 0.1 - 1%","Od 1.1 - 3%","3.1 - 7%","Od 7.1 - 10%","Ciji iznos prelazi 10%"])
const[infroNiz,setInfroNiz]=useState(["< 0.5 %","0.5 - 1 %","1 - 3%","3 - 5% ","> 5 %"])

const[zivotInfoValue,setZivotInfoValue]=zivotInfoN
const[ekonomijaInfoValue,setEkonomijaInfoValue]=ekonomijaInfoN
const[infroInfoValue,setInfroInfoValue]=infroInfoN
const[zivotIdRedValue,setZivotIdRedValue]=zivotIdRedN
const[ekonomijaIdRedValue,setEkonomijaIdRedValue]=ekonomijaIdRedN
const[infraIdRedValue,setInfraIdRedValue]=infraIdRedN
const[unosEkonomijaValue,setUnosEkonomijaValue]=unosEkonomijaN
const[unosStetaValue,setUnosStetaValue]=unosStetaN

const[unosProcInfraValue,setUnosProcInfraValue]=unosProcInfraN
const[unosStetaInfraValue,setUnosStetaInfraValue]=unosStetaInfraN


const ZivotRef=useRef(null)
const EkonomijaRef=useRef(null)
const InfraRef=useRef(null)
const VrednostVerovatnoceRef=useRef([])
const VrednostVerovatnoceRef2=useRef([])
const VrednostVerovatnoceRef3=useRef([])

const ProracunProcenta=(e)=>{
setEkonomijaInfoValue(Math.round(((e.target.value*100)/budzetValue)*100)/100);
setUnosStetaValue(e.target.value)
}
const ProracunProcetaSteta=(e)=>{
setInfroInfoValue(Math.round(((e.target.value*100)/budzetValue)*100)/100);
setUnosStetaInfraValue(e.target.value)  
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

useEffect(() => {
    if(!procPosledicaValue[0].zivot){
    if(zivotInfoValue<5&&zivotInfoValue>0){
        VrednostVerovatnoceRef.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
        setZivotIdRedValue(1)   
    }
        else if(zivotInfoValue>=5&&zivotInfoValue<=20){
            VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[1].style.backgroundColor="gray";
            VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
            VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
            setZivotIdRedValue(2)   

        }
            else if(zivotInfoValue>20&&zivotInfoValue<=50){
                VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[2].style.backgroundColor="gray";
                VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                setZivotIdRedValue(3)   
            }
                else if(zivotInfoValue>50&&zivotInfoValue<=150){
                    VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef.current[3].style.backgroundColor="gray";
                    VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                    setZivotIdRedValue(4)
                }
                    else if(zivotInfoValue>150){
                        VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                        VrednostVerovatnoceRef.current[4].style.backgroundColor="gray";
                        setZivotIdRedValue(5)
                    }
                        else if(zivotInfoValue===0||zivotInfoValue=='')
                        {
                            VrednostVerovatnoceRef.current[0].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[1].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[2].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[3].style.backgroundColor="white";
                            VrednostVerovatnoceRef.current[4].style.backgroundColor="white";
                        }
                    }
}, [zivotInfoValue]);


useEffect(() => {
    if(!procPosledicaValue[0].ekonomiju){
    if(unosEkonomijaValue==''&&unosStetaValue=='')
    {
        VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[4].style.backgroundColor="white";
    }
   else if(ekonomijaInfoValue>0&&ekonomijaInfoValue<=1){
        VrednostVerovatnoceRef2.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef2.current[4].style.backgroundColor="white";
        setEkonomijaIdRedValue(1)
        }
            else if(ekonomijaInfoValue>1&&ekonomijaInfoValue<=3){
                VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[1].style.backgroundColor="gray";
                VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                setEkonomijaIdRedValue(2)
            }
                else if(ekonomijaInfoValue>3&&ekonomijaInfoValue<=7){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="gray";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                    setEkonomijaIdRedValue(3)
                }
                else if(ekonomijaInfoValue>7&&ekonomijaInfoValue<=10){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="gray";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="white"; 
                    setEkonomijaIdRedValue(4)
                }
                else if(ekonomijaInfoValue>10){
                    VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef2.current[4].style.backgroundColor="gray"; 
                    setEkonomijaIdRedValue(5)
                }
                    else if(ekonomijaInfoValue===0||ekonomijaInfoValue=='')
                    {
                        VrednostVerovatnoceRef2.current[0].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[1].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[2].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[3].style.backgroundColor="white";
                        VrednostVerovatnoceRef2.current[4].style.backgroundColor="white";
                    }
                }
}, [ekonomijaInfoValue,unosEkonomijaValue,unosStetaValue]);

useEffect(() => {
    if(!procPosledicaValue[0].infra){
    if(unosProcInfraValue==''&&unosStetaInfraValue=='')
    {
        VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
    }
   else if(infroInfoValue<0.5&&infroInfoValue>0){
        VrednostVerovatnoceRef3.current[0].style.backgroundColor="gray";
        VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
        VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
        setInfraIdRedValue(1)
        }
        else if(infroInfoValue>=0.5&&infroInfoValue<1){
            VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[1].style.backgroundColor="gray";
            VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
            VrednostVerovatnoceRef3.current[4].style.backgroundColor="white"; 
            setInfraIdRedValue(2)
        }
            else if(infroInfoValue>=1&&infroInfoValue<3){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="gray";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
                setInfraIdRedValue(3)
            }
            else if(infroInfoValue>=3&&infroInfoValue<=5){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="gray";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="white"; 
                setInfraIdRedValue(4)
            }
            else if(infroInfoValue>5){
                VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                VrednostVerovatnoceRef3.current[4].style.backgroundColor="gray"; 
                setInfraIdRedValue(5)
            }
                else if(infroInfoValue===0||infroInfoValue=='')
                {
                    VrednostVerovatnoceRef3.current[0].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[1].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[2].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[3].style.backgroundColor="white";
                    VrednostVerovatnoceRef3.current[4].style.backgroundColor="white";
                }
            }
}, [infroInfoValue,unosProcInfraValue,unosStetaInfraValue]);

useEffect(() => {
    if(!procPosledicaValue[0].zivot)
    ZivotRef.current.style.backgroundColor="gray"
    else{
        ZivotRef.current.style.backgroundColor="white"
    }
    if(!procPosledicaValue[0].ekonomiju)
    EkonomijaRef.current.style.backgroundColor="gray"
    else{
        EkonomijaRef.current.style.backgroundColor="white"
    }
    if(!procPosledicaValue[0].infra)
    InfraRef.current.style.backgroundColor="gray"
    else{
        InfraRef.current.style.backgroundColor="white"
    }
    }, [procPosledicaValue]);


    return(
        <div className="posledice">
            <h3>?????????????? ???????????? ???? ?????????????? ??????????????????</h3>
            <div className="posledica-izbor">
            <button ref={ZivotRef} onClick={OdabirPosledica} value="zivot">?????????????????? ???? ?????????? ?? ?????????????? ????????</button>
            <button ref={EkonomijaRef} onClick={OdabirPosledica} value="ekonomija">?????????????????? ???? ??????????????????/??????????????????</button>
            <button ref={InfraRef} onClick={OdabirPosledica} value="infra">?????????????????? ???? ???????????????? ????????????????????????????</button>
            </div>
            <div className="posledice-nizovi">
    {/* ///////////////////////////////////////////////////////////// */}
           {!procPosledicaValue[0].zivot&&
            <div className="procene-niz">
                <label htmlFor="zdravlje">?????????? ???? ????????</label>
                <div className="inputi-posledice">
                <input onWheel={(e) => e.target.blur()} required onChange={(e)=>setZivotInfoValue(e.target.value)} type="number" value={zivotInfoValue} name="zdravlje" id="" />
                </div>
                <h2>????????????????????</h2>
                {zivotNiz.map((m,index)=>{
                    return [
                    <div className="numerisanje-butona" key={index}>
                        <label htmlFor={m}>{index+1}</label>
                    <button ref={el => VrednostVerovatnoceRef.current[index] = el} value={index} name={m}>{m}</button>
                    </div>
                    ]
                })}
            </div>
            }
     {/* ///////////////////////////////////////////////////////////// */}
                {!procPosledicaValue[0].ekonomiju&&
            <div className="procene-niz"> 
            <label htmlFor="ekonomija">?????????? ???????????????? ?????? ?????????? ??????????</label>
            <div className="inputi-posledice">
                {!unosStetaValue&& <input onWheel={(e) => e.target.blur()} value={unosEkonomijaValue} onChange={(e)=>{setEkonomijaInfoValue(e.target.value);setUnosEkonomijaValue(e.target.value)}} type="number" placeholder="procenat" name="ekonomija" id="" />}
                {!unosEkonomijaValue&&<input onWheel={(e) => e.target.blur()} value={unosStetaValue} onChange={ProracunProcenta} type="number" placeholder="iznos stete" name="ekonomija" id="" />}
                {unosStetaValue&&<h4>{ekonomijaInfoValue} %</h4> }
                </div>
                <h2>????????????????????</h2>
                {ekonomijaNiz.map((m,index)=>{
                    return [
                    <div className="numerisanje-butona" key={index}>
                        <label htmlFor={m}>{index+1}</label>
                    <button ref={el => VrednostVerovatnoceRef2.current[index] = el} value={index} name={m}>{m}</button>
                    </div>
                    ]
                })}
            </div>
            }
      {/* ///////////////////////////////////////////////////////////// */}

              {!procPosledicaValue[0].infra&&  
            <div className="procene-niz"> 
            <label htmlFor="infro">?????????? ???????????????? ?????? ?????????? ??????????</label>
            <div className="inputi-posledice">
                {!unosStetaInfraValue&&<input onWheel={(e) => e.target.blur()} value={unosProcInfraValue} onChange={(e)=>{setUnosProcInfraValue(e.target.value);setInfroInfoValue(e.target.value)}} type="number" placeholder="procenat" name="infro" id="" />}
                {!unosProcInfraValue&&<input onWheel={(e) => e.target.blur()} value={unosStetaInfraValue} onChange={ProracunProcetaSteta} type="number" placeholder="iznos stete" name="infro" id="" />}
                {unosStetaInfraValue&&<h4>{infroInfoValue} %</h4> }

           </div>
                <h2>????????????????????</h2>
                {infroNiz.map((m,index)=>{
                    return [
                    <div className="numerisanje-butona" key={index}>
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