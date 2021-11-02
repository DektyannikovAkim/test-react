import { InputArea } from "./components/InputArea";
import { Inputarea as  Inputarea2} from "./componentsInst/InputArea";
import { Todolist } from "./components/TodoList";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom" 
import { TodoStoreProvider } from "./store/todos";

function App() {
  console.log("App")
  return (
    <Router>
    <div className="parant">
      <h1>Parent</h1>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/next'>Next</Link>
          </li>
        </ul>
      </nav>
      <TodoStoreProvider>
      <Todolist/>
      </TodoStoreProvider>
     <hr />
        <Switch>
          <Route path="/home">
          
          <InputArea/>
          </Route>
          <Route path="/next">
          <Inputarea2/>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
