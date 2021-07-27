import React, { useState, useRef, useEffect, useContext } from 'react';
import { TContext } from './context';
import ProcenaVerovatnoceWord from './wordNajverovatnije/procenaVerovatnoceWord'
import ProcenaPosledica from './wordNajverovatnije/procenaPosledicaWord';
import ProcenaEkonomijeWord from './wordNajverovatnije/procenaEkonomijеWord';
import { Link } from 'react-router-dom'
import ProcenaPoKritInfraWord from './wordNajverovatnije/procenaPoKritInfraWord';
import MatricaZivot from './wordNajverovatnije/matricaZivotWord';
import LegendaZivot from './wordNajverovatnije/LegendaWordZivot';
import MatricaEkonomija from './wordNajverovatnije/matricaEkonomijaWord'
import LegendaEkonomija from './wordNajverovatnije/LegendaWordEkonomija'
import MatricaInfra from './wordNajverovatnije/matricaInfraWord'
import LegendaInfra from './wordNajverovatnije/LegendaInfraWord'
import MatricaZbirna from './wordNajverovatnije/matricaZbirnaWord'
import LegendaZbirna from './wordNajverovatnije/LegendaZbirnaWord'
import ZbirnaTablicaWord from './wordNajverovatnije/zbirnaTablicaWord';

///
import ProcenaPoKritInfraWordN from './wordNajtezi/procenaPoKritInfraWord';
import MatricaZivotN from './wordNajtezi/matricaZivotWord';
import LegendaZivotN from './wordNajtezi/LegendaWordZivot';
import MatricaEkonomijaN from './wordNajtezi/matricaEkonomijaWord'
import LegendaEkonomijaN from './wordNajtezi/LegendaWordEkonomija'
import MatricaInfraN from './wordNajtezi/matricaInfraWord'
import LegendaInfraN from './wordNajtezi/LegendaInfraWord'
import MatricaZbirnaN from './wordNajtezi/matricaZbirnaWord'
import LegendaZbirnaN from './wordNajtezi/LegendaZbirnaWord'
import ZbirnaTablicaWordN from './wordNajtezi/zbirnaTablicaWord';
import ProcenaPosledicaN from './wordNajtezi/procenaPosledicaWord';
import ProcenaEkonomijeWordN from './wordNajtezi/procenaEkonomijеWord';
import ProcenaVerovatnoceWordN from './wordNajtezi/procenaVerovatnoceWord'



const Preview = () => {
    const { ekonomijaIdRed, zivotIdRed, infraIdRed, ekonomijaIdRedN,zivotIdRedN,infraIdRedN} = useContext(TContext)

    const [ekonomijaIdRedValue, setEkonomijaIdRedValue] = ekonomijaIdRed
    const [zivotIdRedValue, setZivotIdRedValue] = zivotIdRed
    const [infraIdRedValue, setInfraIdRedValue] = infraIdRed;

    const [ekonomijaIdRedNValue, setEkonomijaIdRedNValue] = ekonomijaIdRedN
    const [zivotIdRedNValue, setZivotIdRedNValue] = zivotIdRedN
    const [infraIdRedNValue, setInfraIdRedNValue] = infraIdRedN;


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
                    <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "50%" }}>
                        <tbody>
                            {/* <tr>
                                {zivotIdRedValue ?( <>
                                    <td style={{ border: "1px solid black" }}>
                                        <MatricaZivot />
                                    </td>
                                    <td><LegendaZivot /></td>
                                </>):null}
                                {ekonomijaIdRedValue ?(<>
                                    <td style={{ border: "1px solid black" }}><MatricaEkonomija /></td>
                                    <td><LegendaEkonomija /></td>
                                </>):null}
                            </tr> */}
                            <tr>
                                {infraIdRedValue ?(<>
                                    <td style={{ borderLeft: "1px solid black", borderTop: "1px solid black",borderBottom: "1px solid black", width:"15%"}}><MatricaInfra /></td>
                                    <td style={{ borderRight: "1px solid black", borderTop: "1px solid black",borderBottom: "1px solid black", width:"10%"}}><LegendaInfra /></td>
                                </>):null}
                                <td style={{ borderLeft: "1px solid black", borderTop: "1px solid black",borderBottom: "1px solid black", width:"15%"}}><MatricaZbirna /></td>
                                <td style={{ borderRight: "1px solid black", borderTop: "1px solid black",borderBottom: "1px solid black", width:"10%"}}><LegendaZbirna /></td>
                            </tr>
                        </tbody>
                    </table>
                    <ZbirnaTablicaWord />
                    {/* /// */}
                    <ProcenaVerovatnoceWordN />
                    <ProcenaPosledicaN />
                    <ProcenaEkonomijeWordN />
                    <ProcenaPoKritInfraWordN />
                    <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "100%" }}>
                        <tbody>
                            <tr>
                                {zivotIdRedNValue ?( <>
                                    <td style={{ border: "1px solid black" }}>
                                        <MatricaZivotN />
                                    </td>
                                    <td><LegendaZivotN /></td>
                                </>):null}
                                {ekonomijaIdRedNValue ?( <>
                                    <td style={{ border: "1px solid black" }}><MatricaEkonomijaN /></td>
                                    <td><LegendaEkonomijaN /></td>
                                </>):null}
                            </tr>
                            <tr>
                                {infraIdRedNValue ? (<>
                                    <td style={{ border: "1px solid black" }}><MatricaInfraN /></td>
                                    <td><LegendaInfraN /></td>
                                </>):null}
                                <td style={{ border: "1px solid black" }}><MatricaZbirnaN /></td>
                                <td><LegendaZbirnaN /></td>
                            </tr>
                        </tbody>
                    </table>
                    <ZbirnaTablicaWordN />
                    {/* /// */}
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