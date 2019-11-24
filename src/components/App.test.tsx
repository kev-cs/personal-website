import App from "./App";
import { create } from "react-test-renderer";
import React from "react";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {

  it("renders correctly", () => {
    const element = create(<App/>);

    expect(element.toJSON()).toMatchSnapshot();
  });

});
