import React, { useState, useRef, useEffect, useContext } from 'react';
import Slika from '../Slika'
import { TContext } from '../context';



const Legenda = () => {
    const { verKolonaN, infraIdRedN } = useContext(TContext)
    const [verKolonaNValue, setVerKolonaNValue] = verKolonaN
    const [infraIdRedNValue, setinfraIdRedNValue] = infraIdRedN;
    const [proracun, setProracun] = useState()

    const Proracun = () => {
        const rez = verKolonaNValue + (infraIdRedNValue - 1) * 5
        setProracun(rez)
    }
    useEffect(() => {
        Proracun()
    }, [proracun]);

    const [prikazi, setPrikazi] = useState({
        prvi: false,
        drugi: false,
        treci: false,
        cetvrti: false,
    })

    const Prikazi = () => {
        if ((proracun >= 18 && proracun <=20) | (proracun >= 23 && proracun <= 25))
            setPrikazi({ prvi: false, drugi: false, treci: false, cetvrti: true })
        else if ((proracun > 11 && proracun <= 15) | (proracun == 17 | proracun == 22))
            setPrikazi({ prvi: false, drugi: false, treci: true, cetvrti: false })
        else if ((proracun > 6 && proracun <= 11) | (proracun == 16 | proracun == 21))
            setPrikazi({ prvi: false, drugi: true, treci: false, cetvrti: false })
        else if ((proracun > 0 && proracun <= 6))
            setPrikazi({ prvi: true, drugi: false, treci: false, cetvrti: false })
    }
    useEffect(() => {
        Prikazi()
    }, [proracun]);




    return (
        <div>

            <table style={{ fontFamily: "sans-serif", borderCollapse: "collapse", fontSize: "11px", width: "100%" }}>
                <tbody>
                    <tr>
                        <td style={{ border: "1px solid black", backgroundColor: "red", height: "30px", width: "30px" }}>
                            {prikazi.cetvrti && <Slika />}
                        </td>
                        <td>Веома висок(црвена)</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", backgroundColor: "orange", height: "30px", width: "30px" }}>
                            {prikazi.treci && <Slika />}
                        </td>
                        <td>Висок(наранџаста)</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", backgroundColor: "yellow", height: "30px", width: "30px" }}>
                            {prikazi.drugi && <Slika />}
                        </td>
                        <td>Умерени(жута)</td>
                    </tr>
                    <tr>
                        <td style={{ border: "1px solid black", backgroundColor: "green", height: "30px", width: "30px" }}>
                            {prikazi.prvi && <Slika />}
                        </td>
                        <td>Низак(зелена)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Legenda;