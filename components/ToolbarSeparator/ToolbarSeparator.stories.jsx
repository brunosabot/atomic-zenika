/* eslint-disable import/no-extraneous-dependencies */
import { text, boolean } from "@storybook/addon-knobs";
import React from "react";
import Component from "./ToolbarSeparator";
import Toolbar from "../Toolbar/Toolbar";

export default {
  component: Component,
  title: "Atomic Zenika|Toolbar/ToolbarSeparator",
  parameters: { jest: ["ToolbarSeparator.spec.jsx"] }
};

const toolbarSeparatorReverse = (current = false) =>
  boolean("Reverse", current);
const toolbarSeparatorChildren = (current = "Toolbar") =>
  text("Children", current);

export const Standard = () => (
  <Toolbar reverse={toolbarSeparatorReverse(false)}>
    <Component reverse={toolbarSeparatorReverse(false)}>
      {toolbarSeparatorChildren("Toolbar")}
    </Component>
  </Toolbar>
);

export const Reverse = () => (
  <Toolbar reverse={toolbarSeparatorReverse(true)}>
    <Component reverse={toolbarSeparatorReverse(true)}>
      {toolbarSeparatorChildren("Toolbar")}
    </Component>
  </Toolbar>
);
