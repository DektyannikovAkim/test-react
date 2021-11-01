import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { TodoStoreContext } from '../store/todos';
import { Contextmenu } from './ContextMenu';
import { Loader } from './Loader';
import { TodoItem } from './TodoItem';

export const Todolist = observer(() => {
    const context = useContext(TodoStoreContext);
    useEffect(() => {
        context.getTodos();
    }, [context])

    console.log("render", context)
    if (!context.todos.length) return <Loader/>;

    return (
        <div>
            {context.openContextMenu ? <Contextmenu/> : null}
            {context.todos.map(todo =>
                <TodoItem todo = {todo} key={todo.id}/>
            )}
        </div>
    );
});

