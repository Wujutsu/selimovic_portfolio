import { Loading, Selimovic } from "./container";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Loading />
      <Selimovic />
    </div>
  );
}

export default App;
