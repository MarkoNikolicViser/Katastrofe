import React,{useRef,useState,useEffect} from 'react'


const Test=()=>{

    const[broj,setBroj]=useState(5)

const d1Ref=useRef(null);
const d2Ref=useRef(null);
const d3Ref=useRef(null);
const d4Ref=useRef(null);
const d5Ref=useRef(null);
const d6Ref=useRef(null);
const d7Ref=useRef(null);
const d8Ref=useRef(null);
const d9Ref=useRef(null);

const Proba=()=>{

    if(d1Ref.current.value==broj)
    d1Ref.current.style.backgroundColor="red"
    else if(d2Ref.current.value==broj){
        d2Ref.current.style.backgroundColor="red"
    }
    else if(d3Ref.current.value==broj){
        d3Ref.current.style.backgroundColor="red"
    }
    else if(d4Ref.current.value==broj){
        d4Ref.current.style.backgroundColor="red"
    }
    else if(d4Ref.current.value==broj){
        d4Ref.current.style.backgroundColor="red"
    }
    else if(d5Ref.current.value==broj){
        d5Ref.current.style.backgroundColor="red"
    }
    else if(d6Ref.current.value==broj){
        d6Ref.current.style.backgroundColor="red"
    }
    else if(d7Ref.current.value==broj){
        d7Ref.current.style.backgroundColor="red"
    }
    else if(d8Ref.current.value==broj){
        d8Ref.current.style.backgroundColor="red"
    }
    else if(d9Ref.current.value==broj){
        d9Ref.current.style.backgroundColor="red"
    }
}


useEffect(() => {
Proba();
}, [])

    return(
        <div className="test">
                <button ref={d1Ref} value="1" className="d1" />
                <button ref={d2Ref} value="2" className="d2" />
                <button ref={d3Ref} value="3" className="d3" />
                <button ref={d4Ref} value="4" className="d4" />
                <button ref={d5Ref} value="5" className="d5" />
                <button ref={d6Ref} value="6" className="d6" />
                <button ref={d7Ref} value="7" className="d7" />
                <button ref={d8Ref} value="8" className="d8" />
                <button ref={d9Ref} value="9" className="d9" />
        </div>
    )
}

export default Test;