import React, { useState, useContext, useEffect, useRef } from 'react'
import { TContext } from "./context"

const IzborOpasnosti = () => {

    const { opasnost } = useContext(TContext)
    const [opasnostValue, setOpasnostValue] = opasnost;
    const EkstremneRef = useRef(null);
    const [ekstremne, setEkstremne] = useState(false)

    const Izbor = (e) => {
        setOpasnostValue(e.target.value);
        // if (e.target.value === "ekstremne-vremenske-prilike")
        //     setEkstremne(true)
        // else {
        //     setEkstremne(false);
        // }
    }
    // useEffect(() => {
    //     if (ekstremne === true)
    //         EkstremneRef.current.style.display = "block";
    //     else {
    //         EkstremneRef.current.style.display = "none";
    //     }
    // }, [ekstremne])

    return (
        <div className="izbor-opasnosti">
            <label htmlFor="izbor">Опасност:</label>
            <select onChange={Izbor} defaultValue={'DEFAULT'} name="izbor" id="">
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
                <option value="voda">Недостатак воде за пиће</option>
                <option value="epidemije">Епидемије и пандемије</option>
                <option value="biljne">Биљне болести</option>
                <option value="zivotinja">Болести животиња</option>
                <option value="pozari">Пожари и експлозије</option>
                <option value="tehnicke">Техничко - технолошке несреће</option>
                <option value="nuklearni">Нуклеарни и радиолошки акциденти</option>
                <option value="terorsticki">Oд терористичког напада</option>
            </select>

            {/* <select ref={EkstremneRef} name="" id="">
                    <option value="velika-kolicina-padavina">Velika Kolicina Padavina</option>
                    <option value="grad">Grad</option>
                    <option value="olujni-vetar">Olujni Vetar</option>
                    <option value="snezne-mecave">Snezne Mecave</option>
                    <option value="topli-talas">Topli talas</option>
                    <option value="susa">Susa</option>
                </select> */}
        </div>
    )
}
export default IzborOpasnosti;