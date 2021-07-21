import React, { useState, useContext, useRef, useEffect } from 'react';
import { TContext } from '../context'
import Slika from './Slika'


const ProcenaEkonomijeWord = () => {


  const { ekonomijaInfo } = useContext(TContext)
  const [divSlika, setdivSlika] = useState({ prvi: true, drugi: false, treci: false, cetvrti: false, peti: false })
  const[ekonomijaInfoValue,setEkonomijaInfoValue]=ekonomijaInfo


  const [tabela, setTabela] = useState({
    heder: ["Категорија", "Величина последица", "Критеријум", "Одабрано"],
    prvi: ["1", "Минимална", "Од 0,1 - 1 %"],
    drugi: ["2", "Мала", "Од 1,1 - 3 %"],
    treci: ["3", "Умерена", "Од 3,1 - 7 %"],
    cetvrti: ["4", "Озбиљна", "Од 7,1 - 10 %"],
    peti: ["5", "Катастрофална", "чији износ прелази 10%"]
  })
  const VrednostPoslediceRef1 = useRef([])
  const VrednostPoslediceRef2 = useRef([])
  const VrednostPoslediceRef3 = useRef([])
  const VrednostPoslediceRef4= useRef([])
  const VrednostPoslediceRef5 = useRef([])

  useEffect(() => {
    if(ekonomijaInfoValue>0.1&&ekonomijaInfoValue<=1)
    VrednostPoslediceRef1.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: true, drugi: false, treci: false, cetvrti: false, peti: false })
    })
    else if(ekonomijaInfoValue>1&&ekonomijaInfoValue<=3)
    VrednostPoslediceRef2.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: true, treci: false, cetvrti: false, peti: false })
    })
    else if(ekonomijaInfoValue>3&&ekonomijaInfoValue<=7)
    VrednostPoslediceRef3.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: false, treci: true, cetvrti: false, peti: false })
    })
    else if(ekonomijaInfoValue>7&&ekonomijaInfoValue<=10)
    VrednostPoslediceRef4.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: false, treci: false, cetvrti: true, peti: false })
    })
    else if(ekonomijaInfoValue>10)
    VrednostPoslediceRef5.current.map(m=>{
      m.style.backgroundColor='#d3d3d3'
      setdivSlika({ prvi: false, drugi: false, treci: false, cetvrti: false, peti: true })
    })
  }, [ekonomijaInfoValue]);

  return (
    <>
            {ekonomijaInfoValue &&
                <div style={{ fontFamily: "sans-serif" }}>
                    <h3 style={{ fontSize: "14.5px", textDecoration: "underline" }}>Процена вероватноће</h3>
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
export default ProcenaEkonomijeWord