import React from 'react'
import '../estilos/header.css'
import MenuMobile from './MenuMobile'
import {useNavigate} from 'react-router-dom'


import imgHeader from '../../public/imagenes/imgHeader.png'
import logo from '../../public/imagenes/logo.png'


const Header = () => {

    const navigate = useNavigate();

    const recargarPagina = () =>{
        navigate('/home')
    }




    return (
        <div className='header'>
            <div className='header-menu'>
                <img onClick={recargarPagina} className='header-menu-img' src={logo} alt="" />
                <button className='boton'>Realizar Pedido</button>
                <MenuMobile />
            </div>
            <img className='header-img' src={imgHeader} alt="" />
        </div>
    )
}

export default Header