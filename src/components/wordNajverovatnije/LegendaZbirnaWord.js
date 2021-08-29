import React, { useState, useRef, useEffect, useContext } from 'react';
import Slika from '../Slika'
import { TContext } from '../context';



const Legenda = () => {
    const { verovatnocaIndex, ekonomijaIdRed, infraIdRed, zivotIdRed } = useContext(TContext)
    let [verovatnocaIndexValue, setVerovatnocaIndexValue] = verovatnocaIndex
    const [ekonomijaIdRedValue, setEkonomijaIdRedValue] = ekonomijaIdRed
    const [infraIdRedValue, setInfraIdRedValue] = infraIdRed;
    const [zivotIdRedValue, setZivotIdRedValue] = zivotIdRed
    const [proracun, setProracun] = useState()

    const Proracun = () => {
        let deljenaVrednost=0;

        if(ekonomijaIdRedValue>0)
        deljenaVrednost=deljenaVrednost+1;

        if(infraIdRedValue>0)
        deljenaVrednost=deljenaVrednost+1;

        if(zivotIdRedValue>0)
        deljenaVrednost=deljenaVrednost+1;
        let zbirnaVrednost = (ekonomijaIdRedValue + infraIdRedValue + zivotIdRedValue) / deljenaVrednost
        zbirnaVrednost = Math.round(zbirnaVrednost)
        const rez = ++verovatnocaIndexValue + (zbirnaVrednost - 1) * 5
        setProracun(rez)
    }
    useEffect(() => {
        Proracun()
    }, [proracun]);

    const [prikazi, setPrikazi] = useState({
        prvi: false,
        drugi: false,
        treci: false,
        cetvrti: false,
    })

    const Prikazi = () => {
        if ((proracun >= 18 && proracun <= 20) | (proracun >= 23 && proracun <= 25))
            setPrikazi({ prvi: false, drugi: false, treci: false, cetvrti: true })
        else if ((proracun > 11 && proracun <= 15) | (proracun == 17 | proracun == 22))
            setPrikazi({ prvi: false, drugi: false, treci: true, cetvrti: false })
        else if ((proracun > 6 && proracun <= 11) | (proracun == 16 | proracun == 21))
            setPrikazi({ prvi: false, drugi: true, treci: false, cetvrti: false })
        else if ((proracun > 0 && proracun <= 6))
            setPrikazi({ prvi: true, drugi: false, treci: false, cetvrti: false })
    }
    useEffect(() => {
        Prikazi()
    }, [proracun]);




    return (
        <div>
    <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "30px",verticalAlign: "top"  }}>
                <tbody style={{ fontSize: "8px" }}>
                    <tr>
                        <td style={{ backgroundColor: "red", height: "25px", width: "20px", textAlign:"center" }}>
                            {prikazi.cetvrti && <Slika />}
                        </td>
                        <td style={{width:"10px", height:"10px"}}>
                            Веома висок (црвена)
                            </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "orange", height: "25px", width: "20px" }}>
                            {prikazi.treci && <Slika />}
                        </td>
                        <td style={{width:"10px", height:"10px"}}>
                       Висок (наранџаста)

                        </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "yellow", height: "25px", width: "20px" }}>
                            {prikazi.drugi && <Slika />}
                        </td>
                        <td style={{width:"10px", height:"10px"}}>
                       Умерени (жута)
                         </td>
                    </tr>
                    <tr>
                        <td style={{ backgroundColor: "green", height: "25px", width: "20px" }}>
                            {prikazi.prvi && <Slika />}
                        </td>
                        <td style={{width:"10px", height:"10px"}}>
                        Низак (зелена)
                         </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Legenda;