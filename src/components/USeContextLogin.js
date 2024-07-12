import React ,{ useContext} from 'react'
import { Appcontext } from './USeContext'
const USeContextLogin = () => {
    const {setUsername}=useContext(Appcontext);
  return (
    <div>
<input type='text' onChange={ (event)=>{
    setUsername(event.target.value);
}}/>
    </div>
  )
}

export default USeContextLogin