import React, { useState, useContext, useRef, useEffect } from 'react';
import { TContext } from '../context'
import Slika from '../Slika'


const MatricaEkonimijaWord = () => {



    const { verovatnocaIndexN, infraIdRedN } = useContext(TContext)
    let [verovatnocaIndexValue, setVerovatnocaIndexValue] = verovatnocaIndexN
    const[infraIdRedValue,setInfraIdRedValue]=infraIdRedN
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
        const rez = ++verovatnocaIndexValue + (infraIdRedValue - 1) * 5
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
            <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "250px", height: "100px" }}>
                <tbody style={{ fontSize: "13px" }}>
                    <tr id="prva" style={{ textAlign: "center" }}>
                        <td style={{ textAlign: "left", fontSize: "9px", width: "5px" }}>Катастрофалне</td>
                        <td style={{width:"3px"}}></td>
                        <td>5</td>
                        {tabela.prvi.map(m => (
                            <td ref={el => OpcijaVerovatnoceRef1.current[m] = el} key={m} style={{ border: "1px solid black", width: "30px", height: "30px" }}>
                                {proracun === m && <Slika />}
                            </td>
                        ))}
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td style={{ textAlign: "left", fontSize: "9px" }}>Озбиљне</td>
                        <td rowSpan="3">
                            <img src="https://biblioteka.almaks.rs/get-image/posledice.png" alt="" />
                        </td>
                        <td>4</td>
                        {tabela.drugi.map(m => (
                            <td ref={el => OpcijaVerovatnoceRef2.current[m] = el} key={m} style={{ border: "1px solid black", width: "30px", height: "30px" }}>
                                {proracun === m && <Slika />}
                            </td>
                        ))}
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td style={{ textAlign: "left", fontSize: "9px" }}>Умерене</td>
                        <td>3</td>
                        {tabela.treci.map(m => (
                            <td ref={el => OpcijaVerovatnoceRef3.current[m] = el} key={m} style={{ border: "1px solid black", width: "30px", height: "30px" }}>
                                {proracun === m && <Slika />}
                            </td>
                        ))}
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td style={{ textAlign: "left", fontSize: "9px" }}>Мале</td>
                        <td>2</td>
                        {tabela.cetvrti.map(m => (
                            <td ref={el => OpcijaVerovatnoceRef4.current[m] = el} key={m} style={{ border: "1px solid black", width: "30px", height: "30px" }}>
                                {proracun === m && <Slika />}
                            </td>
                        ))}
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td style={{ textAlign: "left", fontSize: "9px" }}>Минималне</td>
                        <td></td>
                        <td>1</td>
                        {tabela.peti.map(m => (
                            <td ref={el => OpcijaVerovatnoceRef5.current[m] = el} key={m} style={{ border: "1px solid black", width: "30px", height: "30px" }}>
                                {proracun === m && <Slika />}
                            </td>
                        ))}
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colSpan="5">Вероватноћa</td>

                    </tr>
                    <tr style={{ fontSize: "9px" }}>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th style={{ verticalAlign: "top" }}>
                            <img src="https://biblioteka.almaks.rs/get-image/zanemarljiva.png" alt="" />
                        </th>
                        <th style={{ verticalAlign: "top" }}>
                            <img src="https://biblioteka.almaks.rs/get-image/mala.png" alt="" />
                        </th>
                        <th style={{ verticalAlign: "top" }}>
                            <img src="https://biblioteka.almaks.rs/get-image/srednja.png" alt="" />

                        </th>
                        <th style={{ verticalAlign: "top" }}>
                            <img src="https://biblioteka.almaks.rs/get-image/velika.png" alt="" />

                        </th>
                        <th style={{ verticalAlign: "top" }}>
                            <img src="https://biblioteka.almaks.rs/get-image/izrazito.png" alt="" />

                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
    )
}

export default MatricaEkonimijaWord;