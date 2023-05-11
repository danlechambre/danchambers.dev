import React from "react";
import { mdxCodeblockWrapper, codeTitle } from "./MdxCodeblock.module.css";

interface MdxCodeblockProps {
  children: React.ReactNode;
  title?: string;
}

const MdxCodeblock = ({ children, title }: MdxCodeblockProps) => {
  const ariaId = title && `${title}-codeblock-desc`;

  return (
    <>
      {title && (
        <span id={ariaId} className={codeTitle}>
          {title}
        </span>
      )}
      <div aria-describedby={ariaId} className={mdxCodeblockWrapper}>
        {children}
      </div>
    </>
  );
};

export default MdxCodeblock;
