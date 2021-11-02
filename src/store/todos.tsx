import { makeAutoObservable } from "mobx";
import { createContext, FC } from "react";
import { TodoModel } from "../moduls/todo";

interface ItemCoordModel {
  top: string,
  left: string
}
export class Todo {
  todos: TodoModel[] = [];

  contextMenuCoord: ItemCoordModel = {
    top: '',
    left: '',
  };

  selectedTodo: Element | undefined = undefined;

  openContextMenu: TodoModel | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  completeTodo(todo: TodoModel) {
    todo.completed = !todo.completed;
  }

  removeTodo(id: TodoModel["id"]) {
    this.todos = this.todos.filter((el) => el.id !== id);
    this.closeContextMenu();
  }

  closeContextMenu() {
    this.openContextMenu = undefined;
  }

  changeMenuCoordinates(left: number, top: number) {
    this.contextMenuCoord.left = `${left}px`;
    this.contextMenuCoord.top = `${top}px`;
  }

  showTodoContextMenu(e: React.MouseEvent, todo: TodoModel) {
    e.preventDefault();
    this.openContextMenu = todo;
    this.changeMenuCoordinates(e.pageX, e.pageY);
  }

  getTodos() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        // for (let i = 0; i < 5; i++ ) {
        //     this.todos.push(json[i])
        // }
        this.todos = json.slice(0, 2);
      });
  }
}

export const TodoStoreContext = createContext({} as Todo);

export const TodoStoreProvider: FC = (props) => {
  const store = new Todo();
  return (
    <TodoStoreContext.Provider value={store}>
      {props.children}
    </TodoStoreContext.Provider>
  );
};
