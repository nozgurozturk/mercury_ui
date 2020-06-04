
import React from "react";
import { render } from "@testing-library/react";
import TextInput from "./TextInput";
import { TextInputProps } from "./TextInput.types";
describe("Test Component", () => {
  let props: TextInputProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<TextInput {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("TextInput");
    expect(component).toHaveTextContent("harvey was here");
  });
});

