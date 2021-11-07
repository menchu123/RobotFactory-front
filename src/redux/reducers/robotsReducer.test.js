import { getRandomRobot, getRandomRobots } from "../../factories/robotsFactory";
import actionTypes from "../actions/actionTypes";
import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives an empty robots list and a load action with three robots", () => {
    test("Then it should return a new robot list with the three robots", () => {
      const initialRobots = [];
      const robotsList = getRandomRobots(3);
      const action = {
        type: actionTypes.loadRobots,
        robots: robotsList,
      };

      const newList = robotsReducer(initialRobots, action);

      expect(newList).toEqual(robotsList);
    });
  });

  describe("When it receives an empty robots list and an unknown action", () => {
    test("Then it should return the same empty robot list", () => {
      const initialRobots = [];

      const action = {};

      const newList = robotsReducer(initialRobots, action);

      expect(newList).toEqual(initialRobots);
    });
  });

  describe("When it receives a robot and a createRobot action", () => {
    test("Then it should return newRobots including the new robot", () => {
      const robotsList = getRandomRobots(4);
      const newRobot = getRandomRobot();

      const action = {
        type: actionTypes.createRobot,
        robot: newRobot,
      };
      const newRobots = robotsReducer(robotsList, action);

      expect(newRobots).toContain(newRobot);
    });
  });
});
