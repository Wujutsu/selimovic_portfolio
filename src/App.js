import { Loading } from "./container";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Loading />
    </div>
  );
}

export default App;
