import { server } from "./mocks/server";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show the names of the robots loaded", async () => {
      const store = configureStore();
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const text1 = await screen.findByText("Paul McCartney");
      await waitFor(() => {
        expect(text1).toBeInTheDocument();
      });
    });
  });
});
