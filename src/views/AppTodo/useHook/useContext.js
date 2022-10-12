import { createContext } from "react";
import useTodo from "./useTodo";

export const TodoContext = createContext({
    useName: '',
    todoList: [],
    workingItem: {},
    setUserName: (data) => {},
    setTodoList: (data) => {},
    setWorkingItem: (data) => {},
    onEdit: (data) => {},
    onDelete: (data) => {}
});

function TodoContextProvider ({ children }) {
    const {
        useName,
        setUserName,
        todoList,
        setTodoList,
        workingItem,
        setWorkingItem,
        onEdit,
        onDelete
    } = useTodo();
    const value = {
        useName,
        setUserName,
        todoList,
        setTodoList,
        workingItem,
        setWorkingItem,
        onEdit,
        onDelete
    }
    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;
