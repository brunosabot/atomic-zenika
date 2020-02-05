import React from "react";
import ReactDOM from "react-dom";
import H2 from "./H2";

describe("Test H2 Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should throw when not having attributes", () => {
    expect(() => {
      ReactDOM.render(<H2 />, div);
    }).toThrow();
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<H2>H2</H2>, div);
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<H2 reverse>H2</H2>, div);
  });
});
