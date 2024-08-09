import { createContext, useContext } from "react";

const initialState = {
    todos: [
        {id: 1, todo: "todo msg", completed: false,},
        {id: 2, todo: "todo msg", completed: false,}
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
}

export const TodoContext = createContext(initialState)

export const TodoProvider = TodoContext.Provider

export const useTodo = () => {
    return useContext(TodoContext)
}