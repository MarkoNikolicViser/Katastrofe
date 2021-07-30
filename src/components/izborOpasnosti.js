import React, { useState, useContext, useEffect, useRef } from 'react'
import { TContext } from "./context"

const IzborOpasnosti = () => {

    const { opasnost,opasnostTabela } = useContext(TContext)
    const [opasnostValue, setOpasnostValue] = opasnost;
    const EkstremneRef = useRef(null);
    const [ekstremne, setEkstremne] = useState(false)
    const [opasnostTabelaValue,setOpasnostTabelaValue]=opasnostTabela


    const Izbor = (e) => {
        setOpasnostValue(e.target.value);
        if(e.target.value==="zemljotres")
        setOpasnostTabelaValue("земљотреса")
        else if(e.target.value==="odroni")
        setOpasnostTabelaValue("одрона, клизишта и ерозија")
        else if(e.target.value==="poplave")
        setOpasnostTabelaValue("поплава")
        else if(e.target.value==="grad")
        setOpasnostTabelaValue("екстремне временске појаве града")
        else if(e.target.value==="olujni")
        setOpasnostTabelaValue("екстремне временске појаве олујног ветра")
        else if(e.target.value==="snezne")
        setOpasnostTabelaValue("екстремне временске појаве снежне мећаве, наноса и поледица, хладни талас")
        else if(e.target.value==="topli")
        setOpasnostTabelaValue("топлог таласа")
        else if(e.target.value==="susa")
        setOpasnostTabelaValue("суше")
        else if(e.target.value==="vode")
        setOpasnostTabelaValue("недостатка воде за пиће")
        else if(e.target.value==="epidemije")
        setOpasnostTabelaValue("епидемије и пандемије")
        else if(e.target.value==="biljne")
        setOpasnostTabelaValue("биљних болести")
        else if(e.target.value==="zivotinja")
        setOpasnostTabelaValue("болести животиња")
        else if(e.target.value==="pozari")
        setOpasnostTabelaValue("пожара и експлозија")
        else if(e.target.value==="tehnicke")
        setOpasnostTabelaValue("техничко/технолошке несреће")
        else if(e.target.value==="nuklearni")
        setOpasnostTabelaValue("нуклеарног и радиолошког акцидента")
        else if(e.target.value==="terorsticki")
        setOpasnostTabelaValue("опасности од терористичког напада")
    }


    return (
        <>
        {!opasnostValue&&<div className="izbor-opasnosti">
            <label htmlFor="izbor">Опасност:</label>
            <select onChange={Izbor} defaultValue={'DEFAULT'}  name="izbor" id="">
                <option value="DEFAULT" disabled>Изабери</option>
                <option value="zemljotres">Земљотрес</option>
                <option value="odroni">Одрони, клизишта и ерозије</option>
                <option value="poplave">Поплаве</option>
                <optgroup label="Екстремне временске појаве:">
                <option value="padavina">Екстремне временске појаве: Велика количина падавине</option>
                <option value="grad">Екстремне временске појаве: Град</option>
                <option value="olujni">Екстремне временске појаве: Олујни ветар</option>
                <option value="snezne">Екстремне временске појаве: Снежне мећаве, наноси и поледица, хлади талас</option>
                <option value="topli">Екстремне временске појаве: Топли талас</option>
                <option value="susa">Екстремне временске појаве: Суша</option>
                </optgroup>
                <option value="vode">Недостатак воде за пиће</option>
                <option value="epidemije">Епидемије и пандемије</option>
                <option value="biljne">Биљне болести</option>
                <option value="zivotinja">Болести животиња</option>
                <option value="pozari">Пожари и експлозије</option>
                <option value="tehnicke">Техничко - технолошке несреће</option>
                <option value="nuklearni">Нуклеарни и радиолошки акциденти</option>
                <option value="terorsticki">Oд терористичког напада</option>
            </select>
        </div>}
        <div>
        {opasnostValue&&
        <div className="naslov-opasnosti">
        <h1>Опасност од појављивања {opasnostTabelaValue}</h1>
        <h1 className="plus" onClick={()=>setOpasnostValue()}>+</h1>
        </div>
        }
        </div>
        </>
    )
}
export default IzborOpasnosti;