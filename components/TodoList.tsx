import { observer } from 'mobx-react-lite'
import todo from "../store/todoStore"
import React,{useState} from 'react'
import styles from "../styles/TodoList.module.scss"


const Todo = observer(() => {
    const [disabled, setDisabled] = useState(false);
    return (
        <div className = {styles.Todo}>
            <button onClick = {() => {
                if(!disabled){
                 setDisabled(true)
                 return todo.fetchTask()}
                }}>
                 Fetch todo</button>
            {todo.todos.map(t => 
            <div className = {styles.cast} key = {t.id}>
               <input type = "checkbox" checked = {t.completed} onChange = {() => todo.completeTodo(t.id)}/>
               {t.id}. {t.title}
               <button style = {{color: 'red'}} onClick = {() => todo.deleteTask(t.id)}>X</button>
            </div>)}
        </div>
    )
})

export default Todo
