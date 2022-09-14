import './App.css';
import PersonListGet from "./personList/PersonListGet";
import PersonListPost from "./personList/PersonListPost";
import PersonListDelete from "./personList/PersonListDelete";
import PersonListPut from "./personList/PersonListPut";

function App() {
  return (
      <div>
          <PersonListGet></PersonListGet>
          <PersonListPost></PersonListPost>
          <PersonListDelete></PersonListDelete>
          <PersonListPut></PersonListPut>
      </div>
  );
}

export default App;