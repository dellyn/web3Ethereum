import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
