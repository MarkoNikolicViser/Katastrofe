import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { TContext } from './context'
import Axios from 'axios'



const Save = () => {
    const { opasnost, budzet, procenat, procVerovatnoce, zivotInfo, ekonomijaInfo, infroInfo, unosEkonomija, unosSteta, unosProcInfra, unosStetaInfra } = useContext(TContext)

    const [opasnostValue, setOpasnostValue] = opasnost;
    const [budzetValue, setBudzetValue] = budzet;
    const [procenatValue, setProcenatValue] = procenat
    const [procVerovatnoceValue, setProcVerovatnoceValue] = procVerovatnoce;
    const [zivotInfoValue, setZivotInfoValue] = zivotInfo
    const [unosEkonomijaValue, setUnosEkonomijaValue] = unosEkonomija
    const [infroInfoValue, setInfroInfoValue] = infroInfo
    const [unosStetaValue, setUnosStetaValue] = unosSteta
    const [unosProcInfraValue, setUnosProcInfraValue] = unosProcInfra
    const [unosStetaInfraValue, setUnosStetaInfraValue] = unosStetaInfra



    const Cuvanje = () => {
        // Axios.post("http://192.168.1.201:3005/api/register",{
        //     mail:'test7',
        //     sifra:'test2',
        //     pravo:1,
            
        // });
        // const data=await (await fetch('http://192.168.1.201:3005/api/getall/user')).json()
        // console.log(data)
 
        setOpasnostValue()
        setBudzetValue("")
        setProcenatValue("")
        setProcVerovatnoceValue({ verovatnoca: false, ucestalost: false, strucna: false })
        setZivotInfoValue("")
        setUnosEkonomijaValue("")
        setInfroInfoValue("")
        setUnosStetaValue("")
        setUnosProcInfraValue("")
        setUnosStetaInfraValue("")
    }


    return (
        <div className='save'>
            <button onClick={Cuvanje}>Sacuvaj sve</button>
            <Link to="/preview">
                <button>Vidi Preview</button>
            </Link>
        </div>
    )
}
export default Save;