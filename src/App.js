import { Loading, Selimovic, Portfolio, Services, Contact } from "./container";
import NavBar from "./components/NavBar/NavBar";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Loading />
      <Selimovic />
      <Portfolio />
      <Services />
    </div>
  );
}

export default App;
