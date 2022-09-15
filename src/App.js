import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Tasks from "./tasks/tasks"
import AddTask from "./tasks/PostTask";
import DeleteTask from "./tasks/DeleteTask";
import EditTask from "./tasks/PutTask";
import Login from "./login/login"

function App() {
    return (
        <Router>
            <div className="menu">
                <nav>
                    <ul className="ul">
                        <li className="li">
                            <a href="/task">Home</a>
                        </li>
                        <li className="li">
                            <a href="/addTask">Add Task</a>
                        </li>
                        <li className="li">
                            <a href="/deleteTask">Delete Task</a>
                        </li>
                        <li className="li">
                            <a href="/editTask">Edit Task</a>
                        </li>
                        <li className="li">
                            <a href="/">Login</a>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/task">
                        <Tasks/>
                    </Route>
                    <Route path="/addTask">
                        <AddTask/>
                        <Tasks/>
                    </Route>
                    <Route path="/deleteTask">
                        <DeleteTask/>
                        <Tasks/>
                    </Route>
                    <Route path="/editTask">
                        <EditTask/>
                        <Tasks/>
                    </Route>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;