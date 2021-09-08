import React, {useState, useEffect} from 'react';
import './style.css'
import MostrarVoltas from './components/mostrarVoltas/MostrarVoltas'
import MostrarTempo from  './components/MostrarTempo/MostrarTempo'
import Button from './components/Buttons/Button'

function App() {

  const [numVoltas, setNumVoltas] = useState(0);
  const [runnig, setRunnig] = useState(false);
  const [tempo, setTempo] = useState(0);


  useEffect(()=>{
   let timer = null
   if(runnig){
     timer = setInterval(() => {
       setTempo(old => old + 1)
     }, 10)
   }
   return () => {
     if(timer){
       clearInterval(timer)
     }
   }

  }, [runnig])


const toggleRunnig = () => {
  setRunnig(!runnig)
}

const reset = () => {
  setNumVoltas(0)
  setTempo(0)
}

  const incrementVoltas = () => {
    setNumVoltas(numVoltas + 1);
  }

  const decrementVoltas = () => {
    setNumVoltas(numVoltas - 1);
  }

  return (

    <div >
    
     <MostrarVoltas voltas={numVoltas} />
     <Button className='bigger' onClick={incrementVoltas} text='+'  />
     <Button className='bigger' onClick={decrementVoltas} text='-'  />
     
     {     numVoltas > 0 &&
           <MostrarTempo tempo={Math.round(tempo/numVoltas)} />
     }
    
    
     <Button onClick={toggleRunnig} text='Iniciar' />
     <Button onClick={reset} text='Reiniciar' />



    </div>
  );
}

export default App;
