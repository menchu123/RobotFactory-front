import { render, screen } from "@testing-library/react";
import { getRandomRobots } from "../../factories/robotsFactory";
import RobotList from "./RobotList";

const robots = getRandomRobots();

describe("Given a RobotList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      render(<RobotList robots={robots} />);

      const robotList = screen.getByRole("list");

      expect(robotList).toBeInTheDocument();
    });
  });
});
