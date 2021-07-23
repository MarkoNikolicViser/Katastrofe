import React, { useState, useContext, useRef, useEffect } from 'react';
import { TContext } from '../context'
import Slika from '../Slika'


const MatricaEkonimijaWord = () => {



    const { verKolona, ekonomijaIdRed } = useContext(TContext)
    const [verKolonaValue, setVerKolonaValue] = verKolona
    const [ekonomijaIdRedValue, setEkonomijaIdRedValue] = ekonomijaIdRed
    const [proracun, setProracun] = useState()




    const [tabela, setTabela] = useState({
        peti: [1, 2, 3, 4, 5],
        cetvrti: [6, 7, 8, 9, 10],
        treci: [11, 12, 13, 14, 15],
        drugi: [16, 17, 18, 19, 20],
        prvi: [21, 22, 23, 24, 25]
    })
    const OpcijaVerovatnoceRef1 = useRef([])
    const OpcijaVerovatnoceRef2 = useRef([])
    const OpcijaVerovatnoceRef3 = useRef([])
    const OpcijaVerovatnoceRef4 = useRef([])
    const OpcijaVerovatnoceRef5 = useRef([])

    const Proracun = () => {
        const rez = verKolonaValue + (ekonomijaIdRedValue - 1) * 5
        setProracun(rez)
    }
    useEffect(() => {
        Proracun()
    }, [proracun]);
    useEffect(() => {
        OpcijaVerovatnoceRef5.current[1].style.backgroundColor = "green"
        OpcijaVerovatnoceRef5.current[2].style.backgroundColor = "green"
        OpcijaVerovatnoceRef5.current[3].style.backgroundColor = "green"
        OpcijaVerovatnoceRef5.current[4].style.backgroundColor = "green"
        OpcijaVerovatnoceRef5.current[5].style.backgroundColor = "green"
        OpcijaVerovatnoceRef4.current[6].style.backgroundColor = "green"
        OpcijaVerovatnoceRef4.current[7].style.backgroundColor = "yellow"
        OpcijaVerovatnoceRef4.current[8].style.backgroundColor = "yellow"
        OpcijaVerovatnoceRef4.current[9].style.backgroundColor = "yellow"
        OpcijaVerovatnoceRef4.current[10].style.backgroundColor = "yellow"
        OpcijaVerovatnoceRef3.current[11].style.backgroundColor = "yellow"
        OpcijaVerovatnoceRef3.current[12].style.backgroundColor = "orange"
        OpcijaVerovatnoceRef3.current[13].style.backgroundColor = "orange"
        OpcijaVerovatnoceRef3.current[14].style.backgroundColor = "orange"
        OpcijaVerovatnoceRef3.current[15].style.backgroundColor = "orange"
        OpcijaVerovatnoceRef2.current[16].style.backgroundColor = "yellow"
        OpcijaVerovatnoceRef2.current[17].style.backgroundColor = "orange"
        OpcijaVerovatnoceRef2.current[18].style.backgroundColor = "red"
        OpcijaVerovatnoceRef2.current[19].style.backgroundColor = "red"
        OpcijaVerovatnoceRef2.current[20].style.backgroundColor = "red"
        OpcijaVerovatnoceRef1.current[21].style.backgroundColor = "yellow"
        OpcijaVerovatnoceRef1.current[22].style.backgroundColor = "orange"
        OpcijaVerovatnoceRef1.current[23].style.backgroundColor = "red"
        OpcijaVerovatnoceRef1.current[24].style.backgroundColor = "red"
        OpcijaVerovatnoceRef1.current[25].style.backgroundColor = "red"
    }, []);



    return (
        <>
            <div style={{ fontFamily: "sans-serif" }}>

                <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "350px", height: "100px" }}>
                    <tbody style={{ fontSize: "13px" }}>
                        <tr id="prva" style={{ textAlign: "center" }}>
                            <td>Катастрофалне 5</td>
                            {tabela.prvi.map(m => (
                                <td ref={el => OpcijaVerovatnoceRef1.current[m] = el} key={m} style={{ border: "1px solid black", padding: "6px 10px 6px 10px", width: "60px", height: "60px" }}>{proracun === m && <Slika/>}</td>
                            ))}
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>Озбиљне 4</td>
                            {tabela.drugi.map(m => (
                                <td ref={el => OpcijaVerovatnoceRef2.current[m] = el} key={m} style={{ border: "1px solid black", padding: "6px 10px 6px 10px", width: "60px", height: "60px" }}>{proracun === m && <Slika/>}</td>
                            ))}
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>Умерене 3</td>
                            {tabela.treci.map(m => (
                                <td ref={el => OpcijaVerovatnoceRef3.current[m] = el} key={m} style={{ border: "1px solid black", padding: "6px 10px 6px 10px", width: "60px", height: "60px" }}>{proracun === m && <Slika/>}</td>
                            ))}
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>Мале 2</td>
                            {tabela.cetvrti.map(m => (
                                <td ref={el => OpcijaVerovatnoceRef4.current[m] = el} key={m} style={{ border: "1px solid black", padding: "6px 10px 6px 10px", width: "60px", height: "60px" }}>{proracun === m && <Slika/>}</td>
                            ))}
                        </tr>
                        <tr style={{ textAlign: "center" }}>
                            <td>Минималне 1</td>
                            {tabela.peti.map(m => (
                                <td ref={el => OpcijaVerovatnoceRef5.current[m] = el} key={m} style={{ border: "1px solid black", padding: "6px 10px 6px 10px", width: "60px", height: "60px" }}>{proracun === m && <Slika/>}</td>
                            ))}
                        </tr>
                        <tr>
                            <th></th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MatricaEkonimijaWord;