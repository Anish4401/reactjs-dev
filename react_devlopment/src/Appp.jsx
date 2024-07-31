import React from "react";
import './index.css'
import './App.css'


    function App() {
        let  [count, setCount] = useState(0)
         const addValue =()=>{
           console.log("clicked",count)
           if(count<20){
           setCount(count+1);
       }  }
       let removeValue=()=>{
         if(count>0){
         setCount(count-1)
       }}
       
       return(
         <>
          <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Dev makes life soo easy.{count}</h1>
         <Card/>
         <button onClick={addValue}
           >+ </button>
       
         <br/>
         <button onClick={removeValue}
       
         >-</button>
         <p>Click Counts: {count}</p>
       
       
         </>)
}

//export default  MyApps 