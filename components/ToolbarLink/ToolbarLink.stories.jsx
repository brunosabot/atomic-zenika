/* eslint-disable import/no-extraneous-dependencies */
import { text, boolean } from "@storybook/addon-knobs";
import React from "react";
import Component from "./ToolbarLink";
import Toolbar from "../Toolbar/Toolbar";

export default {
  component: Component,
  title: "Atomic Zenika|Toolbar/ToolbarLink",
  parameters: { jest: ["ToolbarLink.spec.jsx"] }
};

const toolbarLinkReverse = (current = false) => boolean("Reverse", current);
const toolbarLinkChildren = (current = "ToolbarLink") =>
  text("Children", current);

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
  </svg>
);

export const Standard = () => (
  <Toolbar reverse={toolbarLinkReverse(false)}>
    <Component icon={<Icon />} reverse={toolbarLinkReverse(false)}>
      {toolbarLinkChildren("ToolbarLink")}
    </Component>
  </Toolbar>
);

export const Reverse = () => (
  <Toolbar reverse={toolbarLinkReverse(true)}>
    <Component icon={<Icon />} reverse={toolbarLinkReverse(true)}>
      {toolbarLinkChildren("ToolbarLink")}
    </Component>
  </Toolbar>
);
