import React,{useRef} from 'react'
import ButttonUseImperative from './ButttonUseImperative';
const ImperraativeHandler = () => {
    const buttonref=useRef(null);
  return (
    <div>
       <button onClick={()=>buttonref.current.altertoggle()} >button from parent</button>
       <ButttonUseImperative  ref={buttonref}/>
    </div>
  )
}

export default ImperraativeHandler