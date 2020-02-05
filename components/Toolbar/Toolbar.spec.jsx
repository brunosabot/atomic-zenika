import React from "react";
import ReactDOM from "react-dom";
import Toolbar from "./Toolbar";

describe("Test Toolbar Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should throw when not having attributes", () => {
    expect(() => {
      ReactDOM.render(<Toolbar />, div);
    }).toThrow();
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<Toolbar>Toolbar</Toolbar>, div);
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<Toolbar reverse>Toolbar</Toolbar>, div);
  });
});
