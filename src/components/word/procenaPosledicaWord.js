import React, { useState } from 'react';



const ProcenaPosledica=()=>{

const[tabela,setTabela]=useState({
    heder:["Категорија","Величина последица","Критеријум","Одабрано"],
    prvi:["1","Минимална","< 5",""],
    drugi:["2","Мала","5 - 20",""],
    treci:["3","Умерена","21-50",""],
    cetvrti:["4","Озбиљна","51-150",""],
    peti:["5","Катастрофална","> 150",""]

})


    return(
        <div style={{fontFamily:"sans-serif"}}>
          <h1 style={{fontSize:"14.5px",textDecoration:"underline"}}>Процена вероватноће</h1>
            <p style={{width:"100%",fontSize:"14.5px"}}>Разматрајучћи опасност на основу доступних података и анализа, радна група за процену ризика се пределила да вероватноћу одреди на основу вероватноће појављивања земљотреса.</p>
                    <table style={{fontFamily:"sans-serif", borderCollapse: "collapse", fontSize:"11px", width:"100%"}}>
                    <thead style={{ fontSize: "13px"}}>

                        <tr>
                        {tabela.heder.map((m,index)=>(
                                <th key={index} style={{border:"1px solid black", padding: "6px 10px 6px 10px"}}>{m}</th>
                        ))}
                        </tr>
                    </thead>
                    <tbody style={{ fontSize: "13px"}}>
                        <tr style={{textAlign:"center"}}>
                        {tabela.prvi.map((m,index)=>(
                           <td key={index} style={{border:"1px solid black", padding: "6px 10px 6px 10px"}}>{m}</td>
                        ))}
                         </tr>
                            <tr style={{textAlign:"center"}}>
                          {tabela.drugi.map((m,index)=>(
                            <td key={index} style={{border:"1px solid black", padding: "6px 10px 6px 10px"}}>{m}</td>
                        ))}
                        </tr>
                        <tr style={{textAlign:"center"}}>
                          {tabela.treci.map((m,index)=>(
                            <td key={index} style={{border:"1px solid black", padding: "6px 10px 6px 10px"}}>{m}</td>
                        ))}
                        </tr>
                        <tr style={{textAlign:"center"}}>
                          {tabela.cetvrti.map((m,index)=>(
                            <td key={index} style={{border:"1px solid black", padding: "6px 10px 6px 10px" }}>{m}</td>
                        ))}
                        </tr>
                        <tr style={{textAlign:"center"}}>
                          {tabela.peti.map((m,index)=>(
                            <td key={index} style={{border:"1px solid black", padding: "6px 10px 6px 10px"}}>{m}</td>
                        ))}
                        </tr>
                    </tbody>
                    </table>
        </div>
    )
}
export default ProcenaPosledica