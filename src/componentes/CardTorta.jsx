import React from 'react'
import { useState } from 'react'

import torta1 from '../../public/imagenes/productos/tortas/torta1.png'

const CardTorta = (props) => {


  const [tamañoSeleccionado, setTamañoSeleccionado] = useState(null);

  const handleSeleccionarTamaño = (tamaño) => {
    setTamañoSeleccionado(tamaño);
  };


  return (
    <div className='CardTorta'>
      <div className='CardTorta-div1'>
        <img className='CardTorta-div1-img' src={props.img} alt="" />
      </div>
      <p className='CardTorta-nombre'>{props.nombre}</p>
      <div>
        <div className='CardTorta-escoger-titulo'>
          <p className='CardTorta-escoger-linea'></p>
          <p>Escoge un tamaño</p>
          <p className='CardTorta-escoger-linea'></p>
        </div>
        <div className='CardTorta-tamaños'>
          <div
            className={`CardTorta-tamaño-seleccionado ${tamañoSeleccionado === 1 ? 'seleccionado' : ''}`}
            onClick={() => handleSeleccionarTamaño(1)}
          >
            <div
              className={`CardTorta-porciones ${tamañoSeleccionado === 1 ? 'seleccionado' : ''}`}
              onClick={() => handleSeleccionarTamaño(1)}
            >
              <div>
                <p>6-12</p>
                <p>Porciones</p>
              </div>
              <div>
                <p>1/2  Libra</p>
              </div>
            </div>
            <p className='CardTorta-tamaño-nombre'>$35.000</p>
          </div>
          <div
            className={`CardTorta-tamaño-seleccionado ${tamañoSeleccionado === 2 ? 'seleccionado' : ''}`}
            onClick={() => handleSeleccionarTamaño(2)}
          >
            <div
              className={`CardTorta-porciones ${tamañoSeleccionado === 2 ? 'seleccionado' : ''}`}
              onClick={() => handleSeleccionarTamaño(2)}
            >
              <div>
                <p>13-18</p>
                <p>Porciones</p>
              </div>
              <div>
                <p>3/4 Libra</p>
              </div>
            </div>
            <p className='CardTorta-tamaño-nombre'>$60.000</p>
          </div>
          <div
            className={`CardTorta-tamaño-seleccionado ${tamañoSeleccionado === 3 ? 'seleccionado' : ''}`}
            onClick={() => handleSeleccionarTamaño(3)}
          >
            <div
              className={`CardTorta-porciones ${tamañoSeleccionado === 3 ? 'seleccionado' : ''}`}
              onClick={() => handleSeleccionarTamaño(3)}
            >
              <div>
                <p>19-24</p>
                <p>Porciones</p>
              </div>
              <div>
                <p>1 Libra</p>
              </div>
            </div>
            <p className='CardTorta-tamaño-nombre'>$80.000</p>
          </div>
        </div>
        <div>
          <p className='boton botonCardProductos'>Añadir al carrito</p>
        </div>
      </div>


    </div>
  )
}

export default CardTorta