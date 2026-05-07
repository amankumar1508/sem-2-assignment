 import React,{useState} from "react"

 function App (){
  const[count,setCount]=useState(0)


  function  Increment(){
     setCount(count + 1)

  }
 function Decrement (){
    if(count >0){
        setCount(count - 1)
    }
 }
 function Reset(){
    setCount(0)
 }

return(
    <>
     <h1 >{count}</h1>
   <button onClick={Increment}>inc</button>
   <button onClick={Decrement}>dec</button>
   <button onClick={Reset}>reset</button>
     
    </>
 

)


 }

 export default App;