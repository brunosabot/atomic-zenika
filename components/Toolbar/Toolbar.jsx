import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { white, zenikaRed } from "../../lib/colors";

export default function Toolbar({ children, reverse = false }) {
  const className = css`
    align-items: center;
    background-color: rgb(${reverse ? zenikaRed : white});
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    color: rgb(${reverse ? white : zenikaRed});
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 auto;
    height: 60px;
    justify-content: space-between;
    left: 0;
    padding: 8px;
    position: fixed;
    width: 100%;
    z-index: 10;
  `;

  return <div className={className}>{children}</div>;
}

Toolbar.defaultProps = {
  reverse: false
};

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool
};
