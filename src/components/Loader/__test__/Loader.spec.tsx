
import React from "react";
import { render } from "@testing-library/react";
import Loader from "./Loader";
import { LoaderProps } from "./Loader.types";
describe("Test Component", () => {
  let props: LoaderProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Loader {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Loader");
    expect(component).toHaveTextContent("harvey was here");
  });
});

