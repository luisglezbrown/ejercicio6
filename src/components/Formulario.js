import { useState, useContext } from 'react';
import { GlobalContext } from "../App";

export default function Formulario() {

    const {setContactos} = useContext(GlobalContext);

    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [direccion, setDireccion] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [cp, setCp] = useState('');
    const [telefono, setTelefono] = useState('');

    function handleNombre(evento) {
        setNombre(evento.target.value);
    };

    function handleApellidos(evento) {
        setApellidos(evento.target.value);
    };

    function handleDireccion(evento) {
        setDireccion(evento.target.value);
    };

    function handleCiudad(evento) {
        setCiudad(evento.target.value);
    };

    function handleCp(evento) {
        setCp(evento.target.value);
    };

    function handleTelefono(evento) {
        setTelefono(evento.target.value);
    };

    function submit(evento) {
        evento.preventDefault();
        
        // const newContact = {nombre, apellidos, direccion, ciudad, cp, telefono}
        // Esta forma se puede utilizar cuando el nombre de la propiedad coincide con una variable.

        const newContacto = {
            nombre: nombre, 
            apellidos: apellidos, 
            direccion: direccion, 
            ciudad: ciudad, 
            cp: cp, 
            telefono: telefono
        }

        // setContactos([...contactos, newContacto]) -> Necesitaría recibir "contactos" desde App.
        // Enviando a setContactos una función como argumento, te envía el estado actual!!
        setContactos(contactos => [...contactos, newContacto]);
        
        // evento.target.reset() -> Solo vacía el form aparentemente, pero no cambia el value
        // Si le dos dos veces al boton, me lo va a rellenar.

        setNombre('');
        setApellidos('');
        setDireccion('');
        setCiudad('');
        setCp('');
        setTelefono('');

    }


    return (
        <div className="container mt-3">
            <h2 className='my-4'>Nuevo contacto</h2>
            <form onSubmit={submit}>
                <input type="text" className="form-control my-3" value={nombre} onChange={handleNombre} placeholder="Introduce un nombre" />
                <input type="text" className="form-control my-3" value={apellidos} onChange={handleApellidos} placeholder="Introduce los apellidos" />
                <input type="text" className="form-control my-3" value={direccion} onChange={handleDireccion} placeholder="Introduce la dirección" />
                <input type="text" className="form-control my-3" value={ciudad} onChange={handleCiudad} placeholder="Introduce la provincia" />
                <input type="text" className="form-control my-3" value={cp} onChange={handleCp} placeholder="Introduce el código postal" />
                <input type="text" className="form-control my-3" value={telefono} onChange={handleTelefono} placeholder="Introduce el número de teléfono" />
                <button type="submit" className="btn btn-success float-right px-5">Registrar</button>
            </form>
        </div>
    )
}
