import React from "react";
import ReactDOM from "react-dom";
import ToolbarLink from "./ToolbarLink";

describe("Test ToolbarLink Component", () => {
  let div;

  beforeEach(() => {
    div = document.createElement("div");
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should throw when not having attributes", () => {
    expect(() => {
      ReactDOM.render(<ToolbarLink />, div);
    }).toThrow();
  });

  it("Should throw when having only children attributes", () => {
    expect(() => {
      ReactDOM.render(<ToolbarLink>ToolbarLink</ToolbarLink>, div);
    }).toThrow();
  });

  xit("Should throw when not having only icon attributes", () => {
    expect(() => {
      ReactDOM.render(<ToolbarLink icon={<svg />} />, div);
    }).toThrow();
  });

  it("Should render when having a child ", () => {
    ReactDOM.render(<ToolbarLink icon={<svg />}>ToolbarLink</ToolbarLink>, div);
  });

  it("Should render when having a child ", () => {
    ReactDOM.render(
      <ToolbarLink icon={<svg />} reverse>
        ToolbarLink
      </ToolbarLink>,
      div
    );
  });
});
