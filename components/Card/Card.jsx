import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { white } from "../../lib/colors";

export default function Card({ children }) {
  const className = css`
    background: rgb(${white});
    border-radius: 4px;
    border: 1px solid #d0d0d0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 10px 0;
    max-width: 100%;
    padding: 24px;
    width: 500px;
  `;

  return <div className={className}>{children}</div>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired
};
