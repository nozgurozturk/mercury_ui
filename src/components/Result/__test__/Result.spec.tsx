
import React from "react";
import { render } from "@testing-library/react";
import Result from "./Result";
import { ResultProps } from "./Result.types";
describe("Test Component", () => {
  let props: ResultProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Result {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Result");
    expect(component).toHaveTextContent("harvey was here");
  });
});

