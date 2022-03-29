

const Mensaje = ({children}) => {

    return(
        <div className="p-5 bg-red-400">
            <p className="text-xl">{children}</p>
        </div>
    )
}

export default Mensaje