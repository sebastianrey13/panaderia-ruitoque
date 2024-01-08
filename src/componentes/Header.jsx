import React from 'react'
import MenuMobile from './MenuMobile'
import imgHeader from '../../public/imagenes/imgHeader.png'
import '../estilos/header.css'


const Header = () => {




    return (
        <div className='header'>
            <div className='header-menu'>
                <MenuMobile />
                <button className='boton'>Realizar Pedido</button>
            </div>
            <img className='header-img' src={imgHeader} alt="" />
        </div>
    )
}

export default Header