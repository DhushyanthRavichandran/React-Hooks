import React ,{useState,createContext} from 'react'
import USeContextLogin from './USeContextLogin';
import UseContextUser from './UseContextUser';

export const  Appcontext=createContext(null);

const USeContext = () => {
    const [username,setUsername]=useState("");
  return (
    <div>
      <Appcontext.Provider value={{username,setUsername}}>
        <USeContextLogin/>
         <UseContextUser/>
      </Appcontext.Provider>
    </div>
  )
}

export default USeContext