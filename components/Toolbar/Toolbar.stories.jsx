/* eslint-disable import/no-extraneous-dependencies */
import { text, boolean } from "@storybook/addon-knobs";
import React from "react";
import Component from "./Toolbar";

export default {
  component: Component,
  title: "Atomic Zenika|Toolbar/Toolbar",
  parameters: { jest: ["Toolbar.spec.jsx"] }
};

const toolbarReverse = (current = false) => boolean("Reverse", current);
const toolbarChildren = (current = "Toolbar") => text("Children", current);

export const Standard = () => (
  <Component reverse={toolbarReverse(false)}>
    {toolbarChildren("Toolbar")}
  </Component>
);

export const Reverse = () => (
  <Component reverse={toolbarReverse(true)}>
    {toolbarChildren("Toolbar")}
  </Component>
);
