function Interprete(props) {
    const { foto, nombre } = props;
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-80 m-4 overflow-hidden">
            <img
                src={foto}
                alt={`Foto de ${nombre}`}
                className="w-full h-80 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{nombre}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{props.children}</p>
            </div>
        </div>
    );
}

export default Interprete;