import React from "react";
import ReactDOM from "react-dom";
import ToolbarSeparator from "./ToolbarSeparator";

describe("Test ToolbarSeparator Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<ToolbarSeparator />, div);
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<ToolbarSeparator reverse />, div);
  });
});
