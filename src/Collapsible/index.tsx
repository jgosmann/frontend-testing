import CollapsibleController from "./CollapsibleController";
import CollapsibleView, { CollapsibleViewProps } from "./CollapsibleView";

export type CollapsibleProps = Omit<
  CollapsibleViewProps,
  "isExpanded" | "onToggle"
>;

const Collapsible = (props: CollapsibleViewProps) => (
  <CollapsibleController
    render={({ isExpanded, toggle }) => (
      <CollapsibleView {...props} isExpanded={isExpanded} onToggle={toggle} />
    )}
  />
);

export default Collapsible;
