import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CardCategoria = (props) => {




  return (
    <div className='CardCategoria'>
      <h2>{props.nombre}</h2>
      <img src={props.img} alt="" />
      <Link to={`/${props.url}`}>
        <p>Comprar</p>
      </Link>
    </div>
  )
}

export default CardCategoria