import React from 'react'
import { useState } from 'react'

import TamañoTorta from './TamañoTorta';
import salirIco from '../../public/imagenes/salir.png'

const CardTorta = (props) => {


  const [tamañoSeleccionado, setTamañoSeleccionado] = useState(null);
  const [abrirDetalles, setAbrirDetalles] = useState(false);

  const handleSeleccionarTamaño = (tamaño) => {
    setTamañoSeleccionado(tamaño);
  };

  const tamaños = [
    { tamaño: 1, porciones: '6-12', peso: '1/2 Libra', precio: props.precioMediaLibra },
    { tamaño: 2, porciones: '13-18', peso: '3/4 Libra', precio: props.precioTresCuartosLibra },
    { tamaño: 3, porciones: '19-24', peso: '1 Libra', precio: props.precioLibra }
  ];

  const mostrarConfirmarProducto = () => {
    setAbrirDetalles(true);
    document.body.classList.add('popup-open');
  }

  const ocultarConfirmarProducto = () => {
    setAbrirDetalles(false);
    document.body.classList.remove('popup-open');
  }


  return (
    <div>
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
            {tamaños.map((tamañoInfo) => (
              <TamañoTorta
                key={tamañoInfo.tamaño}
                tamaño={tamañoInfo.tamaño}
                porciones={tamañoInfo.porciones}
                peso={tamañoInfo.peso}
                precio={tamañoInfo.precio}
                tamañoSeleccionado={tamañoSeleccionado}
                handleSeleccionarTamaño={handleSeleccionarTamaño}
              />
            ))}
          </div>
          <div>
            <p
              className='boton botonCardProductos'
              onClick={mostrarConfirmarProducto}
            >Añadir al carrito</p>
          </div>
        </div>
      </div>

      {abrirDetalles && (
        <div className='popup-bg-confirmarProducto'>
          <div className='popup-confirmarProducto'>
            <img onClick={ocultarConfirmarProducto} className="confirmarProducto-close-button-img" src={salirIco} alt="Cerrar" />

          </div>
        </div>
      )}




    </div>
  )
}

export default CardTorta