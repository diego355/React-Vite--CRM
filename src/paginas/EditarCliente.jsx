import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Formulario from '../components/Formulario'

const EditarCliente = ({}) => {

    const { id } = useParams()
    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect ( () => {
        setCargando(!cargando)
        const cargarCliente = async () => {
            try{
                const url = `${import.meta.env.VITE_API_URL}/${id}`
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
        <div>
            <h1 className="font-black text-4xl text-blue-900">Editar cliente...</h1>
            <p className="mt-3 ">Edite los datos para crear un nuevo cliente</p>
            
            {cliente?.nombre ? (
                <Formulario 
                    cliente={cliente}
                    cargando={cargando}
                />
            ) : (
                <p
                    className="uppercase font-bold text-xl1 text-bold text-center mt-20 mx-auto"
                >ID de Cliente no es válido</p>
            )}
        </div>
    )
}

export default EditarCliente