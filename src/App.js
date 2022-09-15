import './App.css';
import Tasks from "./tasks/tasks"
import PostTask from "./tasks/PostTask";
import DeleteTask from "./tasks/DeleteTask";
import PutTask from "./tasks/PutTask";

function App() {
    return (
        <div>
            <Tasks></Tasks>
            <hr></hr>
            <PostTask></PostTask>
            <DeleteTask></DeleteTask>
            <PutTask></PutTask>
        </div>
    );
}

export default App;