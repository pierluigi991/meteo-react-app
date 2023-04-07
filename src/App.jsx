import "./App.css";
import { Row } from "react-bootstrap";
import MyNav from "./components/MyNav";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Row>
        <MyNav />
        <Search />
      </Row>
    </div>
  );
}

export default App;
