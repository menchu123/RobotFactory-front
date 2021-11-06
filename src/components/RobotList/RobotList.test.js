import { render, screen } from "@testing-library/react";
import RobotList from "./RobotList";

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

describe("Given a RobotList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      render(<RobotList robots={robots} />);

      const robotList = screen.getByRole("list");

      expect(robotList).toBeInTheDocument();
    });
  });
});
