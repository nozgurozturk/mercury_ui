
import React from "react";
import { render } from "@testing-library/react";
import Drawer from "./Drawer";
import { DrawerProps } from "./Drawer.types";
describe("Test Component", () => {
  let props: DrawerProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Drawer {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Drawer");
    expect(component).toHaveTextContent("harvey was here");
  });
});

