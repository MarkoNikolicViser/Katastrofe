import React from 'react';
import {Link} from 'react-router-dom'


const Save=()=>{

    return(
        <div>
            <Link to="/preview">
                <button>Sacuvaj sve</button>
                <button>Vidi Preview</button>
            </Link>
        </div>
    )
}
export default Save;