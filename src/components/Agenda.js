import React from 'react';
import { useContext } from "react";
import { GlobalContext } from "../App";

export default function Agenda() {

    const {contactos, setContactos} = useContext(GlobalContext);

    function deleteContacto(evento) {
        setContactos(currentContactos => currentContactos.filter(contacto => contacto.telefono !== evento.target.id))
    }

    return (
        
        <div className="container mt-3">
            <h2 className='my-4'>Lista de Contactos</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
            
                {contactos.map(({nombre, apellidos, direccion, ciudad, cp, telefono}, index) => {
                    return   (
                    <ul className="list-group col mb-4" key={telefono}>
                        <li className="list-group-item active font-weight-bold" aria-current="true">Contacto {index}</li>
                        <li className="list-group-item">{nombre}</li>
                        <li className="list-group-item">{apellidos}</li>
                        <li className="list-group-item">{telefono}</li>
                        <li className="list-group-item">{direccion}, {cp}, {ciudad}</li>
                        <li className="list-group-item">
                            <button type="button" className="btn btn-warning" id={telefono} onClick={deleteContacto}>Eliminar</button>
                        </li>
                    </ul>)
                    })
                }
            
            </div>
        </div>
    )
}
