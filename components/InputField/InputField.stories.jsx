/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import Component from "./InputField";

export default {
  component: Component,
  title: "Atomic Zenika|Form/InputField",
  parameters: { jest: ["InputField.spec.jsx"] }
};

export const Standard = () => <Component value="InputField" />;
