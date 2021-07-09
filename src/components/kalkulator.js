import React,{useState,useContext,useEffect} from 'react';
import { TContext } from './context'



const Kalkulator=()=>{

const{budzet,procBudzet}=useContext(TContext)
const[budzetValue,setBudzetValue]=budzet;
const[procBudzetValue,seProctBudzetValue]=procBudzet;

const[procenat,setProcenat]=useState("")


const UnosBudzeta=(e)=>{
setBudzetValue(e.target.value);
}

const UnosProcenta=(e)=>{
setProcenat(e.target.value)
}
const Obracun=()=>{
    let proracun=((budzetValue/100)*procenat)
    seProctBudzetValue(budzetValue-proracun)
}

useEffect(() => {
    Obracun();

    
}, [budzetValue,procenat]);



    return(
        <div className='kalkulator'>
            <form action="">
            <input  type="number" onWheel={(e) => e.target.blur()} placeholder="Unos budzeta" name="budzet" id="" onChange={UnosBudzeta} />
            <input type="number" onWheel={(e) => e.target.blur()} placeholder="Unos procenta" name="procenat" id="" onChange={UnosProcenta} />
            <h1>{procBudzetValue} rsd</h1>
            </form>
        </div>
    )
}
export default Kalkulator