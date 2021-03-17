import React from "react";

import "./index.scss";

const Toolbar = ({onToggle}) => {
  const TOOLS = [
    { label: "B", style: "BOLD", type: "inline" },
    { label: "I", style: "ITALIC", type: "inline" },
    { label: "U", style: "UNDERLINE", type: "inline" },
    { label: "S", style: "STRIKETHROUGH", type: "inline" },
    { label: "{}", style: "CODE", type: "inline" },
    { label: "''", style: "blockquote", type: "block" },
    { label: "UL", style: "unordered-list-item", type: "block" },
    { label: "OL", style: "ordered-list-item", type: "block" },
    { label: "Code Block", style: "code-block", type: "block" },
  ];

  return (
    <div className="toolbar">
      {TOOLS.map(({ label, style, type }) => (
        <div className="toolbar__button" key={style} onMouseDown={(e) => {
            e.preventDefault();
            onToggle(style, type)
        }}>
          {label}
        </div>
      ))}
    </div>
  );
};
export default Toolbar;
