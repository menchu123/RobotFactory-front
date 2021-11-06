import "./App.css";
import Robot from "./components/Robot/Robot";

function App() {
  const robot = {
    características: {
      velocidad: 0,
      resistencia: 10,
      creación: "2021",
    },
    _id: "61855440a99aeba4d99148ef",
    nombre: "Jose Carlos",
    imagen: "https://cdn.kapwing.com/video_image-uBSRyuvqm.jpeg",
  };

  return (
    <div className="robot-app container">
      <ul className="list-unstyled row row-cols-md-3">
        <Robot robot={robot} />
      </ul>
    </div>
  );
}

export default App;
