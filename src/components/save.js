import React from 'react';
import {Link} from 'react-router-dom'


const Save=()=>{

    return(
        <div className='save'>
                <button>Sacuvaj sve</button>
                <Link to="/preview">
                <button>Vidi Preview</button>
                </Link>
        </div>
    )
}
export default Save;