import React, { forwardRef, useImperativeHandle, useState } from 'react'


const ButttonUseImperative = forwardRef( (props,ref) => {
    const [toggle,setToggle]=useState(true);
    
    useImperativeHandle(  ref, ()=>({
        altertoggle(){
            setToggle(!toggle);
        },
    })
    ); 

  return (
    <div> 
        {/* <button onClick={()=>setToggle(!toggle)}>button from child</button> */}
         
         <button onClick={()=>setToggle(!toggle)} >button from child</button>

        {toggle &&<p>toggled</p>}
    </div>
  )
});

export default ButttonUseImperative