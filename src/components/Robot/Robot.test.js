import { render, screen } from "@testing-library/react";
import Robot from "./Robot";
import ReactTestRenderer from "react-test-renderer";

describe("Given a Robot component", () => {
  describe("When it is passed a robot object with the name 'Rogelio'", () => {
    test("Then it should render a card with the robot's name", () => {
      const name = "Rogelio";
      const robot = {
        características: {
          velocidad: 0,
          resistencia: 10,
          creación: "2021",
        },
        _id: "61855440a99aeba4d99148ef",
        nombre: name,
        imagen: "https://cdn.kapwing.com/video_image-uBSRyuvqm.jpeg",
      };

      render(<Robot robot={robot} />);

      const robotName = screen.getByRole("heading");

      expect(robotName).toBeInTheDocument();
    });
  });
  describe("When it recives and object", () => {
    test("then it should render a card with the object info inside", () => {
      const robot = {
        características: {
          velocidad: 0,
          resistencia: 10,
          creación: "2021",
        },
        _id: "61855440a99aeba4d99148ef",
        nombre: "Rogelio",
        imagen: "https://cdn.kapwing.com/video_image-uBSRyuvqm.jpeg",
      };

      const robotCard = ReactTestRenderer.create(<Robot robot={robot} />);
      expect(robotCard.toJSON()).toMatchSnapshot();
    });
  });
});
