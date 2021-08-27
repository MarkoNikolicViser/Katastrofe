import React, { useState, useRef, useEffect, useContext } from 'react';
import Slika from '../Slika'
import { TContext } from '../context';


const ZbirnaTablicaWord = () => {
    const { verKolona, ekonomijaIdRed, infraIdRed, zivotIdRed } = useContext(TContext)
    const [verKolonaValue, setVerKolonaValue] = verKolona
    const [ekonomijaIdRedValue, setEkonomijaIdRedValue] = ekonomijaIdRed
    const [infraIdRedValue, setInfraIdRedValue] = infraIdRed;
    const [zivotIdRedValue, setZivotIdRedValue] = zivotIdRed
    const [proracun, setProracun] = useState()


    const Proracun = () => {
        let zbirnaVrednost = (ekonomijaIdRedValue + infraIdRedValue + zivotIdRedValue) / 3
        zbirnaVrednost=Math.round(zbirnaVrednost)
        const rez = verKolonaValue + (zbirnaVrednost - 1) * 5
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
        <>
        <p style={{ fontSize: "14.5px", fontFamily: "sans-serif" }}>На основу одређених нивоа ризика одређује се прихватљивост ризика од дате опасности</p>
            <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "100%" }}>
                <thead style={{ fontSize: "13px" }}>
                    <tr>
                        <th style={{ borderRight: "none", borderTop: "1px black solid", borderLeft: "1px black solid", borderBottom: "1px solid black", padding: "6px 10px 6px 10px" }}>Ризик</th>
                        <th style={{ borderRight: "1px solid black", borderTop: "1px black solid", borderLeft: "none", borderBottom: "1px solid black", padding: "6px 10px 6px 10px" }}></th>
                        <th style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>Прихватљивост</th>
                        <th style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>Начин поступања</th>
                        <th style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>Одлука</th>
                    </tr>
                </thead>
                <tbody style={{ fontSize: "13px" }}>
                    <tr style={{height:"30px"}}>
                        <td style={{ backgroundColor: "red", border: "1px solid black" }}></td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>Веома висок</td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>НЕПРИХВАТЉИВ</td>
                        <td rowSpan="2" style={{textAlign:"center",borderBottom:'1px solid black'}}>Веома висок и висок ниво ризика, захтевају третман ризика ради смaњења на ниво прихватљивости</td>
                        <td style={{ border: "1px solid black", textAlign:"center"  }}>{prikazi.cetvrti && <Slika />}</td>
                    </tr>
                    <tr style={{height:"30px"}}>
                        <td style={{ backgroundColor: "orange", border: "1px solid black" }}></td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>Висок</td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>НЕПРИХВАТЉИВ</td>
                        {/* <td style={{borderBottom:"1px solid black", textAlign:"center",paddingTop:"-10px"  }}>ризика ради смaњења на ниво прихватљивости</td> */}
                        <td style={{ border: "1px solid black", textAlign:"center"  }}>{prikazi.treci && <Slika />}</td>
                    </tr>
                    <tr style={{height:"30px"}}>
                        <td style={{ backgroundColor: "yellow", border: "1px solid black" }}></td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>Умерен</td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>ПРИХВАТЉИВ</td>
                        <td style={{borderBottom:"1px solid black",textAlign:"center"}}>Умерени ризик може да значи потребу предузимања неких радњи</td>
                        <td style={{ border: "1px solid black", textAlign:"center"  }}>{prikazi.drugi && <Slika />}</td>
                    </tr>
                    <tr style={{height:"30px"}}>
                        <td style={{ backgroundColor: "green", border: "1px solid black" }}></td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>Низак</td>
                        <td style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>ПРИХВАТЉИВ</td>
                        <td style={{borderBottom:"1px solid black",textAlign:"center"}}>Низак ризик, може значити да се не предузима никаква радња</td>
                        <td style={{ border: "1px solid black", textAlign:"center" }}>{prikazi.prvi && <Slika />}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
export default ZbirnaTablicaWord;