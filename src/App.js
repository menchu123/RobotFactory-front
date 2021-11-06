import "./App.css";
import Robot from "./components/Robot/Robot";
import RobotList from "./components/RobotList/RobotList";

function App() {
  const robots = [
    {
      características: {
        velocidad: 0,
        resistencia: 10,
        creación: "2021",
      },
      _id: "61855440a99aeba4d99148ef",
      nombre: "Jose Carlos",
      imagen: "https://cdn.kapwing.com/video_image-uBSRyuvqm.jpeg",
    },
    {
      características: {
        velocidad: 0,
        resistencia: 10,
        creación: "2021",
      },
      _id: "61855440a99aeba4d99148ef",
      nombre: "Rogelio",
      imagen:
        "https://www.roboticmarketer.com/wp-content/uploads/2018/09/steve-johnson-1226392-unsplash-1170x613.jpg",
    },
    {
      características: {
        velocidad: 0,
        resistencia: 10,
        creación: "2021",
      },
      _id: "61855440a99aeba4d99148ef",
      nombre: "Jose Carlos",
      imagen: "https://cdn.kapwing.com/video_image-uBSRyuvqm.jpeg",
    },
    {
      características: {
        velocidad: 0,
        resistencia: 10,
        creación: "2021",
      },
      _id: "61855440a99aeba4d99148ef",
      nombre: "Rogelio",
      imagen:
        "https://www.roboticmarketer.com/wp-content/uploads/2018/09/steve-johnson-1226392-unsplash-1170x613.jpg",
    },
    {
      características: {
        velocidad: 0,
        resistencia: 10,
        creación: "2021",
      },
      _id: "61855440a99aeba4d99148ef",
      nombre: "Jose Carlos",
      imagen: "https://cdn.kapwing.com/video_image-uBSRyuvqm.jpeg",
    },
    {
      características: {
        velocidad: 0,
        resistencia: 10,
        creación: "2021",
      },
      _id: "61855440a99aeba4d99148ef",
      nombre: "Rogelio",
      imagen:
        "https://www.roboticmarketer.com/wp-content/uploads/2018/09/steve-johnson-1226392-unsplash-1170x613.jpg",
    },
  ];

  return (
    <div className="robot-app container">
      <RobotList robots={robots} />
    </div>
  );
}

export default App;
