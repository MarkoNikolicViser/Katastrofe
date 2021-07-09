import React, { useState, useContext, useRef, useEffect } from 'react';
import { TContext } from '../context'

const ProcenaVerovatnoceWord = () => {

    const { procVerovatnoce, odabranaVerovatnoca, odabranaVrednostVer } = useContext(TContext)
    const [procVerovatnoceValue, setProcVerovatnoceValue] = useState(procVerovatnoce);
    const [odabranaVerovatnocaValue, setodabranaVerovatnocaValue] = odabranaVerovatnoca
    const[odabranaVrednostVerValue,setOdabranaVrednostVerValue]=odabranaVrednostVer


    const VrednostVerovatnoceRef = useRef([])
    const KategorijaVerovatoceRef = useRef([{prvi:[]},{drugi:[]},{treci:[]},{cetvrti:[]},{peti:[]}])


    const tabelaRef = useRef()

    const [tabela, setTabela] = useState(
        {
            heder: ["Kатегорија", "(а)Вероватноћа", "(б)Учсеталост", "(ц)Стручна процена", "Одобрено"],
            prvi: ["1", "< 1%", "1 догађај у 100 година и ређе", "Занемарљива", ""],
            drugi: ["2", "1 - 5%", "1 догађај у 20 до 100 година", "Мала", ""],
            treci: ["3", "6 - 50%", "1 догађај у 20 до 100 година", "Средња", ""],
            cetvrti: ["4", "51 - 98%", "1 догађај у 1 до 2 године", "Велика", ""],
            peti: ["5", "> 98%", "1 догађај годишње и чешће", "Изразито велика", ""]
        }
    )


    // useEffect(() => {
    //     KategorijaVerovatoce1Ref.current.map(m=>{
    //          if (odabranaVerovatnocaValue == 'verovatnoca' && odabranaVrednostVerValue==m.id) {
    //         VrednostVerovatnoceRef.current[1].style.backgroundColor = "#d3d3d3"
    //         KategorijaVerovatoce1Ref.current[m.id].style.backgroundColor="#d3d3d3";
    //     }
    //     })
    // }, [procVerovatnoceValue,odabranaVrednostVerValue]);



    // useEffect(() => {
    //     if (odabranaVerovatnocaValue == 'verovatnoca') {
    //         VrednostVerovatnoceRef.current[1].style.backgroundColor = "#d3d3d3"
    //     }
    //     else if (odabranaVerovatnocaValue == 'ucestalost') {
    //         VrednostVerovatnoceRef.current[2].style.backgroundColor = "#d3d3d3"

    //     }
    //     else if (odabranaVerovatnocaValue == 'strucna') {
    //         VrednostVerovatnoceRef.current[3].style.backgroundColor = "#d3d3d3"

    //     }
    // }, [procVerovatnoceValue]);

    return (
        <>
            {odabranaVerovatnocaValue &&
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
                                    <td id={index} key={index} ref={el => KategorijaVerovatoceRef.current[index].prvi = el} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.drugi.map((m, index) => (
                                    <td id={index} key={index} ref={el => KategorijaVerovatoceRef.drugi.current[index] = el} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.treci.map((m, index) => (
                                    <td id={index} key={index} ref={el => KategorijaVerovatoceRef.treci.current[index] = el} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.cetvrti.map((m, index) => (
                                    <td id={index} key={index} ref={el => KategorijaVerovatoceRef.cetvrti.current[index] = el} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.peti.map((m, index) => (
                                    <td id={index} key={index} ref={el => KategorijaVerovatoceRef.peti.current[index] = el} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}
export default ProcenaVerovatnoceWord;