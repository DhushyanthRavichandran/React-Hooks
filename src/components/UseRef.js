import  React,{ useRef } from 'react';

const UseRef = () => {
    const inputref=useRef(null);
    function onClick(){
        // inputref.current.focus(); // used for focusing
        inputref.current.value= "";
        //this will do if a letter is typed inside the input box
        // then if we click the button , the elements inside will be deleted
    }
    return (
    <div>
        <input type='text' placeholder='ex...' ref={inputref}/>
        <button onClick={onClick}>add focus</button>
    </div>
  )
}
//useRef is  mainly used for the dom manipulation
//accessing dom elements
//we can store the pevious elements
//we can store the mutable variables. without causing rerender 
//unlike useState updating current element property of ref does not trigger a
//rerender 

export default UseRef