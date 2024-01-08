import React from 'react'
import '../estilos/home.css'
import CardProductos from '../componentes/CardProductos'
import { v4 as uuidv4 } from 'uuid';

const Home = () => {

    const productos = [
        {
            nombre: 'Pan Aliñado',
            img : 'pan/pan3.png',
        },
        {
            nombre: 'Tortas',
            img : 'tortas/tortas.gif',
        },
        {
            nombre: 'Bizcochos',
            img : 'bizcochos/bizcochos.gif',
        },
        {
            nombre: 'Lácteos',
            img : 'lacteos/lacteos.png',
        },
        {
            nombre: 'Otros',
            img : 'otros/tamales.png',
        }
    ]

    return (
        <div className='fondoApp'>
            <div>
                <h2 className='subtitulo'>Nuestros Productos</h2>
                <div className='contenedorProductos'>
                    {productos.map(props =>(
                        <CardProductos
                        key = {uuidv4()}
                        nombre = {props.nombre}
                        img = {props.img}
                        />
                    ))}
                    
                </div>

            </div>
        </div>
    )
}

export default Home