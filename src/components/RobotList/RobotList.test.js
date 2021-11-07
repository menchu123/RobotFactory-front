import { render, screen, waitFor } from "@testing-library/react";
import { getRandomRobots } from "../../factories/robotsFactory";
import RobotList from "./RobotList";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const robots = getRandomRobots();

describe("Given a RobotList component", () => {
  describe("When it is called", () => {
    test("Then it should render a list", () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <RobotList robots={robots} />
        </Provider>
      );

      const robotList = screen.getByRole("list");

      expect(robotList).toBeInTheDocument();
    });
  });

  describe("When the user types robot information and clicks on submit", () => {
    test("Then the new robot should be rendered", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <RobotList />
        </Provider>
      );
      const nameInput = screen.getByPlaceholderText("Nombre");
      const imageInput = screen.getByPlaceholderText("URL Imagen");
      const dateInput = screen.getByLabelText("Año");
      const velocidadInput = screen.getByLabelText("Velocidad");
      const resistenciaInput = screen.getByLabelText("Resistencia");

      userEvent.type(nameInput, "Rosi");
      userEvent.type(imageInput, "test");
      userEvent.type(dateInput, "0");
      userEvent.selectOptions(velocidadInput, "0");
      userEvent.selectOptions(resistenciaInput, "0");

      const addButton = screen.getByRole("button");
      userEvent.click(addButton);

      await waitFor(() => {
        const text = screen.queryByText("Rosi");
        expect(text).toBeInTheDocument();
      });
    });
  });
});
