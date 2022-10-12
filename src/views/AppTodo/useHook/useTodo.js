import { useState } from "react";
import { toast } from "react-toastify";

function useTodo() {
    const [useName, setUserName] = useState('Pham van phong');

    const [todoList, setTodoList] = useState([]);
    const [workingItem, setWorkingItem] = useState({})

    const onDelete = (todo) => {
        console.log('>>>check delete todo', todo);
        const copyTodoList = [...todoList];
        const newTodoList = copyTodoList.filter(item => item.id !== todo.id);
        setTodoList(newTodoList);
        toast.success('wow delete easy!')
    }
    const onEdit = (todo) => {
        console.log('...check edit todo', todo);
        const isEmptry = Object.keys(workingItem).length === 0;
        if( isEmptry === false && workingItem.id === todo.id) {
            const copyTodoList = [...todoList];
            const IndexEditItem = copyTodoList.findIndex(item => item.id === todo.id);
            copyTodoList[IndexEditItem].useName = workingItem.useName
            setTodoList(copyTodoList);
            setWorkingItem({});
            toast.success('wow edit easy!')
            return;
        }
        setWorkingItem(todo);
        console.log(workingItem);
    }
    return {
        useName,
        setUserName,
        todoList,
        setTodoList,
        workingItem,
        setWorkingItem,
        onEdit,
        onDelete
    }
}

export default useTodo;
