import React from "react";
import ReactDOM from "react-dom";
import TextField from "./TextField";

describe("Test TextField Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should render", () => {
    ReactDOM.render(<TextField value="TextField" onChange={() => {}} />, div);
  });
});
