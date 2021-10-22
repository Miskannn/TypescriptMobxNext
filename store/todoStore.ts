import {makeAutoObservable} from "mobx"
import { ITodo } from "../types/todoInterface"


class TodoStore{
  constructor(){
    makeAutoObservable(this)
  }
  todos: ITodo[] = [];
   async fetchTask(){
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(json => {
        this.todos = [...this.todos, ...json]
    })
  }

  addTask(todo: ITodo){
     this.todos.push(todo)
  }
  deleteTask(id: number){
     this.todos = this.todos.filter(todo => id !== todo.id)
  }
  completeTodo(id: number){
    this.todos = this.todos.map(todo => id === todo.id?{...todo,completed: !todo.completed}: todo)
  }
}

export default new TodoStore()