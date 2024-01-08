import React from 'react'
import '../estilos/home.css'
import CardProductos from '../componentes/CardProductos'
import panAliñado from '../../public/imagenes/productos/pan/pan3.png'
import tortas from '../../public/imagenes/productos/tortas/tortas.gif'
import bizcochos from '../../public/imagenes/productos/bizcochos/bizcochos.gif'
import lacteos from '../../public/imagenes/productos/lacteos/lacteos.png'
import tamales from '../../public/imagenes/productos/otros/tamales.png'
import galletas from '../../public/imagenes/productos/galletas/galletas.png'


const Home = () => {

    

    const productos = [
        {
            id : 1,
            nombre: 'Pan Aliñado',
            img : panAliñado,
            url : 'pan_aliñado',
        },
        {
            id : 2,
            nombre: 'Tortas',
            img : tortas,
            url: 'tortas',
        },
        {
            id : 3,
            nombre: 'Bizcochos',
            img : bizcochos,
            url: 'bizcochos',
        },
        {
            id : 4,
            nombre: 'Lácteos',
            img : lacteos,
            url: 'lacteos',
        },
        {
            id : 5,
            nombre: 'Otros',
            img : tamales,
            url: 'otros',
        },
        {
            id:6,
            nombre: 'Galletas',
            img : galletas,
            url: 'galletas',
        }
    ]

    return (
        <div className='fondoApp'>
            <div>
                <h2 className='subtitulo'>Nuestros Productos</h2>
                <div className='contenedorProductos'>
                    {productos.map(props =>(
                        <CardProductos
                        key = {props.id}
                        nombre = {props.nombre}
                        img = {props.img}
                        url = {props.url}
                        />
                    ))}
                    
                </div>

            </div>
        </div>
    )
}

export default Home