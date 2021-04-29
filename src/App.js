import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { createContext, useState, useEffect } from "react";

import Index from './pages/Index';
import Ejercicio1 from './pages/Ejercicio1';
import Ejercicio2 from './pages/Ejercicio2';
import Ejercicio3 from './pages/Ejercicio3';
import Ejercicio4 from './pages/Ejercicio4';

import Error from './pages/Error';
import './App.css';

export const GlobalContext = createContext();

function App() {

  const initialContactsState = [
    {nombre: 'David', apellidos: 'García Merino', direccion: 'Alcalá, 236', ciudad: 'Madrid', cp: 28028, telefono: '600696969'},
    {nombre: 'Jesús', apellidos: 'Contreras Raboso', direccion: 'Virgen del Coro, 16', ciudad: 'Madrid', cp: 28028, telefono: '654321987'},
    {nombre: 'Carlos', apellidos: 'Llorente Alonso', direccion: 'Agustín Durán, 28', ciudad: 'Madrid', cp: 28028, telefono: '698745321'},
  ];
  const [contactos, setContactos] = useState(initialContactsState);

  const API = 'https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json';
  const [toDoList, setToDoList] = useState([]);
  useEffect(()=>{
      fetch(API)
      .then(response => response.json())
      .then(data => setToDoList(data.slice(0, 20)));
  }, []);


  return (
    <div className='App'>
      <BrowserRouter>

        <nav className="navbar navbar-dark bg-dark nav-fill">
          {/* <NavLink to='/'>Ir a inicio</NavLink> */}
          <NavLink to='/ejercicio1' className="nav-item nav-link" activeClassName="selected">Ejercicio 1</NavLink>
          <NavLink to='/ejercicio2'className="nav-item nav-link" activeClassName="selected">Ejercicio 2</NavLink>
          <NavLink to='/ejercicio3'className="nav-item nav-link" activeClassName="selected">Ejercicio 3</NavLink>
          <NavLink to='/ejercicio4'className="nav-item nav-link" activeClassName="selected">Ejercicio 4</NavLink>
        </nav>

        <GlobalContext.Provider value={{contactos, setContactos, toDoList, setToDoList}}>
          <Switch>
              <Route exact path='/' component={Index}/>
              <Route path='/ejercicio1' component={Ejercicio1}/>
              <Route path='/ejercicio2' component={Ejercicio2}/>
              <Route path='/ejercicio3' component={Ejercicio3}/>
              <Route path='/ejercicio4' component={Ejercicio4}/>

              <Route component={Error}/>
          </Switch>
        </GlobalContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
