
import React from "react";
import { render } from "@testing-library/react";
import Tab from "./Tab";
import { TabProps } from "./Tab.types";
describe("Test Component", () => {
  let props: TabProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Tab {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Tab");
    expect(component).toHaveTextContent("harvey was here");
  });
});

