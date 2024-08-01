import { useState } from 'react';
import './index.css';

function App() {
  const [color, setColor] = useState('grey');
  
  
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mb-4">
        test on click the button to see chnages 
      </div>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'red' }}
         onClick={()=>setColor('red')}
      >
        Red
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'green' }}
         onClick={()=>setColor('green')}
      >
        Red
      </button>     
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'yellow' }}
         onClick={()=>setColor('yellow')}
      > Yellow
      </button>    
      <button
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: 'blue' }}
       onClick={()=>setColor('blue')}
    >
      blue
    </button>     <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'black' }}
         onClick={()=>setColor('black')}
      >
        Black
      </button>     <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'Maroon' }}
         onClick={()=>setColor('Maroon')}
      >
        Maroon
      </button>
      {/* <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'white' }}
         onClick={()=>setColor('white')}
      >
        white
      </button> */}
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'pink' }}
         onClick={()=>setColor('pink')}
      >
        pink
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'Lavender' }}
         onClick={()=>setColor('Lavender')}
      >
        Lavender
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'purple' }}
         onClick={()=>setColor('purple')}
      >
        purple
      </button>
      <button
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{ backgroundColor: 'olive' }}
         onClick={()=>setColor('olive')}
      >
        olive
      </button>
     
      

    </div>
  );

}
export default App;