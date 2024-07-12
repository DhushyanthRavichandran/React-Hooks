import React from 'react'
import { useEffect,useState } from 'react'
import axios from "axios"
const Useeffect = () => {
   const [data,setData]=useState("")
   const [count,setCount]=useState(0);
    useEffect( ()=>{
         axios
         .get("https://jsonplaceholder.typicode.com/comments")
         .then((response)=>{
            console.log("Api is called");
            setData(response.data[0].email);
         });
    },[]);
    //here we use useeffect for data fetching like api calls 
    //it needs to happen as soon as the component is rendered 
   //we can tell react that when to rerun or no re reun with using []
   //we can use this when there is any change of state in a dom
   //if it happens , it can rerun and render if we dont use []
   //Separation of Concerns: Keeps side effects separate from the main rendering logic.
   return (
    <div>
        <h1>{data}</h1>
        <h1>{count}</h1> 
        <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default Useeffect