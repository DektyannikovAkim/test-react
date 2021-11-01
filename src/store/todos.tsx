import { makeAutoObservable } from 'mobx'
import { createContext, FC } from 'react';
import { TodoModel } from '../moduls/todo';


export class Todo {
    todos: TodoModel[] = [];
    contextMenuCoord = {
        top: '',
        left: ''
    };

    openContextMenu: TodoModel | undefined = undefined;

    constructor() {
        makeAutoObservable(this)
    }

    completeTodo(todo: TodoModel) {
        todo.completed = !todo.completed
    }

    removeTodo(id: TodoModel['id']) {
        this.todos = this.todos.filter(el => el.id !== id);
    }

    closeContextMenu() {
        this.openContextMenu = undefined;
    }

    showTodoContextMenu(e: React.MouseEvent, todo: TodoModel) {
        e.preventDefault();
        this.openContextMenu = todo;
        this.contextMenuCoord.left = `${e.pageX}px`;
        this.contextMenuCoord.top = `${e.pageY}px`;
    }

    getTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                // for (let i = 0; i < 5; i++ ) {
                //     this.todos.push(json[i])
                // }
                this.todos = json;
            })
    }

}

export const TodoStoreContext = createContext({} as Todo);

export const TodoStoreProvider: FC = (props) => {
    const store = new Todo();
    console.log(props);
    return (
        <TodoStoreContext.Provider value={store}>
            {props.children}
        </TodoStoreContext.Provider>
    )
}