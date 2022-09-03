import React from 'react'
import Item from './Item'
import styles from '../index.css'
import data from './data.json'


// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
const info = data;



export default function Listado(props) {
  return (
    <div className='container'>
      {
        data.map( datoss => {
          return(
            <Item key={datoss.id}
            nombre= {datoss.producto.nombre}
            descripcion= {datoss.producto.descripcion}
            stocks= {datoss.stock}
            contador = {props.contador}>
            </Item>
          )
        })
      }
    </div>
  )
}
