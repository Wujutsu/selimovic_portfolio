import { Loading, Selimovic, Portfolio, Services, Contact } from "./container";
import { NavBar, Footer } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Loading />
      <Selimovic />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
