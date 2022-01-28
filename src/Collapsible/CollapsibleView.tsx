import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export interface CollapsibleViewProps {
  title?: React.ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}

const CollapsibleView = ({
  title,
  isExpanded,
  onToggle,
  children,
}: CollapsibleViewProps) => (
  <div className="rounded-lg border shadow p-2 max-w-prose">
    <h2 className="text-xl font-bold">
      <button
        title={isExpanded ? "Collapse" : "Expand"}
        onClick={onToggle}
        className="rounded hover:bg-gray-200 mr-2 active:outline outline-blue-800 outline-2"
      >
        <FontAwesomeIcon
          icon={faAngleRight}
          fixedWidth
          className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
        />
        <span className="sr-only">{isExpanded ? "Collapse" : "Expand"}</span>
      </button>
      {title}
    </h2>
    <div
      className="box-border overflow-hidden"
      style={
        isExpanded
          ? { visibility: "visible", height: "auto" }
          : { visibility: "hidden", height: 0 }
      }
    >
      <div className="pt-2">{children}</div>
    </div>
  </div>
);

export default CollapsibleView;
