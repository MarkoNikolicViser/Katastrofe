import React, { useState, useRef, useEffect, useContext } from 'react';
import { TContext } from './context';
import ProcenaVerovatnoceWord from './word/procenaVerovatnoceWord'
import ProcenaPosledica from './word/procenaPosledicaWord';
import ProcenaEkonomijeWord from './word/procenaEkonomijеWord';
import { Link } from 'react-router-dom'
import ProcenaPoKritInfraWord from './word/procenaPoKritInfraWord';
import MatricaZivot from './word/matricaZivotWord';
import LegendaZivot from './word/LegendaWordZivot';
import MatricaEkonomija from './word/matricaEkonomijaWord'
import LegendaEkonomija from './word/LegendaWordEkonomija'
import MatricaInfra from './word/matricaInfraWord'
import LegendaInfra from './word/LegendaInfraWord'
import MatricaZbirna from './word/matricaZbirnaWord'
import LegendaZbirna from './word/LegendaZbirnaWord'
import ZbirnaTablicaWord from './word/zbirnaTablicaWord';


const Preview = () => {
    const { ekonomijaIdRed, zivotIdRed, infraIdRed } = useContext(TContext)

    const [ekonomijaIdRedValue, setEkonomijaIdRedValue] = ekonomijaIdRed
    const [zivotIdRedValue, setZivotIdRedValue] = zivotIdRed
    const [infraIdRedValue, setInfraIdRedValue] = infraIdRed;



    function exportHTML() {
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
            "xmlns:w='urn:schemas-microsoft-com:office:word' " +
            "xmlns='http://www.w3.org/TR/REC-html40'>"

        var sourceHTML = header + document.getElementById("source-html").innerHTML;

        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }


    return (
        <div className="orient">
            <div>
                <div id="source-html">
                    <ProcenaVerovatnoceWord />
                    <ProcenaPosledica />
                    <ProcenaEkonomijeWord />
                    <ProcenaPoKritInfraWord />
                    <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "100%" }}>
                        <tbody>
                            <tr>
                                {zivotIdRedValue && <>
                                    <td style={{ border: "1px solid black" }}>
                                        <MatricaZivot />
                                    </td>
                                    <td>
                                        <LegendaZivot />
                                    </td>
                                </>}
                                {ekonomijaIdRedValue && <>
                                    <td style={{ border: "1px solid black" }}>
                                        <MatricaEkonomija />
                                    </td>
                                    <td>
                                        <LegendaEkonomija />
                                    </td>
                                </>}
                            </tr>
                            <tr>
                                {infraIdRedValue && <>
                                    <td style={{ border: "1px solid black" }}>
                                        <MatricaInfra />
                                    </td>
                                    <td>
                                        <LegendaInfra />
                                    </td>
                                </>}
                                <td style={{ border: "1px solid black" }}>
                                    <MatricaZbirna />
                                </td>
                                <td>
                                    <LegendaZbirna />
                                </td>
                            </tr>
                        </tbody>

                    </table>
                    <ZbirnaTablicaWord />
                </div>
                <Link to="/">
                    <button>Nazad</button>
                </Link>
                <button id="btn-export" onClick={exportHTML}>Export to</button>
            </div>
        </div >
    )
}
export default Preview;