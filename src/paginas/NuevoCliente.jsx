import { useState } from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = ({}) =>{

    return(
        <div>
            <h1 className="font-black text-4xl text-blue-900">Nuevo cliente...</h1>
            <p>Llene los datos para crear un nuevo cliente</p>
            <Formulario />
        </div>
    )
}

export default NuevoCliente