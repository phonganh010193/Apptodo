import { useContext } from "react";
import { TodoContext } from "./useHook/useContext";

function CreateTodoContent() {
    const {
        todoList,
        workingItem,
        setWorkingItem,
        onEdit,
        onDelete
    } = useContext(TodoContext);
    const isEmptry = Object.keys(workingItem).length === 0
    console.log('>>>check isemptry', isEmptry);
    return (
        <div className="todo-content">
                {todoList.map((item, index) => {
                    return (
                        <div className="todo-children children-first" key={item.id}>
                            {isEmptry === true ?
                                <span className="children-text">{index + 1} - {item.useName}</span>
                            :
                                <div>
                                    {isEmptry === false && item.id === workingItem.id ?
                                        <span>{index + 1} - <input type="text" value={workingItem.useName}
                                            onChange={(event) => {
                                                const newWorkingItem = {
                                                    ...workingItem,
                                                    useName:event.target.value
                                                }
                                                setWorkingItem(newWorkingItem);
                                            }}/>
                                        </span>
                                    :
                                        <div>
                                            <span className="children-text">{index + 1} - {item.useName}</span>
                                        </div>
                                    }
                                </div>
                            }
                            <div className="btn btn-all">
                                <button className="btn btn-edit"
                                    onClick={() => onEdit(item)}
                                >{isEmptry === false && item.id === workingItem.id ? "Save" : "Edit"}</button>
                                <button className="btn btn-delete"
                                    onClick={() => onDelete(item)}
                                >Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default CreateTodoContent;
