import React, { useState, useContext, useRef, useEffect } from 'react';
import { TContext } from '../context'
import Slika from '../Slika'

const ProcenaVerovatnoceWord = () => {

    const { procVerovatnoceN, odabranaVerovatnocaN, odabranaVrednostVerN, verKolonaN } = useContext(TContext)
    const [procVerovatnoceNValue, setprocVerovatnoceNValue] = useState(procVerovatnoceN);
    const [odabranaVerovatnocaNValue, setodabranaVerovatnocaNValue] = odabranaVerovatnocaN
    const [odabranaVrednostVerNValue, setodabranaVrednostVerNValue] = odabranaVrednostVerN

    const [verKolonaNValue, setVerKolonaNValue] = verKolonaN

    const VrednostVerovatnoceRef = useRef([])
    const OpcijaVerovatnoceRef1 = useRef([])
    const OpcijaVerovatnoceRef2 = useRef([])
    const OpcijaVerovatnoceRef3 = useRef([])
    const OpcijaVerovatnoceRef4 = useRef([])
    const OpcijaVerovatnoceRef5 = useRef([])

    useEffect(() => {
        console.log(verKolonaNValue)
    }, []);

    const [tabela, setTabela] = useState(
        {
            heder: ["Kатегорија", "(а)Вероватноћа", "(б)Учсеталост", "(ц)Стручна процена", "Одобрено"],
            prvi: ["1", "< 1 %", "1 догађај у 100 година и ређе", "Занемарљива"],
            drugi: ["2", "1 - 5 %", "1 догађај у 20 до 100 година", "Мала"],
            treci: ["3", "6 - 50 %", "1 догађај у 2 до 20 година", "Средња"],
            cetvrti: ["4", "51 - 98 %", "1 догађај у 1 до 2 године", "Велика"],
            peti: ["5", "> 98 %", "1 догађај годишње и чешће", "Изразито велика"]
        }
    )


    const [divSlika, setdivSlika] = useState({ prvi: true, drugi: false, treci: false, cetvrti: false, peti: false })

    useEffect(() => {
        if (odabranaVerovatnocaNValue == 'verovatnoca') {
            VrednostVerovatnoceRef.current[1].style.backgroundColor = "#d3d3d3"
        }
        else if (odabranaVerovatnocaNValue == 'ucestalost') {
            VrednostVerovatnoceRef.current[2].style.backgroundColor = "#d3d3d3"

        }
        else if (odabranaVerovatnocaNValue == 'strucna') {
            VrednostVerovatnoceRef.current[3].style.backgroundColor = "#d3d3d3"

        }
        OpcijaVerovatnoceRef1.current.map((m, index) => {
            if (m.id == odabranaVrednostVerNValue) {
                OpcijaVerovatnoceRef1.current[index].style.backgroundColor = '#d3d3d3'
                OpcijaVerovatnoceRef1.current[0].style.backgroundColor = '#d3d3d3'
                setdivSlika({ prvi: true, drugi: false, treci: false, cetvrti: false, peti: false })
                setVerKolonaNValue(1)
            }
        })
        OpcijaVerovatnoceRef2.current.map((m, index) => {
            if (m.id == odabranaVrednostVerNValue) {
                OpcijaVerovatnoceRef2.current[index].style.backgroundColor = '#d3d3d3'
                OpcijaVerovatnoceRef2.current[0].style.backgroundColor = '#d3d3d3'
                setdivSlika({ prvi: false, drugi: true, treci: false, cetvrti: false, peti: false })
                setVerKolonaNValue(2)
            }
        })
        OpcijaVerovatnoceRef3.current.map((m, index) => {
            if (m.id == odabranaVrednostVerNValue) {
                OpcijaVerovatnoceRef3.current[index].style.backgroundColor = '#d3d3d3'
                OpcijaVerovatnoceRef3.current[0].style.backgroundColor = '#d3d3d3'
                setdivSlika({ prvi: false, drugi: false, treci: true, cetvrti: false, peti: false })
                setVerKolonaNValue(3)
            }
        })
        OpcijaVerovatnoceRef4.current.map((m, index) => {
            if (m.id == odabranaVrednostVerNValue) {
                OpcijaVerovatnoceRef4.current[index].style.backgroundColor = '#d3d3d3'
                OpcijaVerovatnoceRef4.current[0].style.backgroundColor = '#d3d3d3'
                setdivSlika({ prvi: false, drugi: false, treci: false, cetvrti: true, peti: false })
                setVerKolonaNValue(4)
            }
        })
        OpcijaVerovatnoceRef5.current.map((m, index) => {
            if (m.id == odabranaVrednostVerNValue) {
                OpcijaVerovatnoceRef5.current[index].style.backgroundColor = '#d3d3d3'
                OpcijaVerovatnoceRef5.current[0].style.backgroundColor = '#d3d3d3'
                setdivSlika({ prvi: false, drugi: false, treci: false, cetvrti: false, peti: true })
                setVerKolonaNValue(5)
            }
        })

    }, [procVerovatnoceNValue, odabranaVrednostVerNValue]);

    return (
        <>
            {odabranaVerovatnocaNValue &&
                <div style={{ fontFamily: "sans-serif" }}>
                    <h1 style={{ fontSize: "14.5px", textDecoration: "underline" }}>Процена вероватноће</h1>
                    <p style={{ fontSize: "14.5px" }}>Разматрајучћи опасност на основу доступних података и анализа, радна група за процену ризика се пределила да вероватноћу одреди на основу вероватноће појављивања земљотреса.</p>
                    <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "100%" }}>
                        <thead style={{ fontSize: "13px" }}>

                            <tr>
                                {tabela.heder.map((m, index) => (
                                    <th key={index} ref={el => VrednostVerovatnoceRef.current[index] = el} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: "13px" }}>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.prvi.map((m, index) => (
                                    <td id={m} ref={el => OpcijaVerovatnoceRef1.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                    {divSlika.prvi && <Slika />}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.drugi.map((m, index) => (
                                    <td id={m} ref={el => OpcijaVerovatnoceRef2.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                    {divSlika.drugi && <Slika />}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.treci.map((m, index) => (
                                    <td id={m} ref={el => OpcijaVerovatnoceRef3.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                    {divSlika.treci && <Slika />}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.cetvrti.map((m, index) => (
                                    <td id={m} ref={el => OpcijaVerovatnoceRef4.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                    {divSlika.cetvrti && <Slika />}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.peti.map((m, index) => (
                                    <td id={m} ref={el => OpcijaVerovatnoceRef5.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                    {divSlika.peti && <Slika />}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}
export default ProcenaVerovatnoceWord;