// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// export function Button() {
//   return (
//     <Link to='sign-up'>
//       <button className='btn'>Sign Up</button>
//     </Link>
//   );
// }

import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";
import "./Button.css";
import { ActionFunction, Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];

const SIZES = ["btn--medium", "btn--large"];

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: MouseEventHandler;
  children: ReactNode;
  buttonStyle: string;
  buttonSize?: string;
  className?: string;
  url?: string;
}
export const Button = ({
  children,
  buttonStyle,
  buttonSize = "btn--medium",
  type,
  onClick,
  url = "/",
}: ButtonProps) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={url} className="btn-mobile">
      <button
        className={` ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
