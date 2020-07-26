import React from "react";
import { LineChart } from "./LineChart";
import configureMockStore from "redux-mock-store";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";

const mockStore = configureMockStore();
const store = mockStore({});

describe("LineChart component", () => {
  it("LineChart: matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <LineChart />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
