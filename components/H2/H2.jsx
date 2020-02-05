import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";

export default function H2({ children }) {
  const className = css`
    align-items: center;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    font-size: 22px;
    font-weight: 300;
    justify-content: flex-start;
    margin: 0;
  `;

  return <h2 className={className}>{children}</h2>;
}

H2.propTypes = {
  children: PropTypes.node.isRequired
};
