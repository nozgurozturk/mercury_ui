
import React from "react";
import { render } from "@testing-library/react";
import Modal from "./Modal";
import { ModalProps } from "./Modal.types";
describe("Test Component", () => {
  let props: ModalProps;
  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });
  const renderComponent = () => render(<Modal {...props} />);
  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();
    const component = getByTestId("Modal");
    expect(component).toHaveTextContent("harvey was here");
  });
});

