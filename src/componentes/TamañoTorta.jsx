import React from 'react'

const TamañoTorta = (props) => {

  return (
    <div
      className={`CardTorta-tamaño-seleccionado ${props.tamañoSeleccionado === props.tamaño ? 'seleccionado' : ''}`}
      onClick={() => props.handleSeleccionarTamaño(props.tamaño)}
    >
      <div
        className={`CardTorta-porciones ${props.tamañoSeleccionado === props.tamaño ? 'seleccionado' : ''}`}
        onClick={() => props.handleSeleccionarTamaño(props.tamaño)}
      >
        <div>
          <p>{props.porciones}</p>
          <p>Porciones</p>
        </div>
        <div>
          <p>{props.peso}</p>
        </div>
      </div>
      <p className='CardTorta-tamaño-nombre'>{`$${props.precio}`}</p>
    </div>
  );
}

export default TamañoTorta