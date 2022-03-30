
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Mensaje from './Mensaje'

const Formulario = ({}) => {

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El nombre del usuario es requerido')
            .min(4, 'EL nombre del usuario es muy corto')
            .max(20, 'El nombre del usuario es muy largo'),

        empresa: Yup.string()
            .required('El nombre de la empresa es requerido'),
        email: Yup.string()
            .required('El email es requerido')
            .email('Formato correo no válido'),
        telefono: Yup.number()
        .typeError('No es un formato de teléfono válido')
            .required('El teléfono es obligatorio')
            .integer('No es un formato de teléfono válido')
            .positive('No es un formato de teléfono válido'),
        notas: ''
    })
    
    const handleSubmit = ( values ) => {
        console.log(values)
    }

        
    return(
        <div className="bg-white rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl pt-10 uppercase text-center">Agregar cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: ''
                }}
                onSubmit={ ( valuesasd )=>{
                    handleSubmit(valuesasd )
                }}
                validationSchema={ nuevoClienteSchema }
            >   
                { ( {errors, touched} ) => {
                    
                    //console.log(data)

                    return (
                    <Form
                        className="mt-10"
                    >
                        <div className="mb-4"> 
                            <label className="text-gray-800" htmlFor="nombre">Nombre: </label>
                            <Field 
                                id="nombre"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Nombre del cliente"
                                name="nombre"
                            />
                            {
                                //<ErrorMessage name="nombre"/> No toma en cuenta estilos
                                errors.nombre && touched.nombre ? ( <Mensaje>{errors.nombre}</Mensaje> ) : ''
                            }
                        </div>

                        <div className="mb-4"> 
                            <label className="text-gray-800" htmlFor="empresa">Empresa: </label>
                            <Field 
                                id="empresa"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Nombre de la empresa"
                                name="empresa"
                            />
                            {
                                errors.empresa && touched.empresa ? ( <Mensaje>{errors.empresa}</Mensaje> ) : ''
                            }
                        </div>

                        <div className="mb-4"> 
                            <label className="text-gray-800" htmlFor="email">Email: </label>
                            <Field 
                                id="email"
                                type="email"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Email"
                                name="email"
                            />
                            {
                                errors.email && touched.email ? ( <Mensaje>{errors.email}</Mensaje> ) : ''
                            }
                        </div>

                        <div className="mb-4"> 
                            <label className="text-gray-800" htmlFor="telefono">Teléfono: </label>
                            <Field 
                                id="telefono"
                                type="tel"
                                className="mt-2 block w-full p-3 bg-gray-50"
                                placeholder="Teléfono"
                                name="telefono"
                            />
                            {
                                errors.telefono && touched.telefono ? ( <Mensaje>{errors.telefono}</Mensaje> ) : ''
                            }
                        </div>

                        <div className="mb-4"> 
                            <label className="text-gray-800" htmlFor="notas">Notas sobre el cliente: </label>
                            <Field 
                                as="textarea"
                                id="notas"
                                type="text"
                                className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                placeholder="Notas sobre el cliente"
                                name="notas"
                            />
                        </div>

                        <input 
                            type="submit"
                            value="Agregar cliente"
                            className="mt-5  bg-blue-800 w-full rounded-lg p-3  uppercase font-bold text-lg"
                        />

                    </Form>
                )}}
            </Formik>
        </div>
    )
}

export default Formulario