import { Loading, Selimovic, Portfolio } from "./container";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Loading />
      <Selimovic />
      <Portfolio />
    </div>
  );
}

export default App;
