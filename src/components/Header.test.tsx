import React from "react";
import Header from "./Header";
import renderer from "react-test-renderer";

import { IntlProvider } from "react-intl";

describe("Header", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <IntlProvider locale="en">{<Header/>}</IntlProvider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
