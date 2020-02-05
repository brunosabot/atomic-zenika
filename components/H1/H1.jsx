import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { zenikaRed } from "../../lib/colors";

export default function H1({ children }) {
  const className = css`
    align-items: center;
    color: rgb(${zenikaRed});
    display: flex;
    font-size: 22px;
    font-weight: 400;
    justify-content: flex-start;
    margin: 0;
  `;

  return <h1 className={className}>{children}</h1>;
}

H1.propTypes = {
  children: PropTypes.node.isRequired
};
