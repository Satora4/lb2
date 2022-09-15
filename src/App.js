import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Tasks from "./tasks/tasks"
import AddTask from "./tasks/PostTask";
import DeleteTask from "./tasks/DeleteTask";
import EditTask from "./tasks/PutTask";

function App() {
    return (
        <Router>
            <div class="menu">
                <nav>
                    <ul class="ul">
                        <li class="li">
                            <a href="/">Home</a>
                        </li>
                        <li class="li">
                            <a href="/addTask">Add Task</a>
                        </li>
                        <li class="li">
                            <a href="/deleteTask">Delete Task</a>
                        </li>
                        <li class="li">
                            <a href="/editTask">Edit Task</a>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
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
                </Switch>
            </div>
        </Router>
    );
}

export default App;