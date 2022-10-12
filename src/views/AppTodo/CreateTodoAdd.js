import { useContext } from "react";
import { TodoContext } from "./useHook/useContext";
import { toast } from 'react-toastify';


function CreateTodoAdd(props) {
    const {
        useName,
        setUserName,
        todoList,
        setTodoList
    } = useContext(TodoContext);
    return (
        <div className="todo-add">
                <input 
                    type="text"
                    placeholder="UserName..."
                    value={useName}
                    onChange={(event) => {
                        setUserName(event.target.value);
                    }}
                />
                <button 
                    className="btn btn-add"
                    onClick={() => {
                        if (!useName) {
                            toast.error('Missing useName..!')
                            return;
                        }
                        const object = {
                            id:Math.floor(Math.random() * 1000),
                            useName:useName
                        };
                        console.log('>>>check object', object);
                        const copyTodoList = [...todoList];
                        copyTodoList.push(object);
                        setTodoList(copyTodoList);
                        setUserName('');
                        toast.success('wow add easy!')
                    }}
                >Add</button>
            </div>
    )
}

export default CreateTodoAdd;
