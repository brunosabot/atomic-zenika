import React from "react";
import ReactDOM from "react-dom";
import InputField from "./InputField";

describe("Test InputField Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should render", () => {
    ReactDOM.render(<InputField value="InputField" onChange={() => {}} />, div);
  });
});
