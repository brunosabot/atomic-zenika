import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

describe("Test Card Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should throw when not having attributes", () => {
    expect(() => {
      ReactDOM.render(<Card />, div);
    }).toThrow();
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<Card>Card</Card>, div);
  });

  it("Should render when having a child", () => {
    ReactDOM.render(<Card reverse>Card</Card>, div);
  });
});
