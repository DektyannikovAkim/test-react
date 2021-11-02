import { observer } from "mobx-react-lite";
import React, { FC, useContext, useRef } from "react";
import { TodoModel } from "../moduls/todo";
import { TodoStoreContext } from "../store/todos";

interface Props {
  todo: TodoModel;
}

export const TodoItem: FC<Props> = observer((props: Props) => {
  const context = useContext(TodoStoreContext);
  const itemTodo = useRef<HTMLDivElement>(null);
  const cb = (e: React.MouseEvent) => {
    const el = itemTodo.current;
    if (e.target === el) {
    if (el) {
      el.style.position = "absolute";
      const startCoordX = el.getBoundingClientRect().x;
      const startCoordY = el.getBoundingClientRect().y;
      const changeX = e.pageX;
      const changeY = e.pageY;

      const moving = (e: MouseEvent) => {
        let left = changeX - e.pageX;
        let top = changeY - e.pageY;
        el.style.top = `${startCoordY - top}px`;
        el.style.left = `${startCoordX - left}px`;
      };
      window.addEventListener("mousemove", moving);
      return window.addEventListener("mouseup", () => {
        el.style.position = "";
        el.style.top = "";
        el.style.left = "";
        window.removeEventListener("mousemove", moving);
      });
    }
  }
  };

  return (
    <div className="wrapper-for-todo" >
      <div
        className="todoItem"
        onContextMenu={(e) => context.showTodoContextMenu(e, props.todo)}
        onMouseDown={cb} ref={itemTodo}
      >
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={() => context.completeTodo(props.todo)}
        />
        <p className={props.todo.completed ? "complete" : ""}>
          {props.todo.title}
        </p>
        <button onClick={() => context.removeTodo(props.todo.id)}>
          &#215;
        </button>
      </div>
    </div>
  );
});
