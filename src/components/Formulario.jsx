
import { Formik, Form, Field } from 'formik'

const Formulario = ({}) => {
        
    return(
        <div className="bg-white rounded-md shadow-md md:w-3/4 mx-auto">
            <h1 className="text-gray-600 font-bold text-xl pt-10 uppercase text-center">Agregar cliente</h1>

            <Formik>
                <Form
                    className="mt-10"
                >
                    <div className="mb-4"> 
                        <label className="text-gray-800" htmlfor="nombre">Nombre: </label>
                        <Field 
                            id="nombre"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeHolder="Nombre del cliente"
                        />
                    </div>

                    <div className="mb-4"> 
                        <label className="text-gray-800" htmlfor="empresa">Empresa: </label>
                        <Field 
                            id="empresa"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeHolder="Nombre de la empresa"
                        />
                    </div>

                    <div className="mb-4"> 
                        <label className="text-gray-800" htmlfor="email">Email: </label>
                        <Field 
                            id="email"
                            type="email"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeHolder="Email"
                        />
                    </div>

                    <div className="mb-4"> 
                        <label className="text-gray-800" htmlfor="telefono">Teléfono: </label>
                        <Field 
                            id="telefono"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeHolder="Teléfono"
                        />
                    </div>

                    <div className="mb-4"> 
                        <label className="text-gray-800" htmlfor="notas">Notas sobre el cliente: </label>
                        <Field 
                            as="textarea"
                            id="notas"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50 h-40"
                            placeHolder="Notas sobre el cliente"
                        />
                    </div>

                    <input 
                        type="submit"
                        value="Agregar cliente"
                        className="mt-5  bg-blue-800 w-full rounded-lg p-3  uppercase font-bold text-lg"
                    />

                </Form>
            </Formik>
        </div>
    )
}

export default Formulario