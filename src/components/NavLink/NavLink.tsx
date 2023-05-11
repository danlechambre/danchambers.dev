import React from "react";
import {
  navLinkContainer,
  bgPrimary,
  bgSecondary,
  navLink,
  txtWhite,
  txtBlack,
  truncateTxt,
} from "./NavLink.module.css";
import { Link } from "gatsby";

interface NavLinkProps {
  path: string;
  label: string;
  variant?: "primary" | "secondary";
  truncate?: boolean;
}

const NavLink = ({
  path,
  label,
  variant = "primary",
  truncate = false,
}: NavLinkProps) => {
  const bg = variant === "primary" ? bgPrimary : bgSecondary;
  const color = variant === "primary" ? txtWhite : txtBlack;

  return (
    <div
      className={`${navLinkContainer} ${color} ${truncate ? truncateTxt : ""}`}
    >
      <Link className={`${navLink} ${color} ${bg} `} to={path}>
        {label}
      </Link>
    </div>
  );
};

export default NavLink;
