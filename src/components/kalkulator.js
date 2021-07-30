import React,{useState,useContext,useEffect} from 'react';
import { TContext } from './context'



const Kalkulator=()=>{

const{budzet,procBudzet,procenat}=useContext(TContext)
const[budzetValue,setBudzetValue]=budzet;
const[procBudzetValue,seProctBudzetValue]=procBudzet;

const[procenatValue,setProcenatValue]=procenat


const UnosBudzeta=(e)=>{
setBudzetValue(e.target.value);
}

const UnosProcenta=(e)=>{
    setProcenatValue(e.target.value)
}
const Obracun=()=>{
    let proracun=((budzetValue/100)*procenatValue)
    seProctBudzetValue(budzetValue-proracun)
}

useEffect(() => {
    Obracun();

    
}, [budzetValue,procenatValue]);



    return(
        <div className='kalkulator'>
            <form action="">
            <input  type="number" onWheel={(e) => e.target.blur()} placeholder="Unos budzeta" value={budzetValue} name="budzet" id="" onChange={UnosBudzeta} />
            <input type="number" onWheel={(e) => e.target.blur()} placeholder="Unos procenta" value={procenatValue} name="procenat" id="" onChange={UnosProcenta} />
            {budzetValue&&procenatValue&&<h1>{procBudzetValue} rsd</h1>}
            </form>
        </div>
    )
}
export default Kalkulator