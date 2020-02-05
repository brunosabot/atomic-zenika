import { css } from "emotion";
import PropTypes from "prop-types";
import React from "react";
import { white, zenikaRed } from "../../lib/colors";

export default function ToolbarLink({ children, icon, reverse = false }) {
  const className = css`
    align-items: center;
    background: transparent;
    border-radius: 4px;
    border: 0;
    color: inherit;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: 1rem;
    height: 44px;
    margin: 0 2px;
    outline: 0;
    padding: 0 16px;
    text-decoration: none;
    transition: background-color 0.3s cubic-bezier(0, 0, 0.2, 1);

    &:hover {
      background-color: rgba(${reverse ? white : zenikaRed}, 0.15);
    }

    & > svg {
      fill: rgb(${reverse ? white : zenikaRed});
      font-size: 20px;
      height: 20px;
      line-height: 20px;
      margin-right: 8px;
      width: 20px;
    }

    @media (max-width: 780px) {
      & > svg {
        margin: 0;
      }
      & > span {
        display: none;
      }
    }
  `;

  return (
    <button className={className} type="button">
      {icon}
      <span>{children}</span>
    </button>
  );
}

ToolbarLink.defaultProps = {
  reverse: false
};

ToolbarLink.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  reverse: PropTypes.bool
};
