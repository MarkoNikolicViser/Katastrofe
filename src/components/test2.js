import React,{useContext,useState,useEffect} from 'react';
import {TContext} from './context'

const Test2=()=>{
const{procPosledica}=useContext(TContext)

const[budezetValue1,setBudzetValue1]=useState(procPosledica)
const[budzetValue2,setBudzetValue2]=procPosledica

const Funkcija=()=>{
console.log(budezetValue1)
console.log(budzetValue2)
}
useEffect(() => {
    Funkcija()
}, []);
    return(
        <div></div>
    )
}
export default Test2