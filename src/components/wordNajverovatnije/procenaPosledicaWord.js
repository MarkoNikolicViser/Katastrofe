import React, { useState, useContext, useRef, useEffect } from 'react';
import { TContext } from '../context'
import Slika from '../Slika'


const ProcenaPosledica = () => {


  const { zivotInfo } = useContext(TContext)
  const[zivotInfoValue,setZivotInfoValue]=zivotInfo
  const [divSlika, setdivSlika] = useState({ prvi: true, drugi: false, treci: false, cetvrti: false, peti: false })


  const [tabela, setTabela] = useState({
    heder: ["Категорија", "Величина последица", "Критеријум", "Одабрано"],
    prvi: ["1", "Минимална", "< 5"],
    drugi: ["2", "Мала", "5 - 20"],
    treci: ["3", "Умерена", "21-50"],
    cetvrti: ["4", "Озбиљна", "51-150"],
    peti: ["5", "Катастрофална", "> 150"]
  })
  const VrednostPoslediceRef1 = useRef([])
  const VrednostPoslediceRef2 = useRef([])
  const VrednostPoslediceRef3 = useRef([])
  const VrednostPoslediceRef4= useRef([])
  const VrednostPoslediceRef5 = useRef([])

  useEffect(() => {
    if(zivotInfoValue<5)
    VrednostPoslediceRef1.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: true, drugi: false, treci: false, cetvrti: false, peti: false })
    })
    else if(zivotInfoValue>=5&&zivotInfoValue<=20)
    VrednostPoslediceRef2.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: true, treci: false, cetvrti: false, peti: false })
    })
    else if(zivotInfoValue>20&&zivotInfoValue<=50)
    VrednostPoslediceRef3.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: false, treci: true, cetvrti: false, peti: false })
    })
    else if(zivotInfoValue>50&&zivotInfoValue<=150)
    VrednostPoslediceRef4.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: false, treci: false, cetvrti: true, peti: false })
    })
    else if(zivotInfoValue>150)
    VrednostPoslediceRef5.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: false, treci: false, cetvrti: false, peti: true })
    })
  }, [zivotInfoValue]);

  return (
    <>
            {zivotInfoValue &&
                <div style={{ fontFamily: "sans-serif" }}>
                    <h1 style={{ fontSize: "14.5px", textDecoration: "underline" }}>Процена вероватноће</h1>
                    <p style={{ fontSize: "14.5px" }}>Разматрајучћи опасност на основу доступних података и анализа, радна група за процену ризика се пределила да вероватноћу одреди на основу вероватноће појављивања земљотреса.</p>
                   <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "100%" }}>
                        <thead style={{ fontSize: "13px" }}>
                            <tr>
                                {tabela.heder.map((m, index) => (
                                    <th key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody style={{ fontSize: "13px" }}>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.prvi.map((m, index) => (
                                    <td ref={el => VrednostPoslediceRef1.current[index] = el}  id={m} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                {divSlika.prvi&&<Slika/>}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.drugi.map((m, index) => (
                                    <td id={m} ref={el => VrednostPoslediceRef2.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                {divSlika.drugi&&<Slika/>}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.treci.map((m, index) => (
                                    <td id={m}  ref={el => VrednostPoslediceRef3.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                {divSlika.treci&&<Slika/>}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.cetvrti.map((m, index) => (
                                    <td id={m}  ref={el => VrednostPoslediceRef4.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                {divSlika.cetvrti&&<Slika/>}
                                </td>
                            </tr>
                            <tr style={{ textAlign: "center" }}>
                                {tabela.peti.map((m, index) => (
                                    <td id={m}  ref={el => VrednostPoslediceRef5.current[index] = el} key={index} style={{ border: "1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                                ))}
                                <td style={{ border: "1px solid black"}}>
                                {divSlika.peti&&<Slika/>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </>
  )
}
export default ProcenaPosledica