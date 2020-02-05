/* eslint-disable import/no-extraneous-dependencies */
import { text } from "@storybook/addon-knobs";
import React from "react";
import Component from "./H1";

export default {
  component: Component,
  title: "Atomic Zenika|Typography/H1",
  parameters: { jest: ["H1.spec.jsx"] }
};

const toolbarChildren = (current = "H1") => text("Children", current);

export const Standard = () => <Component>{toolbarChildren("H1")}</Component>;
