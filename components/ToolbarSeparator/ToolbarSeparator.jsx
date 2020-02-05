import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { white, zenikaRed } from "../../lib/colors";

export default function ToolbarSeparator({ reverse = false }) {
  const className = css`
    background-color: rgba(${reverse ? white : zenikaRed}, 0.15);
    height: 24px;
    margin: 10px 8px;
    width: 1px;
  `;

  return <div className={className} />;
}

ToolbarSeparator.defaultProps = {
  reverse: false
};

ToolbarSeparator.propTypes = {
  reverse: PropTypes.bool
};
