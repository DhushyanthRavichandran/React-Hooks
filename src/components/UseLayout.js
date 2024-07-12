import React,{useRef,useEffect, useLayoutEffect} from 'react'

const UseLayout = () => {
    const inputref=useRef(null);
    useLayoutEffect(()=>
    {
        console.log( inputref.current.value);
    },[])
    useEffect( ()=>
    {
        inputref.current.value="dhushyanth";
    },[])
  return (
    <div>
        <input type='text' value="hello" ref={inputref}/>
    </div>
  )
}

export default UseLayout