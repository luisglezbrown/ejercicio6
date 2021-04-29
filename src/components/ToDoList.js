import React, {useContext} from 'react'
import './ToDoList.css'
import { GlobalContext } from "../App";

export default function ToDoList() {

    const {toDoList, setToDoList} = useContext(GlobalContext);

    const completedToggle = (evento, index) => {
        if (evento.target.tagName !== 'BUTTON'){
        const newToDoList = [...toDoList];
        newToDoList[index].completed = !newToDoList[index].completed;

        setToDoList(newToDoList);}
    };

    const removeToDo = title => {
        return evento => {
        setToDoList(toDoList.filter(toDo => toDo.title !== title))}
    };

    return (
        <div>
            <ul class="list-group mb-5">
                {toDoList.map((toDo, index) => 
                    <li className={`list-group-item ${toDo.completed && 'list-group-item-secondary completed' }`}  key={index} onClick={evento => completedToggle(evento, index)}>
                        {index+1} - {toDo.title}
                        <button className='btn btn-danger float-right' onClick={removeToDo(toDo.title)}>X</button>
                    </li>                                  
                )}
            </ul>
        </div>
    )
};
