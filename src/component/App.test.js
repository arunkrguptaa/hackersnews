import React from "react";
import { App } from "./App";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("App component", () => {
  it("App: matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
