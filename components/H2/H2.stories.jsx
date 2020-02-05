/* eslint-disable import/no-extraneous-dependencies */
import { text } from "@storybook/addon-knobs";
import React from "react";
import Component from "./H2";

export default {
  component: Component,
  title: "Atomic Zenika|Typography/H2",
  parameters: { jest: ["H2.spec.jsx"] }
};

const toolbarChildren = (current = "H2") => text("Children", current);

export const Standard = () => <Component>{toolbarChildren("H2")}</Component>;
