import React from  'react';
import '../../style.css';




const MostrarTempo = (props) => {

     const tempo = props.tempo
     const minutos = Math.round(tempo/ 60)
     const segundos = tempo % 60
     const minutosStr = minutos < 10 ? '0' : minutos
     const segundosStr = segundos < 10 ? '0' : segundos


    return(
        <p className='tempo'>
           <span> {`${minutosStr}:${segundosStr}`} </span> <br />
             Tempo médio por volta
        </p>
    );
}
export default MostrarTempo;