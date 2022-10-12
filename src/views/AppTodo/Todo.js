import './Todo.css';
import CreateTodoAdd from './CreateTodoAdd';
import CreateTodoContent from './CreateTodoContent';

function ToDo() {
    
    return(
        <div className="todo-container">
            <CreateTodoAdd />
            <CreateTodoContent />
        </div>
    )
}

export default ToDo;
