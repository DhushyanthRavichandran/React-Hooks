import React ,{useContext} from 'react'
import { Appcontext } from './USeContext'
const UseContextUser = () => {
    const {username}=useContext(Appcontext);
  return (
    <div><h1>user: {username} </h1></div>
  )
}

export default UseContextUser