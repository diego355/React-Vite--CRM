

const Mensaje = ({children}) => {

    return(
        <div className="text-center my-4 p-4 bg-red-400 text-white">
            <p className="uppercase">{children}</p>
        </div>
    )
}

export default Mensaje