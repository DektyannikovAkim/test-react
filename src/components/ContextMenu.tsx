import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useRef } from "react";
import { TodoStoreContext } from "../store/todos";


export const Contextmenu: FC = observer(() => {
  const context = useContext(TodoStoreContext);

  const ref = useRef(null);

  useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (!e.composedPath().find(el=> el === ref.current)) {
        context.closeContextMenu();
      }
    };
    document.addEventListener("click", cb);
    return () => {
      document.removeEventListener("click", cb);
    };
  }, [context]);

  if (context.openContextMenu === undefined) return null;
  
  return (
    <div
      className="wrapper-for-contextMenu"
      style={{ ...context.contextMenuCoord }}
      ref={ref}
      >
      <div>
        <button onClick={ () => { if (context.openContextMenu) {context.removeTodo(context.openContextMenu.id)}}}>
          Remove todo item
        </button>
      </div>
      <div>
        {context.openContextMenu.completed ? <p>Completed</p> : <p>Not completed</p>}
      </div>
    </div>
  );

});
