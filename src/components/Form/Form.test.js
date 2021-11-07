import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import configureStore from "../../redux/store/index";
import { Provider } from "react-redux";
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

describe("Given a Robot component", () => {
  describe("When the user hasn't typed a name", () => {
    test("Then it should have a disabled button", () => {
      const store = configureStore();
      const createRobot = jest.fn();
      render(
        <Provider store={store}>
          <Form createRobot={createRobot} />
        </Provider>
      );
      const addButton = screen.getByRole("button", {
        name: "Añadir",
      });

      expect(addButton).toBeDisabled();
    });
  });

  describe("When the user has only typed an image", () => {
    test("Then it should have a disabled button", () => {
      const store = configureStore();
      const createRobot = jest.fn();
      render(
        <Provider store={store}>
          <Form createRobot={createRobot} />
        </Provider>
      );

      const imageInput = screen.getByPlaceholderText("URL Imagen");
      const addButton = screen.getByRole("button", {
        name: "Añadir",
      });

      userEvent.type(imageInput, "test");

      expect(addButton).toBeDisabled();
    });
  });

  describe("When the user has only typed a creation date", () => {
    test("Then it should have a disabled button", () => {
      const store = configureStore();
      const createRobot = jest.fn();
      render(
        <Provider store={store}>
          <Form createRobot={createRobot} />
        </Provider>
      );

      const dateInput = screen.getByLabelText("Año");
      const addButton = screen.getByRole("button", {
        name: "Añadir",
      });

      userEvent.type(dateInput, "test");

      expect(addButton).toBeDisabled();
    });
  });

  describe.skip("When the user has typed all fields required", () => {
    test("Then the button should be clickable", () => {
      const store = configureStore();
      const createRobot = jest.fn();
      render(
        <Provider store={store}>
          <Form createRobot={createRobot} />
        </Provider>
      );

      const nameInput = screen.getByPlaceholderText("Nombre");
      const imageInput = screen.getByPlaceholderText("URL Imagen");
      const dateInput = screen.getByLabelText("Año");
      const addButton = screen.getByRole("button", {
        name: "Añadir",
      });

      userEvent.type(nameInput, "test");
      userEvent.type(imageInput, "test");
      userEvent.type(dateInput, "test");
      userEvent.click(addButton);

      expect(createRobot).toHaveBeenCalled();
    });
  });

  describe("When the user types on Nombre", () => {
    test("Then the value of nombre should be updated", () => {
      const store = configureStore();
      const createRobot = jest.fn();
      render(
        <Provider store={store}>
          <Form createRobot={createRobot} />
        </Provider>
      );

      const nameInput = screen.getByPlaceholderText("Nombre");

      userEvent.type(nameInput, "test");

      expect(nameInput).toHaveValue("test");
    });
  });

  describe("When the user types on URL Imagen", () => {
    test("Then the value of URL Imagen should be updated", () => {
      const store = configureStore();
      const createRobot = jest.fn();
      render(
        <Provider store={store}>
          <Form createRobot={createRobot} />
        </Provider>
      );

      const imagenInput = screen.getByPlaceholderText("URL Imagen");

      userEvent.type(imagenInput, "test");

      expect(imagenInput).toHaveValue("test");
    });
  });
});
