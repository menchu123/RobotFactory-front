import "./App.css";
import Robot from "./components/Robot/Robot";

function App() {
  return (
    <div className="robot-app container">
      <ul className="list-unstyled row row-cols-md-3">
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
      </ul>
    </div>
  );
}

export default App;
