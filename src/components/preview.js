import React from 'react';
import ProcenaVerovatnoceWord from './word/procenaVerovatnoceWord'
import ProcenaPosledica from './word/procenaPosledicaWord';
import ProcenaEkonomijeWord from './word/procenaEkonomijеWord';
import {Link} from 'react-router-dom'
import ProcenaPoKritInfraWord from './word/procenaPoKritInfraWord';
import Matrica from './word/matricaWord';

const Preview=()=>{

    function exportHTML(){
        var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
             "xmlns:w='urn:schemas-microsoft-com:office:word' "+
             "xmlns='http://www.w3.org/TR/REC-html40'>"
             
        var sourceHTML = header+document.getElementById("source-html").innerHTML;
        
        var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        var fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
     }


    return(
        <div className="orient">
            <div>
        <div id="source-html">
            <ProcenaVerovatnoceWord/>
            <ProcenaPosledica/>
            <ProcenaEkonomijeWord/>
            <ProcenaPoKritInfraWord/>
            <Matrica/>
            </div>
            <Link to="/">
            <button>Nazad</button>
            </Link>
            <button id="btn-export" onClick={exportHTML}>Export to</button>
       </div>
        </div>
    )
}
export default Preview;