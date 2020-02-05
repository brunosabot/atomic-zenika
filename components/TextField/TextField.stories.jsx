/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { number } from "@storybook/addon-knobs";
import Component from "./TextField";

export default {
  component: Component,
  title: "Atomic Zenika|Form/TextField",
  parameters: { jest: ["TextField.spec.jsx"] }
};

const textFieldRows = (current = 3) => number("Rows", current);

export const Standard = () => (
  <Component value="TextField" rows={textFieldRows()} />
);
