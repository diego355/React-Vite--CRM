import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Spinner from '../components/Spinner'

const VerCliente = () => {

    const { id } = useParams()
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect ( () => {
        setCargando(!cargando)
        const cargarCliente = async () => {
            try{
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
                //console.log(resultado)
            }
            catch(error){
                console.log(error)
            }
            setCargando(false)
        }

        cargarCliente()
    },[])

    

    return(
        cargando ? <Spinner /> : Object.keys(cliente).length === 0 ? <p>No hay resultado...</p> : 
            (
                <>
                <h1 className="font-black text-4xl text-blue-900">Ver Cliente <strong>{cliente.nombre}</strong></h1>
                <p className="mt-3 ">Detalles del cliente</p>
                <div>
                    <p className='text-3xl mt-4 text-gray-500'>
                        <span className="text-gray-700 uppercase font-bold">Cliente:</span>
                        {cliente.nombre}
                    </p>

                    <p className='text-3xl mt-4 text-gray-500'>
                        <span className="text-gray-700 uppercase font-bold">Email:</span>
                        {cliente.email}
                    </p>

                    <p className='text-3xl mt-4 text-gray-500'>
                        <span className="text-gray-700 uppercase font-bold">Telefono:</span>
                        {cliente.telefono}
                    </p>

                    <p className='text-3xl mt-4 text-gray-500'>
                        <span className="text-gray-700 uppercase font-bold">Empresa:</span>
                        {cliente.empresa}
                    </p>

                    {cliente.notas && (
                        <p className='text-3xl mt-4 text-gray-500'>
                            <span className="text-gray-700 uppercase font-bold">Notas:</span>
                            {cliente.notas}
                        </p>
                    )}
                </div>
                </>
            )
        )
}

export default VerCliente