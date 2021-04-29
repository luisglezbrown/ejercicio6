import React, { useState, useContext } from 'react';
import { GlobalContext } from "../App";

export default function NewToDoInput() {

  const {toDoList, setToDoList} = useContext(GlobalContext);

  const [title, setTitle] = useState('');

  const handleTitle = evento => setTitle(evento.target.value);

  function submit (evento) {
      evento.preventDefault();

      const newTask = {
        title: title, 
        completed: false
      }

      setToDoList([newTask, ...toDoList]);

      setTitle('');
  }

  return (
        <form onSubmit={submit}>
          <input  className='form-control my-4' 
                  type='text' 
                  onChange={handleTitle} 
                  placeholder='Introduce un nuevo To-do'
                  value ={title}>
          </input>
        </form>
    )
}
