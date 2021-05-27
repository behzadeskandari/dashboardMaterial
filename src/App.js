import "./App.css";
import Sidebar, { PermanentDrawerLeft } from "./components/sidebar/Sidebar";
import Form from "./components/form/Form";
import CustomizedTables from "./components/table/Table";
function App() {
  return (
    <div className="App">
      <PermanentDrawerLeft />
      <Form />
      <CustomizedTables />
    </div>
  );
}

export default App;
