import { getRandomRobots } from "../../factories/robotsFactory";
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
});
