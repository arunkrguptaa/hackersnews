import React from "react";
import Articles from "./Articles";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("Articles component", () => {
  it("Articles: matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Articles />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
