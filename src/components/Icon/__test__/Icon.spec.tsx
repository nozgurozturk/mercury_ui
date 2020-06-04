
import React from "react";
import { render } from "@testing-library/react";
import Icon from "./Icon";
import { IconProps } from "./Icon.types";
describe("Test Component", () => {
  let props: IconProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Icon {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Icon");
    expect(component).toHaveTextContent("harvey was here");
  });
});

