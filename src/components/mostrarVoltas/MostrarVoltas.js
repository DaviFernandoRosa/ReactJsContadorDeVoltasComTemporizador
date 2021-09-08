import React from 'react';
import '../../style.css'


const MostrarVoltas = (props) => {
    return (
        <p className='voltas'>
          <span >{props.voltas}</span><br />
            Voltas
        </p>
    )
}

export default MostrarVoltas;