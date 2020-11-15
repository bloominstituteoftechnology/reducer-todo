import "./App.css";

import Form from "./components/Form";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <h2>A Todo List with redux</h2>
      <Form />

      <List />
    </div>
  );
}

export default App;
