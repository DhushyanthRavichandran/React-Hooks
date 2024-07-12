// import React,{useState} from 'react'

// const Reducer = () => {
//     const [count,Setcount]=useState(0);
    
//     const [showtext,setShowtext]=useState(true);


   
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={ ()=>{
//             Setcount(()=>count+1);
//             setShowtext(!showtext);
//         }}>click here</button>
//        {showtext && <p>this is a text</p>}
//     </div>
//   )
// }

// export default Reducer
import React,{useReducer} from 'react'

function reducer(state,action){
      switch(action.type){
          case "Increment":
            return {count:state.count+1,showText:state.showText};
          case "text":
            return {count:state.count,showText:!state.showText};
           default:
            return state;
      }
}

const Reducer = () => {
  const [state,dispatch]=useReducer(reducer,{count:0,showText:"this is a text "});


   
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={ ()=>{
          dispatch({type:"Increment"})
          dispatch({type:"text"})
        }
         } >click here</button>
       {state.showText && <p>this is a text</p>}
    </div>
  )
}

//it centralizes the state update logic
// we can reduce the multiple same usestate to the usereducer
//ex:Managing the state of a form with many inputs and validations.
// this reducer function determines how the stste should change 
//based on the dispatch actions
//As the application grows, using useReducer can make the state
// management more scalable and easier to maintain compared to multiple useState calls.
//Instead of having multiple useState calls and separate state update functions,
// useReducer allows you to handle state updates through a single dispatch function.

export default Reducer