import { observer } from 'mobx-react-lite';
import {FC, useContext} from 'react';
import { TodoModel } from '../moduls/todo';
import { TodoStoreContext } from '../store/todos';

interface Props {
    todo: TodoModel
}

export const TodoItem: FC<Props> = observer((props: Props) => {
    const context = useContext(TodoStoreContext);
    
    return (      
            <div className="wrapper-for-todo">
                <div className="todoItem" onContextMenu={(e)=> context.showTodoContextMenu(e, props.todo)}>
                    <input type="checkbox" checked={props.todo.completed} onChange={() => context.completeTodo(props.todo)} />
                    <p className={props.todo.completed ? "complete" : ""}>{props.todo.title}</p>
                    <button onClick={() => context.removeTodo(props.todo.id)}>&#215;</button>
                </div>
            </div>       
    );
})

