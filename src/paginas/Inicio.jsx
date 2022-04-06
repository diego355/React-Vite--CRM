
import { useEffect, useState } from "react"
import Cliente from '../components/Cliente'

const Inicio = ({}) => {

    const [clientes, setClientes] = useState([])

    useEffect( () =>{
        const obtenerClientesAPI = async () => {
            try{
                const url = `${import.meta.env.VITE_API_URL}`
                const respuesta = await fetch(url) //GET no ocupa más parámetros o headers
                //console.log(respuesta)
                const resultado = await respuesta.json()
                //console.log(resultado)

                setClientes(resultado)
            }
            catch (e) {
                console.log(e)
            }
        }

        obtenerClientesAPI()
    },[])

    const handleEliminar = async id => {
        const confirmacion = confirm('Desea eliminar el usuario?')
        if(confirmacion){
            //console.log(`Eliminando el usuario ${id}`)
            try{
                const url = `${import.meta.env.VITE_API_URL}/${id}`
                const respuesta = await fetch(url, {
                    method: 'DELETE'
                })
                await respuesta.json() //no se usa para nada
                
                //location.reload() en lugar de recargar, mejor se limpia el state
                const clientesActualizado = clientes.filter(cliente => cliente.id !== id )
                setClientes(clientesActualizado)
            }
            catch(error){
                console.log(error)
            }
        }

    }

    return(
        <div>
            <h1 className="font-black text-4xl text-blue-900">Listado de Clientes</h1>
            <p className="mt-3 ">Administre los clientes</p>
            
            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead>
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <Cliente 
                            key={cliente.id}
                            cliente={cliente}
                            handleEliminar={handleEliminar}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Inicio