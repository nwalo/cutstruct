import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {
        //<Login />
        //<br />
        //<Register />
      }
    </div>
  );
}

export default App;
