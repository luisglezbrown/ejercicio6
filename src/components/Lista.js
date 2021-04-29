export default function Lista(props) {
    console.log(typeof props.productos, props.productos);
    return (
        <div className='container'>
            <h3 className='text-center mb-3'>{props.categoria}</h3>        
            <ul className="list-group mx-auto mb-4"> 
                {props.productos.map( producto =>
                    <li className="list-group-item" key={producto.id}>
                        Producto: {producto.producto}, 
                        Marca: {producto.marca}
                        {producto.modelo ? ', Modelo: ' + producto.modelo : ''},
                        Precio: {producto.precio} €
                    </li>
                )}
            </ul> 
        </div>
    )
}
