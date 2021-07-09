import React,{useState,useContext,useEffect,useRef} from 'react'
import {TContext} from "./context"

const IzborOpasnosti=()=>{

    const{opasnost}=useContext(TContext)
    const[opasnostValue,setOpasnostValue]=opasnost;
    const EkstremneRef=useRef(null);
    const[ekstremne,setEkstremne]=useState(false)


    const Izbor=(e)=>{
        setOpasnostValue(e.target.value);
        if(e.target.value==="ekstremne-vremenske-prilike")
        setEkstremne(true)
        else{
            setEkstremne(false);
        }
    }
    useEffect(() => {
        if(ekstremne===true)
        EkstremneRef.current.style.display="block";
        else{
            EkstremneRef.current.style.display="none";
        }
    }, [ekstremne])

    return(
        <div className="izbor-opasnosti">
            <label htmlFor="izbor">Opasnost:</label>
            <select onChange={Izbor} name="izbor" id="">
                <option value="zemljotres">Zemljotres</option>
                <option value="poplave">Poplave</option>
                <option value="ekstremne-vremenske-prilike">Ekstremne Vremenske Prilike</option>
                <option value="nedostatak-vode">Nedostatak Vode</option>
                <option value="epidemija">Epidemija i Pandemija</option>
                <option value="bolesti-zivotinja">Bolesti zivotinja</option>
                <option value="pozari">Pozari i eksplozije</option>
                <option value="tehnicke-nesrece">Tehnicke nesrece</option>
            </select>

                 <select ref={EkstremneRef} name="" id="">
                    <option value="velika-kolicina-padavina">Velika Kolicina Padavina</option>
                    <option value="grad">Grad</option>
                    <option value="olujni-vetar">Olujni Vetar</option>
                    <option value="snezne-mecave">Snezne Mecave</option>
                    <option value="topli-talas">Topli talas</option>
                    <option value="susa">Susa</option>
                </select>
        </div>
    )
}
export default IzborOpasnosti;