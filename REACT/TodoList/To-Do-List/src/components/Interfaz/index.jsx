import { useState } from 'react'
import './Interfaz.css'

export function Interface () {
    // Funcion para agregar la tarea
    const task_item = 
    const [task,setTask] = useState("")


 return (
    <div className="container">
        <div className="input">
            <label htmlFor="">Ingresa tu tarea aqui</label>
            <input value={task} type="text" />
            <button>Add</button>
        </div>
        <div className="tasks">
            <div className="single-task">
                <h3>Task 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat earum cumque iusto alias, suscipit ex itaque repudiandae minima id ab quo distinctio minus. Sint nihil, rerum possimus numquam at sed.</p>
            </div>
            <div className="single-task">
                <h3>Task 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat earum cumque iusto alias, suscipit ex itaque repudiandae minima id ab quo distinctio minus. Sint nihil, rerum possimus numquam at sed.</p>
            </div>
        </div>
    </div>
 )
}