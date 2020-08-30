import React from 'react'
import TodoForm from '../containers/TodoForm'
import TodoList from '../containers/TodoList'


export default function TodoBox(props) {

    return (
        < div >
            <TodoList />
            <TodoForm />
        </div >
    )

}