import React, { useState, useRef, useEffect, useContext } from 'react';
import { TContext } from './context';
import ProcenaVerovatnoceWord from './wordNajverovatnije/procenaVerovatnoceWord'
import ProcenaPosledica from './wordNajverovatnije/procenaPosledicaWord';
import ProcenaEkonomijeWord from './wordNajverovatnije/procenaEkonomijŠµWord';
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
import ProcenaEkonomijeWordN from './wordNajtezi/procenaEkonomijŠµWord';
import ProcenaVerovatnoceWordN from './wordNajtezi/procenaVerovatnoceWord'



const Preview = () => {
    const { ekonomijaIdRed, zivotIdRed, infraIdRed,verovatnocaIndex, ekonomijaIdRedN, zivotIdRedN, infraIdRedN,verovatnocaIndexN } = useContext(TContext)

    const [ekonomijaIdRedValue, setEkonomijaIdRedValue] = ekonomijaIdRed
    const [zivotIdRedValue, setZivotIdRedValue] = zivotIdRed
    const [infraIdRedValue, setInfraIdRedValue] = infraIdRed;
    const [verovatnocaIndexValue, setVerovatnocaIndexValue] = verovatnocaIndex


    const [ekonomijaIdRedValueN, setEkonomijaIdRedValueN] = ekonomijaIdRedN
    const [zivotIdRedValueN, setZivotIdRedValueN] = zivotIdRedN
    const [infraIdRedValueN, setInfraIdRedValueN] = infraIdRedN;
    const [verovatnocaIndexValueN, setVerovatnocaIndexValueN] = verovatnocaIndexN

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
                    {verovatnocaIndexValue&&<>
                    <ProcenaVerovatnoceWord />
                    <ProcenaPosledica />
                    <ProcenaEkonomijeWord />
                    <ProcenaPoKritInfraWord />
                    {verovatnocaIndexValue ? (<h3 style={{ fontSize: "16px", textDecoration: "underline", fontFamily: "sans-serif" }}>ŠŠøŠ²Š¾ Šø ŠæŃŠøŃŠ²Š°ŃŠøŠ²Š¾ŃŃ ŃŠøŠ·ŠøŠŗŠ°</h3>) : null}
                    <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "50%" }}>
                        <tbody>
                            <tr>
                                {zivotIdRedValue ? (<td style={{ width: "100%", height: "20px", borderLeft: "1px solid black", borderTop: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 1. Š ŠøŠ·ŠøŠŗ ŠæŠ¾ Š¶ŠøŠ²Š¾Ń Šø Š·Š“ŃŠ°Š²ŃŠµ ŃŃŠ“Šø</td>) : null}
                                {zivotIdRedValue ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}

                                {ekonomijaIdRedValue ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderLeft: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 2. Š ŠøŠ·ŠøŠŗ ŠæŠ¾ ŠµŠŗŠ¾Š½Š¾Š¼ŠøŃŃ/ŠµŠŗŠ¾Š»Š¾Š³ŠøŃŃ</td>) : null}
                                {ekonomijaIdRedValue ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}
                            </tr>
                            <tr>
                                {zivotIdRedValue ? (<>
                                    <td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaZivot /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaZivot /></td>
                                </>) : null}
                                {ekonomijaIdRedValue ? (<>
                                    <td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaEkonomija /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaEkonomija /></td>
                                </>) : null}
                            </tr>
                            <tr>
                                {infraIdRedValue ? (<td style={{ width: "100%", height: "20px", borderLeft: "1px solid black", borderTop: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 3. ŠŃŠøŃŠøŃŠ½Š° ŠøŠ½ŃŃŠ°ŃŃŃŃŠŗŃŃŃŠ°</td>) : null}
                                {infraIdRedValue ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}

                                {verovatnocaIndexValue ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderLeft: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 4. Š£ŠŗŃŠæŠ°Š½ ŃŠøŠ·ŠøŠŗ</td >) : null}
                                {verovatnocaIndexValue ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}
                            </tr>
                            <tr>
                                {infraIdRedValue ? (<>
                                    <td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaInfra /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaInfra /></td>
                                </>) : null}
                                {verovatnocaIndexValue ? (<><td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaZbirna /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaZbirna /></td></>) : null}
                            </tr>
                        </tbody>
                    </table>
                    {verovatnocaIndexValue ? ( <ZbirnaTablicaWord />) : null}
                    </>}
                    {/* /// */}
                    {verovatnocaIndexValueN&&<>
                    <ProcenaVerovatnoceWordN />
                    <ProcenaPosledicaN />
                    <ProcenaEkonomijeWordN />
                    <ProcenaPoKritInfraWordN />
                    {verovatnocaIndexValueN ? (<h3 style={{ fontSize: "16px", textDecoration: "underline", fontFamily: "sans-serif" }}>ŠŠøŠ²Š¾ Šø ŠæŃŠøŃŠ²Š°ŃŠøŠ²Š¾ŃŃ ŃŠøŠ·ŠøŠŗŠ°</h3>) : null}
                    <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "50%" }}>
                        <tbody>
                            <tr>
                                {zivotIdRedValueN ? (<td style={{ width: "100%", height: "20px", borderLeft: "1px solid black", borderTop: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 1. Š ŠøŠ·ŠøŠŗ ŠæŠ¾ Š¶ŠøŠ²Š¾Ń Šø Š·Š“ŃŠ°Š²ŃŠµ ŃŃŠ“Šø</td>) : null}
                                {zivotIdRedValueN ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}

                                {ekonomijaIdRedValueN ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderLeft: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 2. Š ŠøŠ·ŠøŠŗ ŠæŠ¾ ŠµŠŗŠ¾Š½Š¾Š¼ŠøŃŃ/ŠµŠŗŠ¾Š»Š¾Š³ŠøŃŃ</td>) : null}
                                {ekonomijaIdRedValueN ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}
                            </tr>
                            <tr>
                                {zivotIdRedValueN ? (<>
                                    <td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaZivotN /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaZivotN /></td>
                                </>) : null}
                                {ekonomijaIdRedValueN ? (<>
                                    <td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaEkonomijaN /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaEkonomijaN /></td>
                                </>) : null}
                            </tr>
                            <tr>
                                {infraIdRedValueN ? (<td style={{ width: "100%", height: "20px", borderLeft: "1px solid black", borderTop: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 3. ŠŃŠøŃŠøŃŠ½Š° ŠøŠ½ŃŃŠ°ŃŃŃŃŠŗŃŃŃŠ°</td>) : null}
                                {infraIdRedValueN ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}

                                {verovatnocaIndexValueN ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderLeft: "1px solid black" }}>ŠŠ°ŃŃŠøŃŠ° 4. Š£ŠŗŃŠæŠ°Š½ ŃŠøŠ·ŠøŠŗ</td >) : null}
                                {verovatnocaIndexValueN ? (<td style={{ width: "100%", height: "20px", borderTop: "1px solid black", borderRight: "1px black solid" }}></td>) : null}
                            </tr>
                            <tr>
                                {infraIdRedValueN ? (<>
                                    <td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaInfraN /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaInfraN /></td>
                                </>) : null}
                                {verovatnocaIndexValueN ? (<><td style={{ borderLeft: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><MatricaZbirnaN /></td>
                                    <td style={{ borderRight: "1px solid black", borderBottom: "1px solid black", verticalAlign: "top" }}><LegendaZbirnaN /></td></>) : null}
                            </tr>
                        </tbody>
                    </table>
                    {verovatnocaIndexValueN ? ( <ZbirnaTablicaWordN />) : null}
                    {/* /// */}
                    </>}
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