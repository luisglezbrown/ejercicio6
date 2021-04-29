import Agenda from '../components/Agenda'
import Formulario from '../components/Formulario'

function Ejercicio3() {

  return (
    <div>
      <Agenda/>
      <Formulario/> 
      {/* Para añadir el nuevo contacto debo hacerlo con setContactos, por eso lo paso como props */}
    </div>
  );
}

export default Ejercicio3;
