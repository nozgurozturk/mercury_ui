
import React from "react";
import { render } from "@testing-library/react";
import Number from "./Number";
import { NumberProps } from "./Number.types";
describe("Test Component", () => {
  let props: NumberProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Number {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Number");
    expect(component).toHaveTextContent("harvey was here");
  });
});

