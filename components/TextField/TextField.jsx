import { css } from "emotion";
import React from "react";
import { zenikaRed } from "../../lib/colors";

export default function TextField(props) {
  const className = css`
    background: transparent;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    font-size: 1rem;
    outline: 0;
    padding: 8px;
    transition: border-color 0.3s cubic-bezier(0, 0, 0.2, 1);
    width: 100%;

    &:focus {
      border-color: rgb(${zenikaRed});
    }
  `;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <textarea {...props} className={className} />;
}
