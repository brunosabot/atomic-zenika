import React from "react";
import ReactDOM from "react-dom";
import H1 from "./H1";

describe("Test H1 Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should throw when not having attributes", () => {
    expect(() => {
      ReactDOM.render(<H1 />, div);
    }).toThrow();
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<H1>H1</H1>, div);
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<H1 reverse>H1</H1>, div);
  });
});
