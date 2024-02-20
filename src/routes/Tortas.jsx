import React from 'react'
import '../estilos/tortas.css'

import torta1 from '../../public/imagenes/productos/tortas/torta1.png'
import torta2 from '../../public/imagenes/productos/tortas/torta2.png'
import torta3 from '../../public/imagenes/productos/tortas/torta3.png'
import torta4 from '../../public/imagenes/productos/tortas/torta4.png'
import torta5 from '../../public/imagenes/productos/tortas/torta5.png'
import torta6 from '../../public/imagenes/productos/tortas/torta6.png'
import torta7 from '../../public/imagenes/productos/tortas/torta7.png'
import torta8 from '../../public/imagenes/productos/tortas/torta8.png'
import torta9 from '../../public/imagenes/productos/tortas/torta9.png'
import torta10 from '../../public/imagenes/productos/tortas/torta10.png'
import torta11 from '../../public/imagenes/productos/tortas/torta11.png'
import torta12 from '../../public/imagenes/productos/tortas/torta12.png'
import torta13 from '../../public/imagenes/productos/tortas/torta13.png'
import torta14 from '../../public/imagenes/productos/tortas/torta14.png'
import torta15 from '../../public/imagenes/productos/tortas/torta15.png'
import torta16 from '../../public/imagenes/productos/tortas/torta16.png'
import torta17 from '../../public/imagenes/productos/tortas/torta17.png'
import torta18 from '../../public/imagenes/productos/tortas/torta18.png'
import torta19 from '../../public/imagenes/productos/tortas/torta19.png'
import torta20 from '../../public/imagenes/productos/tortas/torta20.png'
import torta21 from '../../public/imagenes/productos/tortas/torta21.png'
import torta22 from '../../public/imagenes/productos/tortas/torta22.png'
import torta23 from '../../public/imagenes/productos/tortas/torta23.png'
import torta24 from '../../public/imagenes/productos/tortas/torta24.png'
import torta25 from '../../public/imagenes/productos/tortas/torta25.png'
import torta26 from '../../public/imagenes/productos/tortas/torta26.png'
import torta27 from '../../public/imagenes/productos/tortas/torta27.png'
import torta28 from '../../public/imagenes/productos/tortas/torta28.png'
import torta29 from '../../public/imagenes/productos/tortas/torta29.png'
import torta30 from '../../public/imagenes/productos/tortas/torta30.png'
import torta31 from '../../public/imagenes/productos/tortas/torta31.png'
import torta32 from '../../public/imagenes/productos/tortas/torta32.png'
import torta33 from '../../public/imagenes/productos/tortas/torta33.png'
import torta34 from '../../public/imagenes/productos/tortas/torta34.png'
import torta35 from '../../public/imagenes/productos/tortas/torta35.png'
import torta36 from '../../public/imagenes/productos/tortas/torta36.png'
import torta37 from '../../public/imagenes/productos/tortas/torta37.png'
import torta38 from '../../public/imagenes/productos/tortas/torta38.png'
import torta39 from '../../public/imagenes/productos/tortas/torta39.png'
import torta40 from '../../public/imagenes/productos/tortas/torta40.png'
import torta41 from '../../public/imagenes/productos/tortas/torta41.png'
import torta42 from '../../public/imagenes/productos/tortas/torta42.png'
import torta43 from '../../public/imagenes/productos/tortas/torta43.png'
import torta44 from '../../public/imagenes/productos/tortas/torta44.png'

import CardTorta from '../componentes/CardTorta'


const Tortas = () => {

  const tortas = [
    {
      id: 1,
      nombre: "Torta 1",
      img: torta1,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 2,
      nombre: "Torta 2",
      img: torta2,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 3,
      nombre: "Torta 3",
      img: torta3,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 4,
      nombre: "Torta 4",
      img: torta4,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 5,
      nombre: "Torta 5",
      img: torta5,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 6,
      nombre: "Torta 6",
      img: torta6,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 7,
      nombre: "Torta 7",
      img: torta7,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 8,
      nombre: "Torta 8",
      img: torta8,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 9,
      nombre: "Torta 9",
      img: torta9,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 10,
      nombre: "Torta 10",
      img: torta10,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 11,
      nombre: "Torta 11",
      img: torta11,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 12,
      nombre: "Torta 12",
      img: torta12,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 13,
      nombre: "Torta 13",
      img: torta13,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 14,
      nombre: "Torta 14",
      img: torta14,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 15,
      nombre: "Torta 15",
      img: torta15,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 16,
      nombre: "Torta 16",
      img: torta16,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 17,
      nombre: "Torta 17",
      img: torta17,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 18,
      nombre: "Torta 18",
      img: torta18,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 19,
      nombre: "Torta 19",
      img: torta19,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 20,
      nombre: "Torta 20",
      img: torta20,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 21,
      nombre: "Torta 21",
      img: torta21,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 22,
      nombre: "Torta 22",
      img: torta22,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 23,
      nombre: "Torta 23",
      img: torta23,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 24,
      nombre: "Torta 24",
      img: torta24,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 25,
      nombre: "Torta 25",
      img: torta25,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 26,
      nombre: "Torta 26",
      img: torta26,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 27,
      nombre: "Torta 27",
      img: torta27,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 28,
      nombre: "Torta 28",
      img: torta28,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 29,
      nombre: "Torta 29",
      img: torta29,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 30,
      nombre: "Torta 30",
      img: torta30,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 31,
      nombre: "Torta 31",
      img: torta31,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 32,
      nombre: "Torta 32",
      img: torta32,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 33,
      nombre: "Torta 33",
      img: torta33,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 34,
      nombre: "Torta 34",
      img: torta34,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 35,
      nombre: "Torta 35",
      img: torta35,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 36,
      nombre: "Torta 36",
      img: torta36,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 37,
      nombre: "Torta 37",
      img: torta37,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 38,
      nombre: "Torta 38",
      img: torta38,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 39,
      nombre: "Torta 39",
      img: torta39,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 40,
      nombre: "Torta 40",
      img: torta40,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 41,
      nombre: "Torta 41",
      img: torta41,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 42,
      nombre: "Torta 42",
      img: torta42,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 43,
      nombre: "Torta 43",
      img: torta43,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },
    {
      id: 44,
      nombre: "Torta 44",
      img: torta44,
      precioMediaLibra: 35000,
      precioTresCuartosLibra: 60000,
      precioLibra: 80000,
    },

  ]


  return (
    <div className='tortas'>
      <h2 className='subtitulo'>Tortas</h2>
      <div className='tortas-card'>
        {tortas.map((torta, index) => (
          <CardTorta
            key={index + 1}
            id={torta.id}
            nombre={torta.nombre}
            img={torta.img}
            precioMediaLibra={torta.precioMediaLibra}
            precioTresCuartosLibra={torta.precioTresCuartosLibra}
            precioLibra={torta.precioLibra}

          />
        ))}
      </div>
    </div>
  )
}

export default Tortas