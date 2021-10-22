import React from 'react'
import { observer } from 'mobx-react-lite'
import TodoList from "../components/TodoList"

const Home = observer (() => {
    return (
        <div className = "app">
            <TodoList />
        </div>
    )
})

export default Home
