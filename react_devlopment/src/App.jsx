import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Code from './Code'

function App(){
 let myObj={
   usernmae: "anish",
   age:23
 }
 let newArr=[1,2,3]



  return(
      <>
      <h2 className="bg-green-400 text-black p-4 rounded-xl mb-4">Baap is only Anish</h2>
      <Code  usernmae="king anish" btnText="click me" />
      <Code usernmae ="golwa" btnText='Visit me'/>
      
      </>
  )




}
  
      //   const Dev= "Lets dev make happy"
      //   return (
      //     <>
      //     
      //      <p>test para</p>
      //     </>
      //   )
      // }
     

     // <p className="read-the-docs">
        {/* God has a better plan for me. */}
     // </p>
    
export default App
