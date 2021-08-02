import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { TContext } from './context'



const Save = () => {
    const { opasnost } = useContext(TContext)

    const [opasnostValue, setOpasnostValue] = opasnost;

    const Cuvanje = () => {
        setOpasnostValue()
    }


    return (
        <div className='save'>
            <button onClick={Cuvanje}>Sacuvaj sve</button>
            <Link to="/preview">
                <button>Vidi Preview</button>
            </Link>
        </div>
    )
}
export default Save;