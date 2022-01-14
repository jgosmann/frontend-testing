import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export interface CollapsibleViewProps {
  title?: React.ReactNode;
  isExpanded?: boolean;
  children?: React.ReactNode;
}

const CollapsibleView = ({
  title,
  isExpanded,
  children,
}: CollapsibleViewProps) => (
  <div className="rounded-lg border shadow p-2 max-w-prose">
    <h2 className="text-xl font-bold">
      <FontAwesomeIcon
        icon={faAngleRight}
        fixedWidth
        className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
      />
      {title}
    </h2>
    <div
      className="box-border overflow-hidden"
      style={{ maxHeight: isExpanded ? "none" : 0 }}
    >
      <div className="pt-2">{children}</div>
    </div>
  </div>
);

export default CollapsibleView;
