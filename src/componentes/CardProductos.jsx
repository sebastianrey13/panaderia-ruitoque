import React from 'react'

const CardProductos = (props) => {




  return (
    <div className='cardProducto'>
      <h2>{props.nombre}</h2>
      <img src = {`../../public/imagenes/productos/${props.img}`} alt="" />
      <div>
      <p>Comprar</p>
      </div>
    </div>
  )
}

export default CardProductos