/* eslint-disable import/no-extraneous-dependencies */
import { text } from "@storybook/addon-knobs";
import React from "react";
import Component from "./Card";

export default {
  component: Component,
  title: "Atomic Zenika|Typography/Card",
  parameters: { jest: ["Card.spec.jsx"] }
};

const toolbarChildren = (current = "Card") => text("Children", current);

export const Standard = () => <Component>{toolbarChildren("Card")}</Component>;
